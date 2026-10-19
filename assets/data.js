/* TCG GATE JAPAN — sample catalog
   商品名は実際の品ぞろえを参考にしたサンプル、価格・在庫・買取価格は仮の値です。
   公開前に実在庫・実売価格へ差し替えてください（Shopifyでは商品・メタフィールドとして登録）。
   画像：assets/images/<id>.jpg を置くと仮カードが写真に切り替わります。 */
window.TCG = {
  freeShippingLine: 20000, /* [要確認] 仮の送料無料ライン */
  products: [
    { id:"m1", name:"メガリザードンYex", en:"Mega Charizard Y ex", rarity:"MUR", set:"MEGA", num:"—", hp:360, cond:"S", cat:"single", price:128000, buy:95000, stock:1, badge:"PREMIUM", hue:44, type:"gold" },
    { id:"m2", name:"メガリザードンXex", en:"Mega Charizard X ex", rarity:"MUR", set:"MEGA", num:"—", hp:360, cond:"S", cat:"single", price:118000, buy:88000, stock:2, badge:"NEW", hue:40, type:"gold" },
    { id:"m3", name:"ロケット団のミュウツーex", en:"Team Rocket's Mewtwo ex", rarity:"SAR", set:"SV10", num:"—", hp:280, cond:"A", cat:"single", price:39800, buy:30000, stock:3, badge:"HOT", hue:350 },
    { id:"m4", name:"ブラッキーex", en:"Umbreon ex", rarity:"SAR", set:"SV8a", num:"—", hp:280, cond:"A", cat:"single", price:168000, buy:130000, stock:1, badge:"PREMIUM", hue:230 },
    { id:"m5", name:"ピカチュウex", en:"Pikachu ex", rarity:"SAR", set:"MEGA", num:"—", hp:200, cond:"A", cat:"single", price:24800, buy:18000, stock:4, badge:"NEW", hue:95 },
    { id:"m6", name:"メガゲンガーex", en:"Mega Gengar ex", rarity:"SAR", set:"MEGA", num:"—", hp:350, cond:"A", cat:"single", price:19800, buy:14000, stock:5, hue:280 },
    { id:"m7", name:"リーリエのピッピex", en:"Lillie's Clefairy ex", rarity:"SAR", set:"SV9", num:"—", hp:190, cond:"S", cat:"single", price:14800, buy:10000, stock:6, hue:330 },
    { id:"m8", name:"ゼクロムex", en:"Zekrom ex", rarity:"SAR", set:"SV11B", num:"—", hp:230, cond:"A", cat:"single", price:9800, buy:6500, stock:0, hue:150, type:"dark" },
    { id:"m9", name:"レシラムex", en:"Reshiram ex", rarity:"SAR", set:"SV11W", num:"—", hp:230, cond:"A", cat:"single", price:9800, buy:6500, stock:7, hue:210, type:"light" },
    { id:"m10", name:"パラダイスリゾート", en:"Paradise Resort", rarity:"SAR", set:"SV", num:"—", hp:0, cond:"A", cat:"single", price:2980, buy:1800, stock:12, hue:190, type:"trainer" },
    { id:"p4", name:"リザードンVMAX", en:"Charizard VMAX", rarity:"PSA10", set:"S8b", num:"308/172", cond:"PSA10", cat:"psa10", price:148000, buy:0, stock:1, badge:"HOT", hue:12, year:"2021", label:"VMAX CLIMAX" },
    { id:"p8", name:"ミミッキュ HR", en:"Mimikyu HR", rarity:"PSA10", set:"S10b", num:"075/070", cond:"PSA10", cat:"psa10", price:28000, buy:28000, stock:2, hue:50, year:"2022", label:"POKEMON GO" },
    { id:"p9", name:"ブースターex【RR】", en:"Flareon ex [RR]", rarity:"PSA10", set:"SV8a", num:"022/187", cond:"PSA10", cat:"psa10", price:58000, buy:0, stock:0, hue:28, year:"2024", label:"SV8a BOOSTER ex - RR" },
    /* ---- 追加サンプル（架空の価格・在庫） ---- */
    { id:"m11", name:"リザードンex", en:"Charizard ex", rarity:"SAR", set:"SV4a", num:"349/190", hp:330, cond:"A", cat:"single", price:42800, buy:32000, stock:3, badge:"HOT", hue:18 },
    { id:"m12", name:"ミュウex", en:"Mew ex", rarity:"SAR", set:"SV4a", num:"347/190", hp:180, cond:"A", cat:"single", price:9800, buy:6800, stock:8, hue:320 },
    { id:"m13", name:"ナンジャモ", en:"Iono", rarity:"SAR", set:"SV4a", num:"350/190", hp:0, cond:"A", cat:"single", price:24800, buy:18000, stock:2, badge:"NEW", hue:200, type:"trainer" },
    { id:"m14", name:"イーブイex", en:"Eevee ex", rarity:"SAR", set:"SV8a", num:"—", hp:200, cond:"S", cat:"single", price:18800, buy:13000, stock:4, hue:32 },
    { id:"m15", name:"ニンフィアex", en:"Sylveon ex", rarity:"SAR", set:"SV8a", num:"—", hp:270, cond:"A", cat:"single", price:22800, buy:16000, stock:3, hue:325 },
    { id:"m16", name:"テラパゴスex", en:"Terapagos ex", rarity:"SAR", set:"SV7", num:"—", hp:230, cond:"A", cat:"single", price:6980, buy:4500, stock:9, hue:175 },
    { id:"m17", name:"ギラティナV", en:"Giratina V", rarity:"SA", set:"S11", num:"—", hp:220, cond:"A", cat:"single", price:32800, buy:24000, stock:2, hue:270, type:"dark" },
    { id:"m18", name:"ルギアV", en:"Lugia V", rarity:"SA", set:"S12", num:"—", hp:220, cond:"B", cat:"single", price:48000, buy:36000, stock:1, badge:"PREMIUM", hue:205, type:"light" },
    { id:"m19", name:"マリィ", en:"Marnie", rarity:"SR", set:"S4a", num:"—", hp:0, cond:"A", cat:"single", price:14800, buy:10000, stock:5, hue:330, type:"trainer" },
    { id:"m20", name:"ピカチュウ（キズ特価）", en:"Pikachu (damaged)", rarity:"AR", set:"SV8", num:"—", hp:60, cond:"B", cat:"single", price:1280, buy:0, stock:6, badge:"キズ特価", hue:52 },
    { id:"p10", name:"リーリエ", en:"Lillie", rarity:"PSA10", set:"SM11b", num:"—", cond:"PSA10", cat:"psa10", price:1280000, buy:0, stock:1, badge:"PREMIUM", hue:48, year:"2019", label:"LILLIE FULL ART", type:"light" },
    { id:"p11", name:"ブラッキーVMAX", en:"Umbreon VMAX", rarity:"PSA10", set:"S6a", num:"—", cond:"PSA10", cat:"psa10", price:880000, buy:0, stock:1, badge:"PREMIUM", hue:232, year:"2021", label:"UMBREON VMAX SA", type:"dark" },
    { id:"p12", name:"ピカチュウex", en:"Pikachu ex", rarity:"PSA10", set:"SV8", num:"—", cond:"PSA10", cat:"psa10", price:98000, buy:0, stock:2, badge:"NEW", hue:52, year:"2024", label:"PIKACHU ex SAR" },
    { id:"p13", name:"リザードンex", en:"Charizard ex", rarity:"PSA9", set:"SV4a", num:"349/190", cond:"PSA9", cat:"psa9", price:36800, buy:0, stock:2, hue:18, year:"2023", label:"CHARIZARD ex SAR" },
    { id:"p14", name:"ミュウex", en:"Mew ex", rarity:"PSA9", set:"SV4a", num:"347/190", cond:"PSA9", cat:"psa9", price:8800, buy:0, stock:3, hue:320, year:"2023", label:"MEW ex SAR" },
    { id:"p15", name:"旧裏 カメックス", en:"Blastoise (original back)", rarity:"CCP", set:"Base", num:"2/102", cond:"B", cat:"old", price:68000, buy:52000, stock:1, hue:210 },
    { id:"p16", name:"旧裏 フシギバナ", en:"Venusaur (original back)", rarity:"CCP", set:"Base", num:"15/102", cond:"B", cat:"old", price:54000, buy:40000, stock:1, hue:130 },
    { id:"p17", name:"旧裏 ひかるギャラドス", en:"Shining Gyarados (original back)", rarity:"CCP", set:"neo4", num:"—", cond:"A", cat:"old", price:88000, buy:65000, stock:1, badge:"PREMIUM", hue:350 },
    { id:"o1", name:"GATEオリパ 1,000円（ラストワン賞あり）", en:"GATE Oripa ¥1,000", rarity:"ORIPA", set:"GATE", num:"—", hp:0, cond:"S", cat:"oripa", price:1000, buy:0, stock:759, badge:"NEW", hue:45, type:"gold" },
    { id:"o2", name:"GATEプレミアムオリパ 10,000円", en:"GATE Premium Oripa ¥10,000", rarity:"ORIPA", set:"GATE", num:"—", hp:0, cond:"S", cat:"oripa", price:10000, buy:0, stock:189, badge:"HOT", hue:45, type:"gold" },
    { id:"o3", name:"PSA10確定オリパ 30,000円", en:"PSA 10 Guaranteed Oripa", rarity:"ORIPA", set:"GATE", num:"—", hp:0, cond:"S", cat:"oripa", price:30000, buy:0, stock:50, hue:0, type:"dark" },
    { id:"x1", name:"MEGAシリーズ 拡張パック 未開封BOX", en:"MEGA Booster Box (sealed)", rarity:"BOX", set:"MEGA", num:"—", hp:0, cond:"S", cat:"box", price:8800, buy:6800, stock:24, badge:"NEW", hue:200, type:"trainer" },
    { id:"x2", name:"ハイクラスパック 未開封BOX", en:"High Class Pack Box (sealed)", rarity:"BOX", set:"SV8a", num:"—", hp:0, cond:"S", cat:"box", price:13800, buy:11000, stock:12, hue:290, type:"trainer" },
    { id:"x3", name:"デッキシールド プレミアム・グロス", en:"Premium Gloss Sleeves", rarity:"SUPPLY", set:"GATE", num:"—", hp:0, cond:"S", cat:"box", price:980, buy:0, stock:7, hue:45, type:"trainer" },
    { id:"p7", name:"旧裏 リザードン", en:"Charizard (original back)", rarity:"CCP", set:"Base", num:"4/102", cond:"B", cat:"old", price:180000, buy:180000, stock:1, hue:24 }
  ],
  sets: [
    { code:"MEGA", name:"MEGAシリーズ [正式名称要確認]", en:"MEGA series", date:"", isNew:true },
    { code:"M5", name:"アビスアイ", en:"Abyss Eye", date:"2026.05.22", isNew:true },
    { code:"M4", name:"ニンジャスピナー", en:"Ninja Spinner", date:"" },
    { code:"H3", name:"MEGAドリームex", en:"MEGA Dream ex", date:"" },
    { code:"M3", name:"メガシンフォニア", en:"Mega Symphonia", date:"" },
    { code:"H2", name:"インフェルノX", en:"Inferno X", date:"" }
  ],
  cats: [
    { id:"psa10", k:"PSA10", name:"PSA10鑑定品", en:"PSA 10" },
    { id:"psa9", k:"PSA9", name:"PSA9鑑定品", en:"PSA 9" },
    { id:"oripa", k:"ORIPA", name:"オリパ", en:"Oripa" },
    { id:"single", k:"SINGLES", name:"シングル・キズ特価", en:"Singles" },
    { id:"old", k:"OLD", name:"旧裏", en:"Vintage" },
    { id:"box", k:"BOX", name:"未開封BOX・その他", en:"Sealed" }
  ],
  conds: {
    S:{ ja:"状態S", note:"新品同様", en:"Grade S" },
    A:{ ja:"状態A", note:"美品", en:"Grade A" },
    B:{ ja:"状態B", note:"並品", en:"Grade B" },
    PSA10:{ ja:"PSA10", note:"鑑定済", en:"PSA 10" },
    PSA9:{ ja:"PSA9", note:"鑑定済", en:"PSA 9" }
  },
  buyback: [
    { id:"b1", name:"ピカチュウex SAR", num:"234/193", price:60000, cat:"single", hue:44 },
    { id:"b2", name:"メガガルゴex MUR", num:"092/093", price:60000, cat:"single", hue:258 },
    { id:"b3", name:"旧裏 リザードン CCP", num:"4/102", price:180000, cat:"old", hue:24 },
    { id:"b4", name:"ミミッキュ HR PSA10", num:"075/070", price:28000, cat:"psa10", hue:50 }
  ],
  shops: [
    { id:"akihabara", k:"AKIHABARA", name:"秋葉原本店", area:"TOKYO", main:true, addr:"東京都千代田区外神田1-2-3 秋葉原TCGビル 1F-3F", tel:"03-0000-0000", hours:"11:00〜21:00", off:"年中無休", access:"JR秋葉原駅 電気街口より徒歩2分", note:"PSA鑑定カード・限定カードを中心とした体験型旗艦店" },
    { id:"nishijin", k:"NISHIJIN", name:"福岡西新店", area:"FUKUOKA", addr:"福岡県福岡市早良区西新1-2-3 TCGビル 1F", tel:"092-000-0000", hours:"11:00〜20:00", off:"毎週水曜日", access:"地下鉄空港線 西新駅 4番出口より徒歩3分" },
    { id:"kurume", k:"KURUME", name:"久留米店", area:"FUKUOKA", addr:"福岡県久留米市東町5-6-7 KMビル 2F", tel:"0942-00-0000", hours:"11:00〜20:00", off:"毎週水曜日", access:"JR久留米駅 西口より徒歩5分" }
  ]
};
