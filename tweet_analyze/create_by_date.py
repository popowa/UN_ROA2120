#coding: UTF-8
import os, json
from datetime import datetime, timedelta, timezone
import datetime
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

#################
deleted_num = 0
yesterday = today - timedelta(1)
two_days_ago = today -  timedelta(2)
if db[setting['table_name_date']].count_documents({"date": today.strftime('%Y-%m-%d')}) == 0:
    db[setting['table_name_date']].insert_one({'date': today.strftime('%Y-%m-%d')})
    ## delete row

    count_deleted_row = db[setting['table_name']].delete_many({"created_at": two_days_ago.strftime('%Y-%m-%d') })
    deleted_num = count_deleted_row.deleted_count
    db[setting['table_name_date']].update_one({'date': yesterday.strftime('%Y-%m-%d')}, {'$set':{'num': deleted_num}})


#about.html
navigation = {
    ("Bootstrap", "https://getbootstrap.com/"),
    ("Twitter API", "https://developer.twitter.com/ja"),
    ("Python-Twitter", "https://python-twitter.readthedocs.io/en/latest/index.html"),
    ("MongoDB Community", "https://api.mongodb.com/python/current/tutorial.html"),
    ("Amazon S3", "https://aws.amazon.com/jp/s3/"),
    ("MeCab", "https://taku910.github.io/mecab/"),
    ("Jinja2", "https://jinja.palletsprojects.com/en/2.11.x/"),
    ("Bootstrap Icons", "https://icons.getbootstrap.com/"),
}
template = env.get_template('about.html')
filename = os.path.join(root, 'html', 'about.html')
with open(filename, 'w') as fh:
    fh.write(template.render(
        title = setting['title'],
        navigation = navigation
))
#photo/index.html
template = env.get_template('photo_index.html')
filename = os.path.join(root, 'html', 'photo', 'index.html')
with open(filename, 'w') as fh:
    fh.write(template.render(
        title = setting['title'],
        photo_date = db[setting['table_name_date']].find()
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

## error.html
'''
template = env.get_template('error.html')
filename = os.path.join(root, 'html', 'error.html')
with open(filename, 'w') as fh:
    fh.write(template.render(
        title = setting['title'],
))
'''
#-------------------
import boto3
s3_client = boto3.client(
    's3',
    aws_access_key_id=setting['aws_access_key_id'],
    aws_secret_access_key=setting['aws_secret_access_key']
)

upload_dir = os.path.join(root, 'html')
upload_pages = ['about.html', 'photo/'+photo_uri + '.html', 'error.html', 'photo/index.html']
for page in upload_pages:
    s3_client.upload_file(
        Filename=os.path.join(root, upload_dir, page),
        Bucket=setting['s3_bucket'],
        Key=page,
        ExtraArgs={"ContentType": "text/html"})

log = ['Daily:', today, 'Deleted Date:',two_days_ago.strftime('%Y-%m-%d'),  deleted_num]
s = ','.join([str(n) for n in log])
with open(log_path, 'a') as f:
  print(s, file=f)
