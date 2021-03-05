#coding: UTF-8
import os
from datetime import timedelta, timezone, date
import datetime, json, csv, twitter, random
from jinja2 import Template, Environment, FileSystemLoader

#基本設定
root = os.path.dirname(os.path.abspath(__file__))
templates_dir = os.path.join(root, 'templates')
env = Environment( loader = FileSystemLoader(templates_dir))
setting_path = os.path.join(root, 'setting.json')
setting_ro = open(setting_path, 'r')
setting = json.load(setting_ro)

api = twitter.Api(consumer_key=setting['consumer_key'],
                  consumer_secret=setting['consumer_secret'],
                  access_token_key=setting['token'],
                  access_token_secret=setting['token_secret'])

#[lan-min, lan-max], [lon-min, long-max]
position = {
'第一補給班': [[-300, -170], [-50, 50]],
'第二補給班': [[300, 170],[-50,50]],
'第一空爆班' :[[-600,-420],[-300,-120]],
'第二空爆班': [[600,420], [-300, -120]],
'第一砲兵隊' :[[-310,-170], [-200,-100]],
'第二砲兵隊': [[-700, -500],[-50, 180]],
'第三砲兵隊': [[350,150], [-220,-80]],
'第四砲兵隊': [[700,500],[-100,200]],
'第一後方索敵班': [[-500,-300],[220, 350]],
'第二後方索敵班': [[500,300], [350,220]],
'第一遠距離狙撃班': [[-450, -200], [100, 180]],
'第二遠距離狙撃班':[[450, 200], [100, 180]],
'前衛分隊': [[-200, 200], [-400, -270]],
'後衛分隊':[[-200, 200], [400, 270]],
'ノア' : [[-100, 100], [-100, 180]]
}


user_data = []
#一覧
list_path = os.path.join(root, 'list.csv')
with open(list_path, newline='') as csvfile:
    memberinfo = csv.reader(csvfile, delimiter=',')
    for x in memberinfo:
        user = x[3].replace('@','')
        position[x[2]][0].sort()
        position[x[2]][1].sort()
        try:
            search_user = api.GetUser(screen_name=user)
            print(x[0], 'OK')
            user_data.append({
                'name': x[0],
                'profile_image_url' : search_user.profile_image_url,
                'pos_x': random.randint(position[x[2]][0][0], position[x[2]][0][1]),
                'pos_y': random.randint(position[x[2]][1][0], position[x[2]][1][1]),
                'screen_name': search_user.screen_name,
                'section': x[1],
                'mission': x[2]
            })
        except Exception as err:
            print(err.message)
            print(x[0], 'BAD')


template = env.get_template('base.js')
filename = os.path.join(root, 'formation.js')
with open(filename, 'w') as fh:
    fh.write(template.render(
        user_data = user_data
))
