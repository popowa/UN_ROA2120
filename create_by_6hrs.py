#coding: UTF-8
import os, json
from datetime import datetime, timedelta, timezone
import datetime, numpy as np, math
import MeCab
#Template
from jinja2 import Template, Environment, FileSystemLoader
#DB
from pymongo import MongoClient, DESCENDING
client = MongoClient('localhost', 27017)

#基本設定
JST = timezone(timedelta(hours=+9), 'JST')
today = datetime.datetime.now(JST)
root = os.path.dirname(os.path.abspath(__file__))
log_path = os.path.join(root, 'fetch_'+ today.strftime('%Y-%m-%d') +'.log')

setting_path = os.path.join(root, 'setting.json')
setting_ro = open(setting_path, 'r')
setting = json.load(setting_ro)
db = client[setting['db']]
templates_dir = os.path.join(root, 'templates')
env = Environment( loader = FileSystemLoader(templates_dir) )

########

photos = []
text_all = ''
records_recent = db[setting['table_name']].find().sort('_id', DESCENDING).limit(1000)
for record in records_recent:
    text_all += record['text']
    if 'media' in record['tweet']['entities']:
        photos.append(record['tweet'])

#MeCab
#mecab = MeCab.Tagger('-d /usr/local/lib/mecab/dic/mecab-ipadic-neologd')
mecab = MeCab.Tagger('')
mecab.parse('')
text = text_all.replace(setting['search_kw'], '')
node = mecab.parseToNode(text)
keywords = {}
select_conditions = ['動詞', '形容詞', '名詞']
deleted_keywords = ["*", "する", "絵文字", "そう", "ある", "の", "さん","ん","ちゃん"]
while node:
    pos = node.feature.split(",")[0]
    true_word = node.feature.split(",")[6]
    if pos in select_conditions and not true_word in deleted_keywords:
        if true_word in keywords:
            keywords[true_word] += 1
        else:
            keywords[true_word] = 1
    node = node.next

np_value = list(keywords.values())
median_num = np.average(np_value)
max_num = max(np_value)
num_block = math.floor((max_num - median_num) / 10)
num_blocks = {}
for i in range(10):
    num_blocks[i] = int(num_block *i)
list = list(num_blocks.values())

def getNearestValue(list, num):
    idx = np.abs(np.asarray(list) - num).argmin()
    return list[idx]

appear_num = math.floor(median_num/2)
keywords_filter = {}
for k, v in keywords.items():
    css_value = math.floor(getNearestValue(list,v)/num_block)
    #print(k, v,math.floor(median_num/2), css_value)
    if v >= appear_num:
        keywords_filter[k] = css_value


#index.html
template = env.get_template('base.html')
filename = os.path.join(root, 'html', 'index.html')
with open(filename, 'w') as fh:
    fh.write(template.render(
        title = setting['title'],
        photos = photos,
        photo_of_today = today.strftime('%Y-%m-%d') + '.html',
        keywords = keywords_filter,
        today = today,
        appear_num = appear_num,
        max_num= max_num
    ))

# photo/%Y-%m-%d.html
photos_all = []
records = db[setting['table_name']].find({"created_at": today.strftime('%Y-%m-%d')})
for record in records:
    if 'media' in record['tweet']['entities']:
        photos_all.append(record['tweet'])

photo_uri = today.strftime('%Y-%m-%d')
template = env.get_template('photo_by_date.html')
filename = os.path.join(root, 'html', 'photo', photo_uri + '.html')
with open(filename, 'w') as fh:
    fh.write(template.render(
        title = setting['title'],
        photos = photos_all,
        today = today.strftime('%Y/%m/%d'),
        last_updated = today
))




client.close()

#-------------------
import boto3
s3_client = boto3.client(
    's3',
    aws_access_key_id=setting['aws_access_key_id'],
    aws_secret_access_key=setting['aws_secret_access_key']
)

upload_dir = os.path.join(root, 'html')
upload_pages = ['index.html', 'photo/'+photo_uri + '.html']
for page in upload_pages:
    s3_client.upload_file(
        Filename=os.path.join(root, upload_dir, page),
        Bucket=setting['s3_bucket'],
        Key=page,
        ExtraArgs={"ContentType": "text/html"})


log = ['Hourly:', today, len(photos)]
s = ','.join([str(n) for n in log])
with open(log_path, 'a') as f:
  print(s, file=f)
