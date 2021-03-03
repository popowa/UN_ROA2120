#coding: UTF-8
import os
from datetime import timedelta, timezone, date
import datetime, json
from dateutil.tz import gettz
import twitter
from jinja2 import Template, Environment, FileSystemLoader
#DB
from pymongo import MongoClient, DESCENDING
client = MongoClient('localhost', 27017)


#基本設定
root = os.path.dirname(os.path.abspath(__file__))
setting_path = os.path.join(root, 'setting.json')
setting_ro = open(setting_path, 'r')
setting = json.load(setting_ro)

JST = timezone(timedelta(hours=+9), 'JST')
today = datetime.datetime.now(JST)
log_path = os.path.join(root, 'fetch_'+ today.strftime('%Y-%m-%d') +'.log')
db = client[setting['db']]

items = []
api = twitter.Api(consumer_key=setting['consumer_key'],
                  consumer_secret=setting['consumer_secret'],
                  access_token_key=setting['token'],
                  access_token_secret=setting['token_secret'])



if setting['table_name'] in db.list_collection_names():
    #https://python-twitter.readthedocs.io/en/latest/twitter.html?highlight=getsearch#twitter.api.Api.GetSearch
    last_record = db[setting['table_name']].find().sort('_id', DESCENDING).limit(1)
    start_dt = last_record[0]['tweet']['created_at']
    tdatetime = datetime.datetime.strptime(start_dt, '%a %b %d %H:%M:%S +0000 %Y')
    tdate = datetime.date(tdatetime.year, tdatetime.month, tdatetime.day)
    #指定された一覧からデータを検索する ・上限は100レコード・RT分は除く
    search_tweets = api.GetSearch(term=setting['search_kw'], count=100, result_type='recent', since=tdate, since_id=last_record[0]['id'])
else:
    tdate = datetime.date(today.year, today.month, today.day)
    search_tweets = api.GetSearch(term=setting['search_kw'], count=100, result_type='recent')

for search_tweet in search_tweets:
    if not search_tweet.retweeted_status:
        if not db[setting['table_name']].count_documents({"id": search_tweet.id}):
            tdate_jst = datetime.datetime.strptime(search_tweet.created_at, '%a %b %d %H:%M:%S +0000 %Y') + datetime.timedelta(hours=9)
            item = {'id': search_tweet.id,
                    'retrieved_at': datetime.datetime.now(JST),
                    'created_at' : tdate_jst.strftime('%Y-%m-%d'),
                    'created_at_jst' : tdate_jst,
                    'text': search_tweet._json['text'],
                    'tweet':search_tweet._json
                    }
            items.append(item)

inserted_records = db[setting['table_name']].insert_many(items)


last_record_new = db[setting['table_name']].find().sort('_id', DESCENDING).limit(1)
client.close()
log = ['GetTweet:',today,last_record_new[0]['created_at_jst'], ' => ', len(items)]
s = ','.join([str(n) for n in log])
with open(log_path, 'a') as f:
  print(s, file=f)
