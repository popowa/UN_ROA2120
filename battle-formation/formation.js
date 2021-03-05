$( document ).ready(function() {
  var map = L.map('map', {
              maxZoom: 24,
              minZoom: 1,
              crs: L.CRS.Simple
          }).setView([0, 0], 1);

        var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1291274967577837569/jMu9HXdd_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-80, 395);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/KRokuka">雪トオル</a><br />後衛分隊').addTo(map);

        var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1251790763156926465/hJEPN0py_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-438, 283);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/ROA2120">祇坂タイガ</a><br />第一後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1251790763156926465/hJEPN0py_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(129, -281);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/ROA2120">統宜イズミ</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1251790763156926465/hJEPN0py_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(26, 82);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/ROA2120">鬼燈カレン</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1364250867940003871/BB7fhjAK_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(57, -299);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/Huwa_susk">飞鳥ヤイバ</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1359646290276012037/6Ux7it7g_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-75, 382);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/lllg8436">藍曐ミナト</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1343630736763486209/VxvHLFDX_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(496, 249);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/shushu0xxx0">鷂ベニ</a><br />第二後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1359850209002487810/WjF9CyDR_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-577, 157);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/plaine_8ight">‪猫與野‬イヲリ</a><br />第二砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1367157016746070018/toTWTcc__normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-445, -203);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/saegami2">與山ハルヒコ</a><br />第一空爆班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1360944943544508416/WB1M4EK2_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-294, -144);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/Toe_11_11">邪答院ヨツレ</a><br />第一砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1359850209002487810/WjF9CyDR_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-230, 115);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/plaine_8ight">狗奴トウスケ</a><br />第一遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1359157247834783762/CZyiAl1Z_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(155, -84);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/fuchichi_titti">貓垣センジ</a><br />第三砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1354755182198804481/ti3DByrX_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(243, -29);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/twist_konnyaku">凱霍ウキヨ</a><br />第二補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1365183567521746945/aeM2wt3G_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-497, 220);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/apple_tin_po">愛徳ラブ</a><br />第一後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/955051333173653504/Ob1ytNDH_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(78, 44);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/ahiru_akituki">来錨ニノ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1286286420588417025/De0If5Gv_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-91, 123);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/d_g_d_g_">眞境那ホノカ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1367401484183166978/U_DqDHk8_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(366, 332);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/ukfire_ssk">菱喰アキラ</a><br />第二後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1344194463426437120/-zET5plA_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(122, -337);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/kaffelakiz">矢爲義コウタロウ</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1291594537710698497/GcUMoNcr_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(248, -171);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/kinosuK">泡沫ナユタ</a><br />第三砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1362725999792644096/9Tq_jQ27_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(109, -286);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/humi_23_">櫟ヨウスケ</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1344523204484767744/dmMhf-hI_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(72, 177);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/jie_ssk">奓嶹アオネ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1339903657190465537/lTSO3yzS_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(79, -14);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/miyashiro_w">凰タツナオ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1323952137722687488/M3sg2fiv_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-180, 394);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/minamadeie">頗羅堕アズマ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1338961134376783872/y3wpfqIO_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-322, 151);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/taketouhu">隝紅カヅサ</a><br />第一遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1367760716787113993/9WV7Kni6_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(160, 384);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/sukeoroa18">三丌ミキ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1364513645175005184/XrxsMcUK_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(37, 124);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/po3515">石楠花アベル</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1087492346483068928/bocgYQGo_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(437, -290);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/flowers_blue6">馬酔木ツバサ</a><br />第二空爆班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1361002563882033157/jvbLsxY9_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(34, -303);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/Door_senko">餞ウタ</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1361000584170536961/QbIXKSgO_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-237, -25);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/D_usui00">釼羽ミソラ</a><br />第一補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1342017114375221248/vfzQlN-I_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-14, 146);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/wkm_mo">磨墨　コモリ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1307107707086929922/Ydi8TY1G_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-262, -134);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/tomoki_watanuki">磴モモ</a><br />第一砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1333769875609686019/7zwcW9sR_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(550, -43);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/genkai_yawa">狗甘トワ</a><br />第四砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1353622766004523009/wb5TKsy-_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(516, -298);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/1_ogsn">断花オドロ</a><br />第二空爆班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1364615975421677568/9MK8Srp4_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-52, -392);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/MTO_SNK2120">鬮ヨツカ</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1365928226841796610/hbmHLWD-_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-336, 162);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/kikakuKTR">杜若ヒトバ</a><br />第一遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1338961134376783872/y3wpfqIO_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-237, -32);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/taketouhu">鳶尾クヌギ</a><br />第一補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1367157016746070018/toTWTcc__normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(512, -60);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/saegami2">古泓ヤナギ</a><br />第四砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1366641964909809665/se6T81O5_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(57, -382);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/ast_84_2">灑条イチョウ</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1345359240425213952/hL_wvDUO_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-169, -397);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/ama33515">榛コウタロウ</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1365988140998041602/4JTWXtjS_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-659, 81);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/510tory">鬥郷アズマ</a><br />第二砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1245198011912695808/sG0DLX7E_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(29, 80);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/mofu_ranger">欗杭カズイ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1361701913901764609/jbnenjfW_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-572, 95);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/LOVE_LOCATION">刎音夛トビウオ</a><br />第二砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1367453138500775937/FDbiCr6D_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(63, 71);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/seiyui_k">躑躅京キヨタカ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1344661110864035840/tf6TAQ4t_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(174, 378);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/mimi_muttsu">无久龍ライトウ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1367140370727923715/22Ep4KQz_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(141, 375);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/knn_susk">遊亀ナギサ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1353659640962113536/3Zn6wE18_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(297, 135);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/yotacca_ROA">尹乍那 ミオ</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1356536095236739074/ZIDqwybU_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(418, 103);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/sorairo_purin">鈴忌ミヨコ</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1356804824428208129/9NoZQ4x7_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-130, 356);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/HUGUHUGU_me">八月一日ランマル</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1148908736276119552/7HREXgto_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(53, -292);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/asahina_sumika">坤塿 ドモン</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1112731422664515584/gv2tJUFh_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-448, 167);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/ampmfazz">大禰冝ジュンコ</a><br />第一遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1354410589246820354/LfddY-jg_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-303, 322);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/rasp_16">小丹枝リコ</a><br />第一後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1359117824275353609/u3BeO3kD_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(15, 91);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/yd2_jlx">救世ヒシロ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1305149542480797697/c9E9-WAz_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(54, 57);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/sima__senk3">サイカ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1350483661741690880/0kmrEnLB_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-180, -113);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/nabegahara">立葩ハヤテ</a><br />第一砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1367617186580164608/ZUPqK_xj_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(440, 274);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/gonzou_xx">祁答院ヒフミ</a><br />第二後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1362782829587783680/R2kMrPaH_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-523, -182);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/hakabakasii">赫糸コトサネ</a><br />第一空爆班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/980419095706271744/-ndBiFM0_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(495, 239);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/rokkka0506">亖瞳ユキミ</a><br />第二後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1367075900139823106/IXfAbvVB_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(379, 128);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/00_LATIMERIA_00">壽洲國アマネ</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1367454757724454917/ujSfcRGb_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(105, 368);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/masspoteto">蝶勿拝師サナギ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1364745011619717123/VWcVuL-Z_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(89, 120);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/ju_bnzk">羣穣チセ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1112936931099381760/taNTp_mI_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(119, -371);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/asx_aji_475">炎谷テッカ</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1364125247398535175/WeCrVLv7_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(566, -273);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/rabi_kamone">餐場ネロ</a><br />第二空爆班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1353714585530847234/UwLIkgGU_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-474, -170);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/trck_pxv_2">與風イカル</a><br />第一空爆班').addTo(map);

              var myIcon = L.icon({
                iconUrl: 'http://pbs.twimg.com/profile_images/1365257936721702916/HtDL6CBm_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-285, 13);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/hajimenbou">崩前ワダツ</a><br />第一補給班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1358277662012178433/2DuLqcnI_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-82, -386);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/abovetheozone">春薗ジオン</a><br />前衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1364125247398535175/WeCrVLv7_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-591, 65);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/rabi_kamone">赧羽ユウリ</a><br />第二砲兵隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1364425742155538434/CEaY3ywN_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(554, 141);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/hkr__15">廿樂サクノジョウ</a><br />第四砲兵隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1284786858925277185/GwpYy63l_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-421, -161);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/Kuru__32">禾几トウマ</a><br />第一空爆班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1285118916851716096/bZ9wSsrN_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-541, 23);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/sidareame_time">緑青イズミ</a><br />第二砲兵隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1351076993400451075/P7zVTOP9_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(206, -11);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/mokusei_kikaku">厶㠯崎ナツメ</a><br />第二補給班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1365257936721702916/HtDL6CBm_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-5, 305);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/hajimenbou">京ナヲ</a><br />後衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1356804824428208129/9NoZQ4x7_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-55, 35);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/HUGUHUGU_me">八月一日リンノスケ</a><br />ノア').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1343281911020457984/tjJSWgUx_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-70, 159);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/senkou_skr">志紀嶼センリ</a><br />ノア').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1356536095236739074/ZIDqwybU_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-62, 314);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/sorairo_purin">佐凍テイト</a><br />後衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1272738163300040704/1ucBkKyP_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-129, -293);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/SHO_49mo210001">垂髪サカキ</a><br />前衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1365598482501754887/r1iIY7lR_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(442, 141);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/DoZGeZ">万年青アキラ</a><br />第二遠距離狙撃班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1364745011619717123/VWcVuL-Z_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-421, -178);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/ju_bnzk">鴉生アコヤ</a><br />第一空爆班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1359145054388953091/0Uzjnqwl_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-29, 109);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/Az_zA8">鵲ヒジリ</a><br />ノア').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1190698866615697409/OkwQ_X9b_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(595, -55);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/punipuni_sosaku">嵯峨座ハルノ</a><br />第四砲兵隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1364426042279006208/3C4-ohfD_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-250, -45);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/R_twkkk">撥条スバル</a><br />第一補給班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1285118916851716096/bZ9wSsrN_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-317, 328);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/sidareame_time">篝火ホムラ</a><br />第一後方索敵班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1365598482501754887/r1iIY7lR_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(68, -4);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/DoZGeZ">名都借ハルミ</a><br />ノア').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1348405782547582977/262iDzm-_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-82, -289);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/yomiya08">護川カナイ</a><br />前衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1272738163300040704/1ucBkKyP_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(367, 230);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/SHO_49mo210001">垂髪アザミ</a><br />第二後方索敵班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1351076993400451075/P7zVTOP9_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-381, 101);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/mokusei_kikaku">冥湛ハレ</a><br />第一遠距離狙撃班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1353377676568875008/y1ERW9OI_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(40, -59);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/moumiam_">个嚞ミドリコ</a><br />ノア').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1333447490641621001/g47_fZD9_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-11, 51);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/hanako0655">八社宮カンナギ</a><br />ノア').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1360000887188455424/AOLU-FrF_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-57, 354);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/call_me_otou">阿毘須カイエン</a><br />後衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1317423724224606208/6lBqZPwI_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-448, -142);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/3nc023">衒ミサオ</a><br />第一空爆班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1359873453906534406/1PHzA4lL_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-219, 104);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/ice_ga_umai">杏ミゾレ</a><br />第一遠距離狙撃班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1287697519896457216/6g0JQjv5_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-258, -179);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/msmr_0501">塒みなと</a><br />第一砲兵隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1343533366981758976/O1kvMAtF_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(171, -16);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/sg_ppp">磴トウゴ</a><br />第二補給班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1306772645040414721/dm9NbEBK_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(94, -309);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/kino_sousaku1">御蘖胤アゲハ</a><br />前衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1362116421996568576/yD7oR8Yb_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-157, 300);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/toarua_PF">嫩葉 ノヅチ</a><br />後衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1344307723890900992/M3hNamfq_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-2, -26);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/_Muginosuke_">名都借アサギ</a><br />ノア').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1255439879481298946/Cs-DQWZH_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-82, -352);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/ho_ney_buri_al_">蜑軸ナハト</a><br />前衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1361351339301740548/QZTcqyW9_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(26, 114);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/zuisyo3">阡金樂テル</a><br />ノア').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1253995228001734656/GEaTLQwd_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(250, 109);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/I881117I">碧影ライカ</a><br />第二遠距離狙撃班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1357729734692507651/kGlsRprj_normal.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(408, 317);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/kano_koji">菟シズカ</a><br />第二後方索敵班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1306772645040414721/dm9NbEBK_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-35, 397);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/kino_sousaku1">御蘖胤サクラ</a><br />後衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1344307723890900992/M3hNamfq_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-11, -342);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/_Muginosuke_">三ヶ月シデン</a><br />前衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1350591070069903363/9-2owDoD_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-64, 172);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/0xkmnkk">丁字シラセ</a><br />ノア').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1352937512122019840/zJHdneVl_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-450, -192);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/fukufuku_15">鬼無瀬ヒバナ</a><br />第一空爆班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1306772645040414721/dm9NbEBK_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(72, 395);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/kino_sousaku1">御蘖胤サクラ</a><br />後衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1284871579550150656/dMtPNmGI_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(44, -308);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/siu_sousaku">鉽波キヌ</a><br />前衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1276563461669965824/H_oDCcDA_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-12, 318);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/itoyori_zamurai">五百雀シクラ</a><br />後衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1364565528354856960/hNpk4YPB_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-157, 365);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/shidukutt">雲林院ユヅリ</a><br />後衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1361655047902224388/In9RaO4N_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(581, -127);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/sikakunanaya">篠笥サキ</a><br />第二空爆班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1366614521620533249/g7gwgDoR_normal.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(212, -200);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/awoxxharu">愜サダハル</a><br />第三砲兵隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1363029863506976771/eDpmcl3Y_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-291, -143);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/lt1380">御劔ジン</a><br />第一砲兵隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1333447490641621001/g47_fZD9_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-578, -216);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/hanako0655">八社宮カグラマ</a><br />第一空爆班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1366614521620533249/g7gwgDoR_normal.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-29, 341);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/awoxxharu">綿津見カイリ</a><br />後衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1342604992482459649/-02hUwT9_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-449, 128);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/111ymt_kikaku">ヰ曇ミツル</a><br />第一遠距離狙撃班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1359027746123382786/wNTGpg-F_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(92, 360);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/Oneiros5051">梓ノ郷シュウ</a><br />後衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1361655047902224388/In9RaO4N_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-178, 5);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/sikakunanaya">瑞方コトコ</a><br />第一補給班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1364492344301559810/d7QW42jl_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-595, -256);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/mark_0200">帯刀クウコ</a><br />第一空爆班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1360989967921475585/Fz0Xo2o1_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-198, -385);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/MHGS_VS_">長谷鈹ヨナカ</a><br />前衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1361716344874360844/b4zQtIlK_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(200, 314);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/shiorikikaku1">真珠ヲトメ</a><br />後衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1366661949220524035/C1eBexNm_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-544, -266);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/toonodayo">五十山田ツグミ</a><br />第一空爆班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1289863014791880706/Oyz2R__R_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-253, 45);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/Zgvoidy">九峨キリコ</a><br />第一補給班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1360989967921475585/Fz0Xo2o1_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(296, 116);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/MHGS_VS_">日乘アキサメ</a><br />第二遠距離狙撃班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1362090612233629697/TeSsi9y4_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(144, -381);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/t1n0_1">馬場イツジン</a><br />前衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1112661680729657344/OLK1uwsR_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(421, -134);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/nuu_kikaku">不来方ハナミ</a><br />第二空爆班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1364492344301559810/d7QW42jl_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-3, 367);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/mark_0200">一番合戦ガク</a><br />後衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1359761064104108035/_RcvuqHR_normal.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(44, -297);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/pecco_ASK">山査子リンゴ</a><br />前衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1359681255260884995/gePPD9ht_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-210, -107);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/shimezaki">月迦邉セツナ</a><br />第一砲兵隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1342604992482459649/-02hUwT9_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(511, 131);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/111ymt_kikaku">蒼曄キヅキ</a><br />第四砲兵隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1357512309153779712/AjYFY1wu_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-231, -44);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/GeneJest">鐸石スズリ</a><br />第一補給班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1356884847638142978/U8gVESKs_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-430, -278);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/pinono000">杜若フタバ</a><br />第一空爆班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1362634451335847936/ZyqolUPw_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-15, 296);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/romane_like">鵜瀞ミツル</a><br />後衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1356617864330031105/Ccb-Xj3c_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-653, 25);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/sumi_tsubo">斧磨ナツカ</a><br />第二砲兵隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1345357773740015616/Kqe28kuZ_normal.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(364, 127);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/sekobi">喃雲ミツキ</a><br />第二遠距離狙撃班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1358560567758229504/UnVMSAyM_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(468, 225);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/ponpon0538">鷦燕ハルカ</a><br />第二後方索敵班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1366764989063720963/wXJg2U0n_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(504, -196);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/cdDu7l6cIzWEq4H">名刀ミライカ</a><br />第二空爆班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1349640754235285509/UAn2_JPt_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-667, 101);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/tobutori5">熊埜御堂アコ</a><br />第二砲兵隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1366764989063720963/wXJg2U0n_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(269, 10);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/cdDu7l6cIzWEq4H">石動アタル</a><br />第二補給班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1357295417130590209/Kr7vgbh0_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-17, 38);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/umm_nn">華統ニヲ</a><br />ノア').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1367555448501534722/mxiyfGAR_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(641, 164);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/mamama_222Wf">天壙 ナズナ</a><br />第四砲兵隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1362634451335847936/ZyqolUPw_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(15, -50);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/romane_like">八月一日イツキ</a><br />ノア').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1365475979502653440/iVVZ9hoA_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(428, -194);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/Beni_retro">樒原シキ</a><br />第二空爆班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1367481703099465735/2pQ9YvuS_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(140, -340);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/sachi_wan5">鐵艸ナマリ</a><br />前衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1308373093526634496/pApl0RQc_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(489, 296);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/fliez_ela">岾喪戸コウユウ</a><br />第二後方索敵班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1366985656598110215/wN6g96Ar_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-181, -190);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/zosui4">嵳々木アラタ</a><br />第一砲兵隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1258062939359023111/x5y-FSD__normal.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(234, -40);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/nemrisu">帆乂アケヒ</a><br />第二補給班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1317882771017093120/xkc4sOoe_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(524, 109);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/247_ssk">神古都ヒノエ</a><br />第四砲兵隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1258062939359023111/x5y-FSD__normal.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-349, 117);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/nemrisu">江乜スナヲ</a><br />第一遠距離狙撃班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1190698866615697409/OkwQ_X9b_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-188, -8);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/punipuni_sosaku">餌網代ウミツキ</a><br />第一補給班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1366999998441738243/OWhSE4lS_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-432, 288);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/masachika_K">燕昇司ハヤテ</a><br />第一後方索敵班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1367509103879229444/Ujo1dDr7_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-299, 34);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/pokapokayanaa">傀儡ゲド</a><br />第一補給班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1356617864330031105/Ccb-Xj3c_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(397, 341);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/sumi_tsubo">山女原タケヒ</a><br />第二後方索敵班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1346027895735476225/A0GZvD-d_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(622, 177);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/11xteto">花篭サトコ</a><br />第四砲兵隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1358580216671522817/66WjoVN2_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-267, 177);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/gomagoma0009">皇チカ</a><br />第一遠距離狙撃班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1283032271956606978/zLAjSI7N_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-623, 118);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/celestite204_13">虎魄ユノン</a><br />第二砲兵隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1353363395462893574/QCvjJ5r7_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(365, 286);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/ASsousaku">天明屋アラタ</a><br />第二後方索敵班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1366999998441738243/OWhSE4lS_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-352, 149);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/masachika_K">青天目サクヤ</a><br />第一遠距離狙撃班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1365534528224120833/LOyCUuSK_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-484, -232);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/pomadish">凪大洋シズカ</a><br />第一空爆班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1358580216671522817/66WjoVN2_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(546, -100);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/gomagoma0009">蘭ヨミ</a><br />第四砲兵隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1364541377791422465/XqFf8ne8_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(323, 138);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/Zakkisousaku">霧嶋 ムラサキ</a><br />第二遠距離狙撃班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1359133002542968832/ZKDKumBp_normal.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(149, 327);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/affsakurayz">叉鎌木ヒョウガ</a><br />後衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1351873594649841665/bOnqcqIo_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-437, 249);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/Retaan_se">日月アラシ</a><br />第一後方索敵班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1364940088652697603/fMrZsPlO_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(10, 324);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/_ADK3">縣鵣メグル</a><br />後衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1355910761873240070/GV_k_H3c_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-564, -127);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/chooo_ko_jo45">幽ジン</a><br />第一空爆班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1366777464379215872/TaybeYXJ_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(75, -273);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/0490sgr">天厡 ツバメ</a><br />前衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1285540673895067648/MkMQDOmM_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(12, 359);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/ronpa012606">入楸ノゾム</a><br />後衛分隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1366777464379215872/TaybeYXJ_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(12, 95);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/0490sgr">夜星 カク</a><br />ノア').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1310115035620892673/BmE8oxFO_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-274, -196);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/Fno_EX">寄トキワ</a><br />第一砲兵隊').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1359849184254328835/SBdeD2aE_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-274, 165);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/maturi_pix_1115">籌刺ゼンジュウロウ</a><br />第一遠距離狙撃班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1325310620023971840/Njh0bW9l_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-69, 11);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/shu1_02">砂塔カナタ</a><br />ノア').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1353641613688356865/BETv-EKW_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-315, 155);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/11_senkou">桜楕チサト</a><br />第一遠距離狙撃班').addTo(map);

  var myIcon = L.icon({
    iconUrl: 'http://pbs.twimg.com/profile_images/1363101298464235532/cGxtHqi3_normal.jpg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -50]
});
var point = L.point(-180, -300);
L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/108to8">漆真華ミモリ</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1358025423087538177/JVSox5I9_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-255, 147);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/EBmnmn">骨骨カルタ</a><br />第一遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1363819674476056579/me1Po7G5_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-284, -16);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/Toonososktwo">鷆ヨダカ</a><br />第一補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1323973626173911040/FG7RURiw_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-431, 303);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/mayo_kkkxx">安居院ロザリア</a><br />第一後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1363101298464235532/cGxtHqi3_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-180, -22);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/108to8">熊野御堂チョウスケ</a><br />第一補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1279653025041113089/Fun-qDlH_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-344, 179);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/kesuchihi">左右ナカリ</a><br />第一遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1278724920806002689/4quM-xoU_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(24, 279);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/tw_tk_kk">日明アキラ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1365654302979616768/0qew8WSZ_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(307, 162);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/mori_713">乃夂留ツツガ</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1363713698460667913/ucPmB0Vv_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(202, 110);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/myaomyao18">姮榮ミオリ</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1285486735183327232/z4OWlD5S_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-599, 116);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/jig0x0">十彎クク</a><br />第二砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1354358218814754820/_F5GqP0q_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-22, 13);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/felier_">墓地岩メドサ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1360970651977191426/bCKqRx95_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-268, -22);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/hushigi_sekai">朏 アイ</a><br />第一補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1364876216520429572/5_tvBkVB_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(418, 110);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/sencota">和夛浰タスク</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1345393037355098113/0lhmuqJm_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(99, 14);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/momizi_orosi2">杜若ミツバ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1341313730974371840/vstaEYQi_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(80, 378);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/_pipipi_pip_">間久邊ツミ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1367442356169887745/3L0qYZ9f_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(259, 156);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/yukiko_kikaku">治部袋イクミ</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1341313730974371840/vstaEYQi_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(435, 147);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/_pipipi_pip_">廻合チナミ</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1361081400691097600/fNTciRXG_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-319, 120);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/tyucannbot">一アヤメ</a><br />第一遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1301838881696833536/fsmXWpRu_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(94, 172);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/m_yozora1008">ハスミ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1361081400691097600/fNTciRXG_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-87, -357);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/tyucannbot">稻乃カナコ</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1358642287832535047/RrlOgXmn_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(68, -295);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/pari2_piyochi">緑青マユミ</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1364597543984713728/Fkw7JsS__normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-293, -181);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/rnurnun">響ミチカケ</a><br />第一砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1343349022061330432/9ogw3Y-7_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-36, 361);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/nassan195">坐臥奴間ワニ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1358025423087538177/JVSox5I9_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-198, -339);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/EBmnmn">肉叢シシマル</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1366524262283026432/txzqR_Xu_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(61, 148);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/yo_t7a">訓覇マヨイ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1351608286932398080/ND-sLJRc_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-466, 278);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/lilium_make">真艸嶺アズマ</a><br />第一後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1206958301641969665/BrRCsl7g_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-261, 143);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/c_kirisame">大光明ジュセツ</a><br />第一遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1357572321788104704/ukdKnacs_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-216, 144);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/k_ki_kaku">湶ユキナリ</a><br />第一遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1206958301641969665/BrRCsl7g_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(284, 19);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/c_kirisame">捌月朔日レンカ</a><br />第二補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1355560996983558148/UGrrzs3e_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(4, 25);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/kurage082">木賊ライチョウ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1363695152972271622/oM3y6tjG_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-292, 115);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/escape_108">洸紫雲エル</a><br />第一遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1314959261038833664/shBiSUb0_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(47, -7);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/musitobi">咫千華ハルキ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1301452640946061313/iOLhZUx5_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-580, -136);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/hotahota_hotate">五十木ミドリ</a><br />第一空爆班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1338399381138022402/-8UhTvsS_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-374, 118);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/240kaa">墜栗花リツカ</a><br />第一遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1315646006566952960/CY22tNIk_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-51, 290);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/hhwssr">泳キッカ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1367119295549870085/tUbPqhFl_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(429, 114);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/_DAMARU">渼琊櫻マミル</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1355560996983558148/UGrrzs3e_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-543, 19);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/kurage082">松七五三トキ</a><br />第二砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1337096032061063168/b0XsWeYB_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(532, 17);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/zoh4ll">繭拿ユマ</a><br />第四砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1322545066552905728/wScxwDr8_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-548, -231);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/96Mitsu_roa">神禺アキラ</a><br />第一空爆班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1355878052195049483/C4HWc3_l_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-174, 332);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/m_yukihime">冀直カイラギ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1316735610921443328/9J2owvgk_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(384, 165);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/i_l_ya_7889">炯浩院ヒイロ</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1367747406779936768/M0l3mOps_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-261, -176);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/0yasumi__zzz">雅楽代ハイネ</a><br />第一砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1345026427989606400/mXZMs0-C_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-597, -281);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/6730Zun">奈落迦ヱンマ</a><br />第一空爆班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1315680718865874944/XCRi2fwD_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(467, -298);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/nami_ocean">日堯イノリ</a><br />第二空爆班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1315680718865874944/XCRi2fwD_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(25, -4);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/nami_ocean">星乘ソラ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1345026427989606400/mXZMs0-C_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-166, -393);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/6730Zun">盂蘭盆ヒツギ</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1358642855871279104/fgaDD-ne_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(333, -212);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/23x2_46">橿凪チヒロ</a><br />第三砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1366266092918738945/-qDR8o59_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(598, -240);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/muzin_tou">豌堂ミコタカ</a><br />第二空爆班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1365291376129187842/OCMuILV8_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(573, -163);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/an__one">冰室イオ</a><br />第二空爆班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1365665455583633412/JoALvmlR_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(23, -2);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/snooze__zZ">塒ヨアケ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1364757095082385410/3LDy8sco_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-580, 160);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/asatte_ging">苅兼テンラ</a><br />第二砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1329637650194599938/Xd5_TpqX_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(222, 36);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/kannaxo">柯エイジ</a><br />第二補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1361329903178633216/J70Tcrr9_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-183, 284);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/yagi_uchinoko">七五三シロジ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1269544934295527425/PMOKQyPH_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(97, -76);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/___shupomi">五二赫クジラ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1358072342992228352/diHAhL2H_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-445, -136);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/bias_kikaku">薮椿ヘビガラ</a><br />第一空爆班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1347876777788538885/It9I-L5X_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-261, 172);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/mti3_zz">一二ミツバ</a><br />第一遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1358072342992228352/diHAhL2H_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(437, 120);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/bias_kikaku">乙女桜アダ</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1365932556214886402/yDjud16l_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-72, 105);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/wi_Lv7">善知鳥ヤスカタ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1365932556214886402/yDjud16l_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(266, -217);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/wi_Lv7">海松ハナダ</a><br />第三砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1338004474917359616/gnmh2FAd_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(487, 250);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/bo_bokko">道祖尾シズ</a><br />第二後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1269985525982564353/pc30PpwQ_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(169, 278);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/kagayakuchi">安居院アグリ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1348175169945100290/3uml0zOQ_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-205, -30);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/kirikabu7">曬科 ツカサ</a><br />第一補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1269544934295527425/PMOKQyPH_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-30, 56);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/___shupomi">五二赫クジラ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1366334821610393601/c63Jtn04_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(170, -181);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/nrm_kkk">青天目イザヤ</a><br />第三砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1364231991642583045/btlfq1Z7_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(301, 278);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/yutany_">陸奥イツカ</a><br />第二後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1367628682588655617/Vg2Tf1IG_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(227, 126);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/polaris_mini">雛罌粟アンリ</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1345334728312803328/BkSTGQVJ_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(82, -44);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/mk125780716">五百蔵　シャルル</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1344350416465661953/8Kd9ELo6_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-220, -33);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/Zz_negura">願依　コト</a><br />第一補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1269544934295527425/PMOKQyPH_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-485, 305);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/___shupomi">又飯時コメコ</a><br />第一後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1269544934295527425/PMOKQyPH_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-57, 82);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/___shupomi">五二赫クジラ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1207304384469590017/LTEK00ub_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(14, 311);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/moti_kikaku">梧月晦ヤヒロ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1207304384469590017/LTEK00ub_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-204, 0);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/moti_kikaku">京ツカサ</a><br />第一補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1359474191481798661/ipvTUkVh_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-64, 94);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/machi_o1">花烏賊ユウリ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1366799136062775296/-ASf3y5__normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(113, -376);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/5959_mazui">八社宮カエデ</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1366766028722593796/5G2IzhGn_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(650, -19);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/imo7512">纐纈ミツ</a><br />第四砲兵隊').addTo(map);


        var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1331111808447303682/7kfQd32Z_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(361, 146);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/hiren_xx">鵤オウミ</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1308439179894767624/77Ut1lJM_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(238, 107);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/Rein00_k">皐月シノ</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1348662454453112838/rbYeWBDX_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(160, -97);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/18sekin0">四十九院レンジ</a><br />第三砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1344672737328058368/eOpYwPnZ_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(378, 317);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/i2050403">桺木キョウ</a><br />第二後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1360244897391935490/KmYY25g3_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(576, -273);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/skr_twkkk">楪セツカ</a><br />第二空爆班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1319118858590982151/tdZ3f16F_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(96, -355);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/niku__r_o_a_">輝ノ下アキカゼ</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1356966721786007558/JQlX-rII_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(325, 317);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/S_O_D_A_soffice">勿来アサヒト</a><br />第二後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1356819558032527361/XkUkVN7x_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-339, 137);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/87gss">璉條院セルイ</a><br />第一遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1367521763676934146/uw_5-8em_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-41, 318);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/skrblue_">靜皇ダイチ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1358409940268847108/KjwueLyx_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-10, 13);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/82k_1">阿曇マツリカ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1361973595971284997/Ds6mpxpY_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(198, -308);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/kujsnk">黒葛マヅル</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1361341320506216448/RjjtZF3D_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(600, -200);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/nmk_kikaku">枉木ネガイ</a><br />第二空爆班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1367506522217967620/Lkhr23a6_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(286, 166);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/sasi_me">蹶濤院イサナ</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1363745779907616771/YeXp6xR0_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(464, 313);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/motu_ss">艸眞ガク</a><br />第二後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1363528422610276354/wkI37tLJ_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(556, -151);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/susuuu759">亞鳥羅ミキヲ</a><br />第二空爆班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1364952984057221120/dNRbcDNE_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(25, -285);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/kulu_298">赫矩キョウジ</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1361578181539491844/h0Eym1Bp_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(263, 132);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/capopopopo_n">鏑流馬ハヤテ</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1361578181539491844/h0Eym1Bp_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-27, 57);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/capopopopo_n">企救岳イロハ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1364125518124130309/EGmOsDcj_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(156, -282);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/hageta_usagi_mw">縹ミノウ</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1341019479581442048/X7zm8NFZ_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-211, -140);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/zakuro_nx">壹文字シュウスイ</a><br />第一砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1341019479581442048/X7zm8NFZ_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(309, 100);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/zakuro_nx">篝マキオ</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1364828917417189377/arjDFqoX_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-491, -249);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/916_hedgehog">遑冀ヱイヂ</a><br />第一空爆班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1361308230731722756/E7KhFcLS_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-234, 43);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/Existence_Plan">个个川ゼツ</a><br />第一補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1367680996783517701/uVRsIuOH_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-35, -348);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/CCC_kuroneko">狼谷マホロ</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1367157332317143040/S_rQadKu_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(63, 122);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/kanato__zatta">韶香エニシ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1367157332317143040/S_rQadKu_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(211, 111);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/kanato__zatta">雨瀧雨ナギサ</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1360697762992459776/K6R6f0hD_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-308, 112);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/KANADE_ROA">響岐カナデ</a><br />第一遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1294279096650719232/xXOoMH7I_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-399, 264);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/mikagami_akasha">虚々ヰウツセ</a><br />第一後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1329263351080226816/dS-2sNoQ_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-210, 175);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/w_w_w_imy">眞艸嶺ドゥ</a><br />第一遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1329263351080226816/dS-2sNoQ_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(138, 398);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/w_w_w_imy">瀑布河サヱ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1289149052488056833/AWHfHQGN_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-487, 235);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/ctt_snku">縣ロア</a><br />第一後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1289149052488056833/AWHfHQGN_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-191, 309);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/ctt_snku">夜導円ミツル</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1359789242944131074/pl6TrbIs_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-645, 174);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/ju_totokusatsu">鬆嗣圸ハジメ</a><br />第二砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1348380510104350720/EQluIPPO_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(225, 11);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/oreha_semicolon">月暈ジン</a><br />第二補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1363500952905392128/Zfe9drg7_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(45, -322);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/Nandato_kora">不死川ハヅキ</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1354033555458801664/UozHTVY2_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-270, -31);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/world_excuteme">織箒ソラ</a><br />第一補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1352294039127658501/9T2ywFIM_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(62, -87);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/oyatsu_krps">无殻　イト</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1277282697166024707/s3bAzeub_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-332, 178);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/sako_ku">五六アサト</a><br />第一遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1277282697166024707/s3bAzeub_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-43, 81);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/sako_ku">雅楽代ホマレ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1360242261250826244/pQbGWr9Y_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-162, 292);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/m_ck_b_ent">鎹ニーナ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1263694634099724288/P06UsZvt_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(277, -162);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/aimaru_utg">漚樹ウツギ</a><br />第三砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1366043677202653189/P6iXfxiN_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(184, 396);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/9akuy0r0">剣靏来カズヤ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1363391670495023104/6kOCQwjV_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-414, 248);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/aankpp">不来方オウマ</a><br />第一後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1363391670495023104/6kOCQwjV_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(257, 104);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/aankpp">䰗目ミツル</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1359778525473955840/J8GSX-QK_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-341, 296);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/hmMnxKMJaysZW9X">一尺八寸ミサト</a><br />第一後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1359778525473955840/J8GSX-QK_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-573, 84);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/hmMnxKMJaysZW9X">一尺八寸レイヤ</a><br />第二砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1361308230731722756/E7KhFcLS_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-250, -38);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/Existence_Plan">个个川ゼツ</a><br />第一補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1359006907248250880/l4vfbceZ_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(249, -173);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/nekonabe39">朱鷺夛コウヘイ</a><br />第三砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1359006907248250880/l4vfbceZ_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(86, -96);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/nekonabe39">四リカ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1353695068616445952/vUlaJt5K_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-186, -112);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/wvj_p">跡永賀ゲン</a><br />第一砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1339230327554785280/E2nj_8fc_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-363, 321);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/umumFCP">寄リンコ</a><br />第一後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1339230327554785280/E2nj_8fc_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-159, 368);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/umumFCP">向縹トオル</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1333055638142738432/1zCZGDXH_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-477, 294);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/sakimoto_0">舶凰 ラニ</a><br />第一後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1293102622522580996/D_t_vQ6y_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-253, 17);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/kat0yue">才燈ユイト</a><br />第一補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1293102622522580996/D_t_vQ6y_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-146, -370);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/kat0yue">綾芽タケヒト</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1310376206408151040/hIa6NnwN_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-62, -336);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/da_e00014">善菟辻エトリ</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1340282604759601152/2PEOXGGr_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(298, -22);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/higumokikaku">大鳳ヒビキ</a><br />第二補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1340282604759601152/2PEOXGGr_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-658, 69);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/higumokikaku">榛名シグレ</a><br />第二砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1363447203524603904/CF4SdqNT_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(275, 47);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/Katuai_Y__">四月一日シジマ</a><br />第二補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1315657787037241344/x-rVmfxO_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(289, -198);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/Mota__mota__">谷峅ケイト</a><br />第三砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1323419095484657665/5s4wF5Z4_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-62, 304);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/oister_rui">神々廻レイジ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1323419095484657665/5s4wF5Z4_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-640, 109);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/oister_rui">舎利弗ナタギ</a><br />第二砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1358740223962738693/PQEZyNfS_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(222, 102);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/0101naizou">大正水流ミツル</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1319642962737778688/nHWs-FgY_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-179, 362);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/Senkou_839hsk">虍藤キョウハチロウ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1360964939251281921/tYoCmxD1_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(238, 40);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/Mornin_fes">飴奴蟶オドレ</a><br />第二補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1277786672357240832/SZa9E1su_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-521, 29);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/kz_to_e_masu">夜臼マヒル</a><br />第二砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1364147060878888960/s2Y0WPoO_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(211, 150);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/s_akanadE">阿乘シュカク</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1357657885166039040/0D4bXGhT_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(189, 366);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/R2OAQ">水流苑アスマ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1357657885166039040/0D4bXGhT_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(284, 43);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/R2OAQ">如守マイカ</a><br />第二補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1362809019975442434/65XM3W_0_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(275, -30);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/lemoneuron_e">雅楽巛セツカ</a><br />第二補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1353362437030834178/EpE_xmsS_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(192, -194);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/MAS36FRF1">紅丗ライラ</a><br />第三砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1362809019975442434/65XM3W_0_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(18, -371);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/lemoneuron_e">五百籏頭カヅヤ</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1355737696287645699/u-TiSXS-_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-448, 102);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/akito52s11">陽外シンヤ</a><br />第一遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1330005923075506177/Gel81a16_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(556, -80);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/Hibi_k_k">廻朽リヒト</a><br />第四砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1330005923075506177/Gel81a16_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-588, -175);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/Hibi_k_k">幾尽ウタ</a><br />第一空爆班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1333414754006667266/-5nJnR-1_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-202, 131);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/oishiim0">七濤ジュン</a><br />第一遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1293059820556128262/4-fdopX__normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(53, 39);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/tuku_tuku_">泥ネイ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1367119295549870085/tUbPqhFl_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(263, -138);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/_DAMARU">幾吒盈ムラマサ</a><br />第三砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1362623686725931012/CY2KpLJu_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(288, -191);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/amateru_kikaku">四葩カスミ</a><br />第三砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1354756486124032000/vVrx0Vkb_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-219, -160);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/douceurs05">玖良木マヤ</a><br />第一砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1298651766704111619/w8yB7Eom_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(211, 164);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/_MOZ___">卌冊エンブ</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1298651766704111619/w8yB7Eom_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-226, 25);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/_MOZ___">丫乁禅ネギシ</a><br />第一補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1367209208672784385/PkYT9PWE_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(117, 351);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/hsei89">間明グンジ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1354476130951024643/ARU4wdlr_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(110, 379);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/kikiyo_senco">凰舞シキ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1272433621408731136/UV2StQHd_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-94, 341);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/fuyuturu_noala">九十九祁アヤセ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1361459655495458818/yC5_t6h3_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-47, 340);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/hanashika_xx">嵐馬ヒノエ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1361459655495458818/yC5_t6h3_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(274, -30);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/hanashika_xx">功力ヌイ</a><br />第二補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1352992468283789312/6C2hBYhM_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(206, -48);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/99kb22">綿都見カンクロウ</a><br />第二補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1352992468283789312/6C2hBYhM_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(521, 3);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/99kb22">暁烏宮ウノハナ</a><br />第四砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1343183354649165824/zaHwB1E7_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(277, 27);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/rebe07007369">圦靣マコ</a><br />第二補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1357023061761880064/rWVZPYTy_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-396, 176);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/schwalbe_acid">葩蔴木綿マツリ</a><br />第一遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1360755359271411712/9XtIu9L__normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-99, 77);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/fuzi_ww">綿无戸ヒトデ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1360755359271411712/9XtIu9L__normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(73, 298);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/fuzi_ww">数ヶ呵コウセイ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1351205591922991119/n10sNSlD_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-52, -397);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/TK_syosetu">嚠造寺カイナ</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1351205591922991119/n10sNSlD_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-25, -57);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/TK_syosetu">栩内アヤキ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1240842966769401857/smAQj9eq_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(524, -182);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/so3brow">花母瀾トイ</a><br />第二空爆班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1256206533186080768/zcGLcgPy_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(434, 162);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/1taro_sou">硲地モトイ</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1317832949417472002/X_JZFSc1_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-556, -33);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/mirai775">千愁チカラ</a><br />第二砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1317832949417472002/X_JZFSc1_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(380, 246);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/mirai775">彼方コウヨウ</a><br />第二後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1331813668707733504/ObI46vTX_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-4, -87);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/kikaku_tom">圖區イチイ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1293125961483816960/GvRFkncM_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(83, -10);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/arakiameya">十四夜メアリ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1366340997852983299/2TEPplBl_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(553, -47);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/mo_mo_mkz">王生ツミキ</a><br />第四砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1362760100344045569/8evN-BoL_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-491, -296);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/wakayosii">四季彩イサシキ</a><br />第一空爆班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1365251196550713350/TJh9_dHz_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-36, 399);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/z_jousan">須夛</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1269639384938147841/gZFDcpcP_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(183, 339);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/shinkai_gohan">赭司ギンコ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1269639384938147841/gZFDcpcP_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-54, 123);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/shinkai_gohan">總見ワタル</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1365629202184114183/v8z7C_qV_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-240, -49);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/TotuKikaku">瑠璃刻アカネ</a><br />第一補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1364433968121085953/JKxCOyFb_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-50, 282);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/a_priori_X">御御御ミオ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1364433968121085953/JKxCOyFb_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(52, -27);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/a_priori_X">己己己己シキ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1366340997852983299/2TEPplBl_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(581, -98);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/mo_mo_mkz">王生ツミキ</a><br />第四砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1340621406761971714/aeGT7Uww_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(113, 373);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/aim_let_50">万丈タクミ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1340621406761971714/aeGT7Uww_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-424, -188);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/aim_let_50">郷連寺アヤ</a><br />第一空爆班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1279410240237088768/gTX_ZbpC_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(45, 342);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/fabulous_931">四阿ウメ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1279410240237088768/gTX_ZbpC_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(99, 82);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/fabulous_931">四阿マツ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1210212543366479872/EZS23LmR_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(405, 268);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/hasumiya723">怪鴟アケヒ</a><br />第二後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1255712675125850112/9GKaxOMR_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-97, 333);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/sousaku_lyuka">薙邏カナリヤ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1285170334690193408/GB73HTjj_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-6, -29);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/asa2toyoru3">珸瑶瑁ミカゲ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1285170334690193408/GB73HTjj_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(492, 347);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/asa2toyoru3">歌棄カナン</a><br />第二後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1355502327361273856/zCSpKU2Q_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(346, 261);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/hisame_hio">崩柴ケイ</a><br />第二後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1355502327361273856/zCSpKU2Q_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-51, 91);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/hisame_hio">黒葛原ソウマ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1279410240237088768/gTX_ZbpC_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-65, 76);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/fabulous_931">四阿マツ</a><br />ノア').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1367485011251888132/rSQtDD9D_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(272, -173);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/00DAINICHI00">晦 ミソカ</a><br />第三砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1112739836467699713/CTFJ7KCi_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(255, 158);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/yoyo4_maa">校條ヤシロ</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1112739836467699713/CTFJ7KCi_normal.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-653, 112);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/yoyo4_maa">柯アヤネ</a><br />第二砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1286861230880092161/MgV3rdtq_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-265, -130);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/conquista_ibid">功刀トラマル</a><br />第一砲兵隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1286861230880092161/MgV3rdtq_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-460, 256);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/conquista_ibid">砂盃ナガレ</a><br />第一後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1360206127531663367/NWJ1wHjG_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(242, 32);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/ichi_kikakunado">戀路ベラマリ</a><br />第二補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1362357671987269632/lIDx5Ad8_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(8, 348);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/mym_ponz">黒葛原リョウゴ</a><br />後衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1296831355620220929/BUf_6_qu_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-308, 317);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/marupon000">萸野カナメ</a><br />第一後方索敵班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1296831355620220929/BUf_6_qu_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-239, 21);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/marupon000">盲ヶ原ホヅミ</a><br />第一補給班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1357731831827759105/n-irzyHO_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-69, -289);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/krys1326">神樂ヒノト</a><br />前衛分隊').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1346763705111887872/7ueUpwqg_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(224, 153);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/die_j_st">皇ショウマ</a><br />第二遠距離狙撃班').addTo(map);

          var myIcon = L.icon({
            iconUrl: 'http://pbs.twimg.com/profile_images/1256668089686491136/X0SWSqi3_normal.jpg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point(-189, -180);
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/Lrb_crybaby">恋咲オトメ</a><br />第一砲兵隊').addTo(map);

          var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1329949785969754113/kwgNplFC_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(-164, 393);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/nekomohu99">華表エイチ</a><br />後衛分隊').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1310072488588537856/uM5kVQj3_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(125, -378);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/stgtnnk77">藜圜ハコト</a><br />前衛分隊').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1310072488588537856/uM5kVQj3_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(-206, -183);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/stgtnnk77">冽匳カノト</a><br />第一砲兵隊').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1363027858667409413/bk7D8f3o_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(348, 135);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/senkou_haru">日月ナギ</a><br />第二遠距離狙撃班').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1002845479502139393/CNWOUpqk_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(279, 16);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/tabi_pf">八入トーリ</a><br />第二補給班').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1366040841983119365/22LVlL45_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(139, -381);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/itsuki_kikaku">稻倉蓮</a><br />前衛分隊').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1360944303292342272/D4JvsETe_normal.png',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(42, 61);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/momimomiunko">科間イルカ</a><br />ノア').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1366040841983119365/22LVlL45_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(-104, -316);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/itsuki_kikaku">稻倉大和</a><br />前衛分隊').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1245335563843993601/YkPdWSIa_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(-245, -134);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/112_riori_">惟荊棘城シラユキ</a><br />第一砲兵隊').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1356972347245293570/c4AYNqw5_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(-595, -246);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/nimm_2626">五十公埜シオリ</a><br />第一空爆班').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1356972347245293570/c4AYNqw5_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(-582, -121);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/nimm_2626">靑海川ユキツバキ</a><br />第一空爆班').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1178285685981106178/zdJ0K9bn_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(8, 38);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/ysgryo">榛ヒトハ</a><br />ノア').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1217371472382967808/tfKaicl8_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(-54, 14);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/ym_mtm">邑井 ライム</a><br />ノア').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1310566577524277249/41-LYM9H_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(-450, -229);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/aiharaaaa972">團髭ミタツ</a><br />第一空爆班').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1251829403023101952/VcGmRrVs_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(-90, -279);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/dorobune1000">新瑞枦リュウイチ</a><br />前衛分隊').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1251829403023101952/VcGmRrVs_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(547, -11);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/dorobune1000">杁央ヤヨイ</a><br />第四砲兵隊').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1269602843289284608/SgtBZ6Pt_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(-47, 274);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/tenkodtenko">桜榮町カヲ</a><br />後衛分隊').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1363362601577549826/Wvlqzi3S_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(-125, -332);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/Yakizakana_84">上無月イノリ</a><br />前衛分隊').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1353707891509747718/eHzRHT64_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(-42, -95);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/kikakuyoshi">青天目ヨウ</a><br />ノア').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1361162661694562307/sy9CMDQB_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(189, 42);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/Akr_Yaguchi">榀獺カガミ</a><br />第二補給班').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1361162661694562307/sy9CMDQB_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(331, 120);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/Akr_Yaguchi">愛宕アキヒト</a><br />第二遠距離狙撃班').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1358207522708938752/yWvIw9aB_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(-74, -343);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/gengei_kikaku">伊砂ゼウ</a><br />前衛分隊').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/867437859288080385/bZZZWmmM_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(-345, 109);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/kureno_gksn">花牟禮ミコト</a><br />第一遠距離狙撃班').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1353363211546808320/hAwqAFRh_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(-29, -400);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/rebanirasan0">因藦カド</a><br />前衛分隊').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1363870144837996553/_uuJRXZ2_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(-259, -39);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/niwatoritori00">赤刎コヒナ</a><br />第一補給班').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1353363211546808320/hAwqAFRh_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(174, -1);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/rebanirasan0">鴇刀マル</a><br />第二補給班').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1360604675242745858/WAroFKja_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(452, -244);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/kuranaga2">八月一日ハジメ</a><br />第二空爆班').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1279410240237088768/gTX_ZbpC_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(82, 39);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/fabulous_931">四阿マツ</a><br />ノア').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1361716344874360844/b4zQtIlK_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(543, -257);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/shiorikikaku1">雲母ベニヲ</a><br />第二空爆班').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1342295826144448512/yBynZxED_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(381, 167);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/hatira_Sou">闇獰ヒノメ</a><br />第二遠距離狙撃班').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1360958991564607492/mpvcAuCH_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(400, 251);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/mngsnku">珠洲宮ヨルエ</a><br />第二後方索敵班').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1250879684629258240/xQRuEMAd_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(89, -376);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/Saikyo_Genki">舎利弗ミオ</a><br />前衛分隊').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1250879684629258240/xQRuEMAd_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(-376, 106);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/Saikyo_Genki">舎利弗リツ</a><br />第一遠距離狙撃班').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1364601918836731906/bRwUKskr_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(-444, 287);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/konasiteru">上喰 カケル</a><br />第一後方索敵班').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1341045235711791106/G10l7VLj_normal.png',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(248, 36);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第3/<a href="https://twitter.com/teacro">宮廻メイジ</a><br />第二補給班').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1366651070617817088/S9JZSIJI_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(218, 171);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第1/<a href="https://twitter.com/15icetabetai">八月一日アラタ</a><br />第二遠距離狙撃班').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1344865859739631617/ZaiP4voY_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(-432, 287);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/see_9let">庁カイリ</a><br />第一後方索敵班').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1341931430419464192/oGc5OMXh_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(275, -161);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第4/<a href="https://twitter.com/shiiigi_kk">壱尺捌寸イズチ</a><br />第三砲兵隊').addTo(map);

                  var myIcon = L.icon({
                    iconUrl: 'http://pbs.twimg.com/profile_images/1357706364408066048/QBtHriQN_normal.jpg',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [-3, -50]
                });
                var point = L.point(289, 30);
                L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第2/<a href="https://twitter.com/Bomziri_umai">不来方ソウエイ</a><br />第二補給班').addTo(map);


    var imageUrl = 'map.jpg',
        imageBounds = [[270,-480], [-270,480]];
    L.imageOverlay(imageUrl, imageBounds).addTo(map);

});
