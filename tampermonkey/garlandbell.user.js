// ==UserScript==
// @name         花环汉化
// @namespace    http://www.ffxiv.xin/
// @version      0.1.0
// @description  https://github.com/ffxiv-cn/script/
// @author       NbbJack
// @match        http://www.garlandtools.org/bell/
// @grant        none
// @run-at       document-start
// ==/UserScript==
(function () {
    
    'use strict';
    
    var data_zh = {
        // 小地名
        "The Tangle": "纠缠沼泽林", "Eli Tohm": "招恶荒岛", "Dragonspit": "龙涎", "Vundu Ok' Bendu": "温杜属本杜集落", "The Ruling Quarter": "萨雷安睿哲区", "Mother of the Sheave": "圣女希瓦像", "The Lost Landlord": "人王像", "Beta Quadrant": "贝塔管区", "The Convictory": "圣菲内雅连队露营地", "The Answering Quarter": "萨雷安治学区", "The Nidifice": "候鸟云巢", "Habisphere Control": "生态园管理局", "Alpha Quadrant": "阿尔法管区", "The Gauntlet": "试炼群岛", "The Watcher": "守望者", "The Bed of Bones": "大脚雪人居所", "Hemlock": "铁杉村", "Twinpools": "双子池", "The Blue Window": "蓝天窗", "Avalonia Fallen": "阿瓦隆尼亚古陆", "Four Arms": "四臂广场", "The Makers' Quarter": "萨雷安精制区", "Upper Thaliak River": "沙利亚克河上流", "Clearpool": "清澈池", "The Pappus Tree": "冠毛大树", "Weston Waters": "西方水泉", "The Smoldering Wastes": "荒烟野地", "Whilom River": "宽慰河", "Tharl Oom Khash": "惋惜之晶遗迹", "The Iron Feast": "饵食台地", "Sohm Al Summit": "索姆阿尔峰顶", "Middle Thaliak River": "沙利亚克河中流", "The Habisphere": "生态园", "The Hundred Throes": "悲叹飞泉", "Black Iron Bridge": "黑铁大桥", "Loth ast Vath": "荒烟野地", "Chocobo Forest": "陆行鸟之森", "Landlord Colony": "人王遗迹", "Red Rim": "红沿", "Voor Sian Siran": "沃仙曦染", "The House of Letters": "书信之家", "Easton Eyes": "东方眼目", "Coldwind": "寒风岛", "The Daggers": "萨雷安睿哲区", "North Silvertear": "银泪湖北岸", "The North Shards": "歌咏裂谷北部", "Whitebrim": "白云崖", "Providence Point": "神意之地", "Dragonhead": "巨龙首", "Witchdrop": "落魔崖", "Raubahn's Push": "劳班缓冲地", "Yugr'am River": "宇格拉姆河", "Bluefog": "蓝雾", "Broken Water": "秽水", "Drybone": "枯骨", "Burgundy Falls": "紫红瀑布", "Wellwick Wood": "新植林", "Haldrath's March": "哈尔德拉斯行军道", "Lost Hope": "无望流民街", "Hammerlea": "金锤台地", "Sagolii Desert": "撒沟厉沙海", "Moraby Bay": "莫拉比湾", "Raincatcher Gully": "接雨草树林", "Zephyr Drift": "和风流地", "Quarterstone": "四分石地", "Bronze Lake": "石绿湖", "Northeast Bronze Lake": "石绿湖东北岸", "Summerford": "盛夏滩沿岸", "Bloodshore": "鲜血滨", "Cedarwood": "雪松原", "Isles of Umbra Southshore": "幻影群岛南岸", "Rhotano Sea (Privateer Sterncastle)": "罗塔诺海（船尾）", "Bentbranch": "弯枝", "Rootslake": "蔓根沼", "Upper Paths": "高径", "Urth's Gift": "兀尔德恩惠地", "Naked Rock": "裸岩丘", "Nine Ivies": "九藤", "The Honey Yard": "蜜场", "Little Solace": "妖精暂留地", "Sorrel Haven": "酸模避风港", "Alder Springs": "桤木泉", "The Bramble Patch": "荆棘森", "The Flagship": "阿济兹拉旗舰岛", "Aetherfishing": "魔泉", "Hengr's Crucible": "亨格坩埚", "Eil Tohm": "招恶荒岛", "Sothton Walls": "南方墙壁", "Mourn": "彻悟岩窟", "Antithesis": "对偶处刑台", "Greensward": "绿茵岛", "Rathefrost": "早霜顶", "Zahar'ak": "不悔战泉", "Moondrip": "月滴洞", "Everschade": "常影区", "Goblinblood": "哥布林血流", "Swiftperch": "雨燕塔殖民地", "Oakwood": "橡树原", "Halfstone": "二分石沿岸地", "Snowcloak": "披雪大冰壁", "Sylphlands": "妖精领溪谷", "Cloudtop": "旋风云海", "Halo": "光轮祭坛", "Riversmeet": "交汇河营地", "Mok Oogl Island": "魔窟离岛", "Moraby Drydocks": "莫拉比造船厂", "Hyperstellar Downconverter": "超星际通信塔", "Quickspill Delta": "湍流三角地", "Forgotten Springs": "遗忘绿洲", "North Drybone": "枯骨北泉", "Lower Hathoeva River": "哈希瓦河下游", "Costa del Sol": "太阳海岸", "Empty Heart": "空心穴", "Sagolii Dunes": "撒沟厉沙丘", "Proud Creek": "荣耀溪", "North Bloodshore": "北鲜血滨", "Verdant Drop": "落翠底", "The Salt Strand": "砂盐滩", "Upper Hathoeva River": "哈希瓦河上游", "South Drybone": "枯骨南泉", "Sanctum of the Twelve": "十二神大圣堂", "The Clutch": "执掌峡谷", "East Agelyss River": "东永恒川", "Parata's Peace": "帕拉塔安息地", "The Long Climb": "登天路溪谷", "Blind Iron Mines": "盲铁坑道", "Burnt Lizard Creek": "火蜥蜴河", "Nophica's Wells": "丰饶神井", "Upper Black Tea Brook": "红茶川水系上游", "Sea of Clouds": "伊修加德大云海", "The Burning Wall": "火墙", "Exploratory Ice Hole": "调查队冰洞", "Hidden Falls": "隐秘瀑布", "The Nail": "剑峰山麓", "Fool Falls": "愚者瀑布", "Limsa Lominsa Lower Decks": "利姆萨·罗敏萨下层甲板", "Isles of Umbra Northshore": "幻影群岛北岸", "Coerthas River": "库尔札斯河", "Sapsa Spawning Grounds": "萨普沙产卵地", "Dragonhead Latrines": "巨龙首营地水库", "Springripple Brook": "涟漪小川", "The Weeping Saint": "圣人泪", "The Ship Graveyard": "船舶墓场", "Jadeite Flood": "翡翠湖滨", "Oschon's Torch": "奥修昂火炬", "Nym River": "尼姆河", "The Footfalls": "足迹谷", "Middle Hathoeva River": "哈希瓦河中游", "Whispering Gorge": "低语河谷", "Murmur Rills": "嘈杂川", "Sweetbloom Pier": "花蜜栈桥", "Singing Shards": "歌咏裂谷", "The Juggernaut": "接雨草沼泽地", "Rogue River": "无赖川", "The Mirror": "镜池", "The Silver Bazaar": "白银集市", "Daniffen Pass": "圣人旅道", "South Bloodshore": "南鲜血滨", "Hopeseed Pond": "萌芽池", "Bronze Lake Shallows": "石绿湖浅滩", "Limsa Lominsa Upper Decks": "利姆萨·罗敏萨上层甲板", "Skull Valley": "骷髅谷沿岸地", "Woad Whisper Canyon": "轻声谷", "Reaver Hide": "隐秘港", "Upper Soot Creek": "污流上游", "Crescent Cove": "月牙湾", "Fallgourd Float": "秋瓜湖畔", "The Brewer's Beacon": "酿酒师灯塔", "Lower Soot Creek": "污流下游", "Candlekeep Quay": "守炬埠头", "Haukke Manor": "名门府邸静语庄园", "Ceruleum Field": "青磷泉", "The Deep Tangle": "纠缠沼泽林源流", "Cape Westwind": "西风岬", "The Unholy Heir": "邪嗣", "Greytail Falls": "灰尾瀑布", "South Banepool": "灾祸池南", "The Eddies": "云水塘", "Delta Quadrant": "德尔塔管区", "Anyx Old": "不洁古像", "West Banepool": "灾祸池北", "West Mourn": "彻悟岩窟西", "Rhotano Sea (Privateer Forecastle)": "罗塔诺海（船首）", "Unfrozen Pond": "库尔札斯不冻池", "Mercantile Docks": "城下码头", "The High Bank": "高岸", "The Striped Hills": "条纹丘", "Onsal Hakair": "昂萨哈凯尔", "Kugane Piers": "防波堤", "The Arms of Meed": "赎罪之腕", "The Towering Still": "挡风巨岩", "Valley of the Fallen Rainbow": "七彩溪谷", "Hells' Lid": "狱之盖近海", "Heather Falls": "石楠瀑布", "Doma Castle": "多玛城前", "Plum Spring": "梅泉乡", "The One River (West)": "无二江西", "The One River (East)": "无二江东", "Nem Khaal": "涅木卡勒河", "Upper Mirage Creek": "幻河上游", "The Ephor": "判官神像", "The Bull's Bath": "猛牛浴池", "The Comet's Tail": "流星尾", "Dimwold": "昏暗林", "Onokoro": "自凝岛近海", "Loch Seld": "盐湖", "North Isle of Endless Summer": "永夏岛北", "The Isle of Bekko": "龟甲岛近海", "Hak Khaal": "哈克卡勒河", "Ten-thousand-year Pine": "万年松", "Monzen": "门前卫街", "Rustrock": "红锈岩山", "Wightrock": "白鬼岩山", "Unseen Spirits Laughing": "祖灵笑", "Nhaama's Retreat": "月神沙漠北端", "Kusakari": "草刈家", "Ceol Aen": "乔尔艾恩石环", "The Royal Hunting Grounds": "王家猎场", "East End": "东境混交林", "Stacks": "柴堆村", "Doma": "多玛", "Abalathia's Skull": "阿巴拉提亚龙头", "Pike Falls": "尖枪瀑布", "Mount Yorn": "约恩山", "The Isle of Zekki": "绝鬼岛", "Azim Khaat": "太阳湖", "Prism Lake": "七彩沟", "Shoal Rock": "冲之岩", "Tao Khaal": "塔奥卡勒河", "Mirage Creek": "幻河", "Isari": "渔村", "The Slow Wash": "慢水涤", "Grymm & Enid": "夫妇池", "Lower Yat Khaal": "亚特卡勒河下游", "The Silver Canal": "白银水路", "The Outer Fist": "星导寺入口", "The Velodyna River": "威罗迪纳河", "Upper Yat Khaal": "亚特卡勒河上游", "The Ruby Price": "红玉炮台近海", "Timmon Beck": "提蒙河", "Ohl Tahn": "竖骨岛", "The Heron's Way": "苍鹭河", "Prism Canyon": "七彩溪谷", "The Heron's Nest": "苍鹭池", "Dotharl Khaa": "朵塔儿水洲", "The Glittering Basin": "无二江流域", "East Othard Coastline": "奥萨德东岸", "Governor's Row": "总督田地", "Cleric": "书著者树洞", "Saint Fathric's Temple": "圣法斯里克天庭", "Sextuplet Shallow": "六子浅滩", "Weed": "杂草岛", "Amity": "友好村", "Where the Dry Return": "陆人墓标", "Ladle": "水站", "The Caliban Gorge": "卡利班深海峡", "The Wild Fete": "野园", "The Church of the First Light": "光耀教会", "Sharptongue Drip": "刺舌滴", "The Dragging Tail": "尾之道", "Inviolate Witness": "无垢之证", "Scree": "碎石山地", "Venmont Yards": "温蒙特造船厂", "Embrasure": "射孔", "Mjrl's Regret": "缪栎的乡愁", "Phisor Lran": "群树馆", "Bowrest": "射手露宿地",

        // 物品
        "Wind Crystal": "风之水晶", "Earth Crystal": "土之水晶", "Fire Crystal": "火之水晶", "Ice Crystal": "冰之水晶", "Lightning Crystal": "雷之水晶", "Yellow Copper Ore": "黄铜矿", "Chives": "库尔札斯青葱", "Pearl Sprouts": "小包心菜", "Coerthan Tea Leaves": "库尔札斯茶叶", "Pearl Sprout Seeds": "小包心菜种子", "Coerthan Tea Seeds": "库尔札斯茶叶种子", "Chalcocite": "辉铜矿", "Pyrite": "黄铁矿", "Limonite": "褐铁矿", "Old World Fig": "旧世界无花果", "Old World Fig Seeds": "旧世界无花果种子", "Fire Moraine": "火砂砾", "Bright Fire Rock": "强火性岩", "Radiant Fire Moraine": "火光砾", "Chysahl Greens": "卡贝基野菜", "Granular Clay": "赤玉土", "Peat Moss": "灰玉土", "Black Soil": "黑土", "Lightning Moraine": "雷砂砾", "Radiant Lightning Moraine": "强雷性岩", "Bright Lightning Rock": "雷光砾", "Highland Oregano": "牛至", "Furymint": "留兰", "Clary Sage": "鼠尾草", "Yellow Quartz": "土黄石英", "Green Quartz": "翠绿石英", "Dravanian Mistletoe": "龙堡槲寄生", "Porcini": "牛肝菌", "Adamantite Ore": "精金矿", "Heavens Lemon": "伊修加德柠檬", "Abalathian Mistletoe": "阿巴拉提亚槲寄生", "Abalathian Rock Salt": "阿巴拉提亚岩盐", "Red Quartz": "深绯石英", "Cloud Banana": "云海香蕉", "Morel": "伞蘑", "Cuprite": "赤铜矿", "Light Kidney Ore": "赤铁矿", "Aurum Regis Ore": "皇金矿", "Astral Moraine": "星砂砾", "Violet Quartz": "青紫石英", "Blue Quartz": "绀碧石英", "Red Alumen": "红明矾", "Seventh Heaven": "星极花", "Honeydew Almonds": "甜扁桃", "Vanilla Beans": "香草豆", "Snurbleberry": "鲜红罗兰莓", "Wattle Bark": "金合欢树皮", "Dravanian Paprika": "翻云雾海红辣椒", "Sun Mica": "金云母", "Grade 4 Carbonized Matter": "4级碳化暗物质", "Lightning Cluster": "雷之晶簇", "Fire Cluster": "火之晶簇", "Wind Cluster": "风之晶簇", "Water Cluster": "水之晶簇", "Ice Cluster": "冰之晶簇", "Earth Cluster": "土之晶簇", "Unaspected Crystal": "无属性水晶", "Dark Matter Cluster": "暗物质晶簇", "Thavnairian Mistletoe": "萨维奈槲寄生", "Spruce Log": "云杉原木", "Astral Rock": "星性岩", "Vampire Plant": "吸血枝", "Ferberite": "钨铁矿", "Raw Topaz": "黄玉原石", "Raw Iolite": "堇青石原石", "Gold Sand": "金沙", "Virgin Basilisk Egg": "石蜥蜴的初蛋", "Platinum Ore": "白金矿", "Mazlaya Greens": "马兹拉雅草", "Black Truffle": "黑松露", "Gold Ore": "金矿", "Coblyn Larva": "矿爬虫虫", "Gregarious Worm": "群居蠕虫", "Antumbral Rock": "强灵性岩", "Darksteel Ore": "玄铁矿", "Native Gold": "自然金", "Raw Emerald": "祖母绿原石", "Raw Diamond": "钻石原石", "Grade 3 Thanalan Topsoil": "3级萨纳兰土壤", "Raw Ruby": "红宝石原石", "Raw Sapphire": "蓝宝石原石", "Pumice": "浮石", "Dzemael Tomato Seeds": "泽梅尔番茄种子", "Dzemael Tomato": "泽梅尔番茄", "Volcanic Rock Salt": "拉诺西亚岩盐", "Ebony Log": "黑檀原木", "Grade 3 La Noscean Topsoil": "3级拉诺西亚土壤", "La Noscean Leek": "拉诺西亚韭菜", "Waterfowl Feather": "水鸟之羽", "Blood Orange": "鲜血橙", "Bamboo Stick": "竹材", "Apricot": "黄杏", "Prickly Pineapple Seeds": "多刺菠萝种子", "Prickly Pineapple": "多刺菠萝", "Honey Lemon Seeds": "蜜柠檬种子", "Honey Lemon": "蜜柠檬", "Young Cieldalaes Spinach": "谢尔达莱嫩菠菜", "Trillium": "延龄花", "Scarlet Sap": "绯红树汁", "Shroud Tea Leaves": "提诺尔卡茶叶", "Silkworm Cocoon": "蚕茧", "Kidragora": "小小蔓德拉", "Trillium Bulb": "延龄草的球根", "Redolent Log": "高级黑衣香木", "Rosemary": "迷迭香", "Fragrant Log": "黑衣香木", "Umbral Rock": "灵性岩", "Grade 3 Shroud Topsoil": "3级黑衣森林土壤", "Cypress Log": "丝柏原木", "Frost Cotton Boll": "雪棉", "Smithsonite Ore": "菱锌矿", "Old-growth Camphorwood Log": "樟木古树", "Lumythrite Ore": "光银矿", "Lover's Laurel": "梅茵菲娜月桂", "Radiant Astral Moraine": "星光砾", "Lotus Root": "莲藕", "Doman Yellow": "黄土", "Bamboo Shoot": "竹笋", "Rhea": "苎麻", "Othardian Plum": "奥萨德梅", "Rhalgr's Streak": "破坏神之杖", "Jhammel Ginger": "长颈骆姜", "Beech Branch": "山毛榉树枝", "Hallowed Basil": "祝圣罗勒草", "Torreya Log": "榧木原木", "Windtea Leaves": "风茶叶", "Torreya Branch": "榧树枝", "Raw Imperial Jade": "琅玕原石", "Raw Star Spinel": "星尖石原石", "Ala Mhigan Salt Crystal": "阿拉米格盐", "Almandine": "贵榴石", "Perlite": "珍珠岩", "Raw Triphane": "锂辉石原石", "Raw Azurite": "石青原石", "Palladium Ore": "钯金矿", "Pummelite": "硬拳石", "Raw Rhodonite": "蔷薇辉石原石", "Chromite Ore": "铬铁矿", "Schorl": "黑碧玺", "Crystallized Sap": "树汁结晶", "Zeolite Ore": "沸石", "Noble Sage": "显贵鼠尾草", "Luminium Ore": "辉金矿", "Azim Cotton Boll": "太阳棉", "Gyr Abanian Spring Water": "基拉巴尼亚清水", "Nightsteel Ore": "夜铁矿", "Silvergrace Ore": "清银矿", "Hingan Flax": "真麻", "Black Willow Log": "黑柳原木", "Yanxian Soil": "延夏沃土", "Hawk's Eye": "鹰眼石", "Hawk's Eye": "鹰眼石", "Yanxian Verbena": "延夏马鞭草", "Hardened Veteran Tree Sap": "古木树液块", "Yanxian Cotton Boll": "延夏棉", "Urunday Log": "乌仑代硬木原木", "Azim Spring Water": "太阳神泉水", "Evergleam Ore": "常辉矿", "Gyr Abanian Ore": "岩铁", "Shade Quartz": "暗影石英", "Tungsten Ore": "重钨矿", "Raw Triplite": "三重石原石", "Raw Onyx": "黑玛瑙原石", "Gale Rock": "暴风岩", "Raw Hematite": "乌钢石原石", "Raw Lazurite": "青金石原石", "Raw Petalite": "透锂长石原石", "Prismstone": "彩虹晶", "Raw Diaspore": "硬水铝石原石", "Solarite": "光耀石", "White Clay": "白玉土", "White Oak Branch": "白橡木枝", "Peppermint": "欧薄荷", "Sandalwood Log": "檀香木原木", "Broad Beans": "蚕豆", "Mist Spinach": "迷雾菠菜", "Russet Popoto": "黄新薯", "Sweet Marjoram": "甜墨角兰", "Lemonette": "小柠檬", "Bog Sage": "沼泽鼠尾草", "Ethereal Cocoon": "泡茧",

        // 鱼
        "Sand Leech": "沙蛭", "Storm Rider": "飞沙鱼", "Sky Faerie": "夕月天女", "Rudderfish": "高天鱼", "Blueclaw Shrimp": "蓝螯虾", "Hoverworm": "浮游虫", "Cloud Cutter": "破云飞鱼", "Mahar": "马哈尔", "Brute Leech": "残暴水蛭", "Red Balloon": "红气球虫", "Goblin Jig": "哥布林钓钩", "Stonefly Nymph": "石蝇幼虫", "Bladed Steel Jig": "叶片钓钩", "Bullfrog": "牛蛙", "Sweetfish": "香鱼", "Steel Jig": "铁板钩", "Fullmoon Sardine": "满月沙丁鱼", "Honey Worm": "蜜虫", "Silverfish": "银鱼", "Goldfish": "金鱼", "Assassin Betta": "暗斗鱼", "Glowworm": "火萤", "Topwater Frog": "漂浮诱饵蛙", "Northern Krill": "极地磷虾", "Giant Crane Fly": "巨型大蚊", "Butterworm": "黄油虫", "Wildfowl Fly": "雉鸡拟饵", "Ala Mhigan fighting fish": "斗鱼", "Live Shrimp": "活虾", "Ruby Shrimp": "红玉虾", "Suspending Minnow": "悬浮米诺拟饵", "Midge Larva": "赤虫", "Salmon Roe": "鲑鱼籽", "Gyr Abanian Trout": "基拉巴尼亚鳟", "Stonefly Larva": "嗡嗡石蝇", "Rock Saltfish": "岩盐咸鱼", "Silkworm": "蚕蛹", "Duskborne Aethersand": "微光灵砂", "Light-kissed Aethersand": "白光灵砂", "Dawnborne Aethersand": "晓光灵砂", "Leafborne Aethersand": "大树灵砂", "Landborne Aethersand": "大地灵砂", "Everborn Aethersand": "丰饶灵砂", "Dawnlight Aethersand": "极光灵砂", "Everbright Aethersand": "悠久灵砂", "Dusklight Aethersand": "夜光灵砂", "Brass Spoon Lure": "黄铜勺形鱼饵", "Duskglow Aethersand": "黄昏灵砂", "Blue Bobbit": "蓝矶沙蚕", "Nightcrawler": "肥蚯蚓", "Balloon Frog": "气球蛙", "Zagas Khaal": "嘎牙子", "Chiaroglow Aethersand": "闪光灵砂", "Agedeep Aethersand": "险山灵砂", "Scuroglow Aethersand": "黑暗灵砂", "Agewood Aethersand": "古树灵砂",

        "Tupuxuara": "妖精翼龙", "Capelin": "毛鳞鱼", "Thunderbolt Eel": "落雷鳗", "Loosetongue": "哲学骨舌鱼", "Thaliak Caiman": "沙利亚克鳄", "Caiman": "凯门鳄", "Weston Bowfin": "西水弓鳍鱼", "Noontide Oscar": "白丽鱼", "Pipira Pira": "皮皮拉皮拉鱼", "Pteranodon": "无齿翼龙", "Warmwater Bichir": "多鳍鱼", "Tiny Axolotl": "小钝口螈", "Manasail": "魔帆", "Dravanian Bass": "龙堡鲈", "Kuno the Killer": "杀手库诺", "Canavan": "加诺", "Shonisaurus": "秀尼鱼龙", "Helicoprion": "旋齿鲨", "Little Thalaos": "小撒拉奥斯", "Endoceras": "内角石", "Nepto Dragon": "涅普特龙", "Namitaro": "波太郎", "Giant Takitaro": "大泷太郎", "Ninja Betta": "忍斗鱼", "Midge Basket": "摇蚊", "Fiend Worm": "恶魔蠕虫", "Platinum Fish": "白金鱼", "Barreleye": "桶眼鱼", "Spearnose": "枪鼻头", "Shadowstreak": "影纹狗鱼", "Ndendecki": "恩登德奇", "Bombardfish": "轰击泡", "Sylphsbane": "妖祸鱼", "Levinlight": "雷神光", "Thundergut": "吞雷鱼", "Twitchbeard": "抽须王", "Starbright": "星光鳟鱼", "Darkstar": "暗星", "Armorer": "鳞脚螺", "Syldra": "希尔德拉", "Mirrorscale": "银镜鱼", "Fingers": "断指龙虾", "Bloodbath": "血浴", "Hannibal": "汉尼拔", "Vanuhead": "瓦努头", "Scaleripper": "龙鳞撕裂者", "Vidofnir": "维德弗尼尔", "Merciless": "冰之巫女", "Meteortoise": "巨陨龟", "Starflower": "星花", "Meteorite": "陨石", "Tungstite": "钨华", "Coelacanthus": "空棘鱼", "Spinner": "旋转亮片", "Sweetnewt": "芳香蝾螈", "Discobolus": "铁饼", "Spinnerbait": "复合亮片", "Copperfish": "铜鱼", "Gigantshark": "巨鲨", "Lugworm": "沙蚕", "Bloodworm": "血蚯蚓", "Cupfish": "鱼大叔", "Anomalocaris": "奇虾", "Sundisc": "日轮", "Octomammoth": "猛犸章鱼", "Moldva": "莫尔巴", "Wahoo": "梭子鰆", "Raincaller": "求雨鱼", "Yumizuno": "弓角", "Zalera": "扎尔艾拉", "Heliobatis": "环棘鱼", "Toramafish": "特拉玛豹鱼", "Stormdancer": "招雨王", "Goldenfin": "金鳍蝶", "Junkmonger": "拾荒鮟鱇", "Seahag": "海巫婆", "Aetherlouse": "以太虱", "Gnomefish": "沼鯥", "Sunsail": "太阳帆", "Lavalord": "熔岩王", "Catkiller": "飞猫杀手", "Warballoon": "高风水母", "Skyworm": "天虫", "Snowcaller": "求雪鱼", "Lungfish": "肺鱼", "Hotrod": "热破", "Coelacanth": "腔棘鱼", "Nautilus": "鹦鹉螺", "Inkfish": "水墨鱼", "Cirrostratus": "卷层云魟", "Flarefish": "核爆鱼", "Hailfinder": "吞冰水母", "Dimorphodon": "双型齿翼龙", "Magma Worm": "熔岩蠕虫", "Granite Crab": "花岗蟹", "Jacques the Snipper": "剪刀手雅克", "Goby Ball": "虾虎丸子", "Star Cotton Boll": "星棉", "Brown Mushroom": "棕菇", "Teak Log": "柚木原木", "Magic Carpet": "魔毯", "Void Bass": "虚无鲈", "Spoon Worm": "单环刺螠", "Iron Noose": "铁索", "Marrow Sucker": "净髓蜗牛", "Syrphid Basket": "花蝇", "Floating Boulder": "浮游石", "Bass Ball": "鲈鱼丸子", "Ala Mhigan Fighting Fish": "斗鱼", "King of the Spring": "温泉王", "Shark Tuna": "金枪鲨", "Son of Levin": "雷皇子", "Caddisfly Larva": "石蚕", "Faerie Queen": "仙后鲈", "Herring Ball": "鲱鱼丸子", "Meteor Survivor": "陨石幸存者", "Rat Tail": "沟鼠尾巴", "Vip Viper": "大蛇鳗", "Mud Pilgrim": "朝圣泥鱼", "Merlthor Goby": "梅尔托尔虾虎", "The Assassin": "终结者", "Old Softie": "垂暮蝲蛄", "The Drowned Sniper": "沉溺射手", "Snurble Fly": "毛球拟饵", "Stem Borer": "蛀虫", "Old Hollow Eyes": "虚空之眼", "Carp Diem": "倔强鲫鱼", "Crow Fly": "乌鸦拟饵", "The Matriarch": "一家之母", "Abalathian Smelt": "阿巴拉提亚公鱼", "The Salter": "浓盐鲀", "Joan of Trout": "圣鳟贞德", "Pill Bug": "潮虫", "Harbor Herring": "海港鲱", "Helmsman's Hand": "翻舵手", "Ocean Cloud": "海云水母", "The Gobfather": "刺鱼教父", "Daniffen's Mark": "圣人标", "The Terpsichorean": "丽舞蟹", "The Captain's Chalice": "船长圣杯", "Dawn Maiden": "黎明少女", "Lamp Marimo": "绿灯球藻", "Chocobo Fly": "陆行鸟拟饵", "Frilled Shark": "皱鳃鲨", "Giant Squid": "巨型乌贼", "High Perch": "高刺鱼", "Sinking Minnow": "下沉诱饵鱼", "Mud Golem": "泥巨蟹兵", "The Sinker": "沉川鲑", "Matron Carp": "圣母鲤", "Blue Widow": "蓝寡妇", "Floating Minnow": "漂浮诱饵鱼", "Dark Ambusher": "暗兵鳢", "Moth Pupa": "蛾蛹", "Striped Goby": "斑纹虾虎", "Blood Red Bonytongue": "血红龙", "Common Sculpin": "杜父鱼", "Beguiler Chub": "无赖王", "Ghost Carp": "人面鲤", "Dirty Herry": "肮脏鲱", "Charon's Lantern": "冥河灯", "The Greatest Bream in the World": "比阿纳可大帝", "Shrimp Cage Feeder": "小虾肉笼", "The Green Jester": "绿小丑", "Worm of Nym": "尼姆蠕虫", "Crystal Perch": "水晶刺鱼", "The Lone Ripper": "孤独杀手", "Heavy Steel Jig": "重铁板钩", "Gigant Clam": "大愿贝", "Dream Goby": "梦幻虾虎", "Crayfish Ball": "蝲蛄丸子", "Navigator's Brand": "海神剑", "Slime King": "滑溜帝王", "Sabertooth Cod": "剑齿鳕", "The Old Man in the Sea": "海中老人", "Ogre Barracuda": "魔梭鱼", "Blue Corpse": "蓝尸", "Wootz Knifefish Zenith": "乌兹刀背鱼·天极", "Ignus Horn": "炼狱火角", "The Warden's Wand": "太阳神杖", "Magicked Mushroom": "魔幻蘑菇蟹", "Titanic Sawfish": "锯鲛", "Dark Knight": "暗骑士", "Amber Salamander": "琥珀蝾螈", "Bubble Eye": "凸眼金鱼", "Dravanian Squeaker": "倒仰鲶鱼", "Glacier Core": "冰川核", "Sorcerer Fish": "黑巫鱼", "Purse Web Spider": "土蜘蛛", "Armored Catfish": "鳞鲶", "Mountain Kraken": "妖祸克拉肯", "Oliphant's Trunk": "古象鼻鱼", "Fleece Stingray": "棉云魟", "Goblin Bass": "哥布林鲈", "Coerthan Clione": "库尔札斯海若螺", "Berserker Betta": "狂斗鱼", "Vampiric Tapestry": "吸血魔毯", "Jeweled Jellyfish": "宝石水母", "Oil Eel": "油鳗", "Moogle Spirit": "飞灵", "Blood Skipper": "鲜血跳鱼", "Euphotic Pirarucu": "真光层巨骨舌鱼", "Albino Octopus": "白章鱼", "Brown Bolo": "褐飞刀", "Magma Louse": "岩浆虱", "Rime Eater": "食冰水母", "Mercy Staff": "冰神鱼", "Coerthan Puffer": "山地鲀", "Storm Core": "风暴核", "Kissing Fish": "亲吻鱼", "Grass Carp": "草鱼", "Giant Donko": "大钝甲鱼", "Cadaver Carp": "腐鱼", "Rainbow Spoon Lure": "彩虹勺形鱼饵", "Mushroom Crab": "蘑菇蟹", "Judgment Staff": "雷神鱼", "Rock Lobster": "海岩龙虾", "Thunderbolt Sculpin": "雷纹鱼", "Paglth'an Discus": "帕戈尔赞盘丽鱼", "The Dreamweaver": "噩梦之种", "The Soul of the Martyr": "拉塔托斯克之魂", "The Second One": "卷风鲨", "Aphotic Pirarucu": "无光层巨骨舌鱼", "Aether Eye": "以太之眼", "Ice Faerie": "冰战神", "Hraesvelgr's Tear": "圣龙泪", "Moggle Mogpom": "莫古尔古球球", "Allagan Bladeshark": "亚拉戈剑鲨", "Basking Shark": "姥鲨", "Bobgoblin Bass": "万事通鲈", "Madam Butterfly": "蝴蝶夫人", "Hedgemole Cricket": "蝼蛄", "Olgoi-Khorkhoi": "沙海肠虫", "Bat-o'-Nine-Tails": "吸血鞭", "The Thousand-year Itch": "千年殇", "Mahi-Mahi": "麻希鲯鳅", "Functional Proto-hropken": "欧洛浦肯", "Hundred-eyed Axolotl": "百目螈", "Twin-tongued Carp": "叉舌鱼", "Hanatatsu": "花海马", "Liopleurodon": "鳍龙", "Steelshark": "白钢鲨", "Raitonfish": "雷遁鱼", "Pandamoth": "熊猫蝶尾鱼", "Seraphim": "天女鱼", "Longhair Catfish": "长须鲶鱼", "Eastern Pike": "东方刺鱼", "Doman Grass Carp": "无二草鱼", "Killifish": "青鳉", "Miounnefish": "缪恩鱼", "Deemster": "裁定鱼", "Bull's Bite": "猛牛口食", "Falling Star": "小流星", "Nirvana Crab": "涅槃蟹", "Wraithfish": "幽灵鱼", "Swordfish": "剑旗鱼", "Sculptor": "雕塑家", "Little Perykos": "小珀琉喀斯", "Silken Koi": "绢鲤", "Tawny Wench Shark": "大天竺鱼", "Hak Bitterling": "哈克苦鱼", "Captain Nemo": "尼摩船长", "Heavens Coral": "天空珊瑚", "Bloodchaser": "风暴血骑士", "Charibenet": "沙里贝涅", "Sea Butterfly": "云海蝴蝶螺", "Scorpionfly": "蛉蝎", "Raimdellopterus": "兰代勒翼龙", "Crystal Pigeon": "水晶飞鸽", "The Lord of Lords": "熔岩帝王", "Problematicus": "莫名熔岩鱼", "Fossiltongue": "化石骨舌鱼", "Armor Fish": "铠鱼", "Riddle": "里德尔", "The Speaker": "能言者", "Opabinia": "欧巴宾海蝎", "Thunderscale": "雷鳞蝾螈", "Thousand Fin": "千鳍", "Bishopfish": "大祭司鱼", "Paikiller": "猴面雀杀手", "Ukiki": "浮木鱼", "Ichimonji": "一文字", "Snailfish": "滑溜狮子鱼", "Cardinalfish": "枢机鱼", "Rockfish": "岩石鱼", "Violet Prismfish": "紫彩鱼", "Guppy": "虹鳉", "Purple Buckler": "紫圆盾", "Velodyna Salmon": "威罗迪纳鲑鱼", "Maiden's Heart": "恋心球藻", "Coral Horse": "珊瑚海马", "Gyr Abanian Chub": "基拉巴尼亚鲢鱼", "Ceti": "赛缇", "Dark Sleeper": "暗塘鳢", "The Archbishop": "教皇鱼", "The Winter Queen": "春不知", "The Word of God": "神谕苦鱼", "Diamond-eye": "钻石眼", "Mirage Mahi": "幻河鲯", "Firelight Goldfish": "橙彩鱼", "Red Prismfish": "红彩鱼", "White Goldfish": "白彩鱼", "The Undecided": "不定鱼", "Hagoromo Koi": "天女鲤", "Bokuden": "卜传", "Triplespine": "仿麻鱼", "Rakshasa": "速疾鬼鳄", "Sapphire Fan": "蓝宝石扇鳉", "Bondsplitter": "怨妇虾", "Yat Khan": "亚特可汗", "Alligator Snapping Turtle": "鳄龟", "Indigo Prismfish": "蓝彩鱼", "Green Prismfish": "绿彩鱼", "Redtail": "红尾鲶", "Saltmill": "盐磨鲨", "Hardhead Trout": "硬头鳟", "The Last Tear": "最后一滴泪", "Princess Killifish": "公主青鳉", "Argonautica": "大海蛇", "Hemon": "黑蒙鱼", "Bloodtail Zombie": "红尾僵尸鱼", "Watcher Catfish": "拉尔戈鲶鱼", "Corpse Chub": "骸鲢鱼", "Blade Skipper": "刀片跳鱼", "Downstream Loach": "下游鱼", "Moksha": "解脱鱼", "Duskfish": "暮辉鱼", "Hagoromo Bijin": "羽衣美人", "Ku'er": "苦尔鳗", "Jade Eel": "翡翠鳗", "Oakroot": "橡根鱼", "Xenacanthus": "异刺鲨", "Castaway Chocobo Chick": "巧儿海陆行鸟", "Glarramundi": "鬼视", "Hermit's End": "仙寿翁", "Warden of the Seven Hues": "七彩天主", "Garden Skipper": "菜叶跳鱼", "Stethacanthus": "胸脊鲨", "Drepanaspis": "镰甲鱼", "Axelrod": "车轴鱼", "The Unraveled Bow": "一束彩虹", "Pomegranate Trout": "石榴海", "Seven Stars": "七星", "Lily of the Veil": "阿拉米格面纱鱼", "Nhaama's Treasure": "月神的爱宠", "Banderole": "晨曦旗鱼", "Pinhead": "万刺鲀", "The Unconditional": "众神之爱", "The Vegetarian": "菜食王", "The Ruby Dragon": "红龙", "Suiten Ippeki": "水天一碧",

        // 采集点类型
        "Freshwater Fishing": "淡水", "Skyfishing": "空鱼", "Cloudfishing": "云海", "Ocean Fishing": "海水", "Dunefishing": "沙海", "Rocky Outcropping": "石场", "Mineral Deposit": "矿脉", "Mature Tree": "良材", "Lush Vegetation": "草场", "Hellfishing": "熔岩", "Saltfishing": "盐湖",

        // 狩猎怪
        "Glimmerscale": "铜镜", "Judgeray": "审判鳐", "The Garlok": "伽洛克", "Zona Seeker": "虚无探索者", "Thousand-Cast Theda": "千竿口花希达", "Croakadile": "咕尔呱洛斯", "Mindflayer": "夺心魔", "Laideronnette": "雷德罗巨蛇", "Okina": "巨大鳐 七彩飞鱼", "Gandarewa": "刚德瑞瓦", "Spawns after 10 Eorzean hours of rain (two cycles.)": "连续两个下雨天气期间10小时ET后溜达触发", "Spawns after midnight on the second day of new moon.": "起始触发时间为新月凌晨时溜达触发.持续时间1-4日每天晚上.", "Spawns on the first day of full moon after 5PM ET.": "起始触发时间为满月17时溜达触发.持续时间16-20日每天晚上.", "Spawns after 200 real minutes of dry weather following showers or rain.": "雨后200分钟真实时间连续不下雨直至下一次下雨期间溜达触发.", "Spawns upon catching a Glimmerscale at Nophica's Wells.": "在西萨纳兰丰饶神井渔场钓上铜镜.", "Spawns upon catching a Judgeray at Fallgoard Float.": "在黑衣森林北部林区秋瓜湖畔渔场钓上审判鳐.", "Bonnacon": "火愤牛", "Croque-Mitaine": "护土精灵",

        // 大地图
        "Limsa Lominsa": "利姆萨・罗敏萨", "Middle La Noscea": "中拉诺西亚", "Lower La Noscea": "拉诺西亚低地", "Eastern La Noscea": "东拉诺西亚", "Western La Noscea": "西拉诺西亚", "Upper La Noscea": "拉诺西亚高地", "Outer La Noscea": "拉诺西亚外地", "Mist": "海雾村", "Gridania": "格里达尼亚", "Central Shroud": "黑衣森林中央林区", "East Shroud": "黑衣森林东部林区", "South Shroud": "黑衣森林南部林区", "North Shroud": "黑衣森林北部林区", "The Lavender Beds": "薰衣草苗圃", "Ul'dah": "乌尔达哈", "Western Thanalan": "西萨纳兰", "Central Thanalan": "中萨纳兰", "Eastern Thanalan": "东萨纳兰", "Southern Thanalan": "南萨纳兰", "Northern Thanalan": "北萨纳兰", "The Goblet": "高脚孤丘", "Ishgard": "伊修加德", "Coerthas Central Highlands": "库尔札斯中央高地", "Coerthas Western Highlands": "库尔札斯西部高地", "Mor Dhona": "摩杜纳", "The Sea of Clouds": "阿巴拉提亚云海", "Azys Lla": "魔大陆阿济兹拉", "The Dravanian Forelands": "龙堡参天高地", "The Dravanian Hinterlands": "龙堡内陆低地", "The Churning Mists": "翻云雾海", "Idyllshire": "田园郡", "Gold Saucer": "金碟游乐场", "Rhalgr's Reach": "神拳痕", "The Fringes": "基拉巴尼亚边区", "The Peaks": "基拉巴尼亚山区", "The Lochs": "基拉巴尼亚湖区", "Kugane": "黄金港", "The Ruby Sea": "红玉海", "Yanxia": "延夏", "The Azim Steppe": "太阳神草原", "The Gold Saucer": "金碟游乐场", "New Gridania": "格里达尼亚新街", "Ul'dah - Steps of Thal - Merchant Strip": "乌尔达哈来生回廊 - 裁衣匠行会", "Ul'dah - Steps of Nald": "乌尔达哈现世回廊", "Old Gridania": "格里达尼亚旧街", "Foundation": "伊修加德基础层", "The Pillars": "伊修加德砥柱层", "Fortemps Manor": "福尔唐伯爵府", "Virdjala": "无垢干谷", "The Divine Audience": "圣礼拜台", "Sleeping Stones": "睡石矿场", "Castrum Fluminis": "帝国河畔堡", "Shirogane": "白银乡", "Kholusia": "珂露西亚岛", "Il Mheg": "伊尔美格", "Lakeland": "雷克兰德", "The Tempest": "黑风海", "Amh Araeng": "安穆·艾兰", "The Rak'tika Greatwood": "拉凯提卡大森林",

        // 天气
        "Clear Skies": "碧空", "Fair Skies": "晴朗", "Clouds": "阴云", "Fog": "薄雾", "Wind": "微风", "Gales": "强风", "Rain": "小雨", "Showers": "暴雨", "Thunder": "打雷", "Thunderstorms": "雷雨", "Dust Storms": "扬沙", "Sandstorms": "沙尘暴", "Hot Spells": "高温", "Heat Waves": "热浪", "Snow": "小雪", "Blizzards": "暴雪", "Gloom": "妖雾", "Auroras": "极光", "Darkness": "黑暗", "Tension": "绝命", "Clouds": "阴云", "Storm Clouds": "雷云", "Heat Waves": "热浪", "Gloom": "妖雾", "Gales": "强风", "Fair Skies": "晴朗", "Umbral Wind": "灵风", "Umbral Static": "灵电", "Fair Skies": "晴朗",

        // html
        "Red Gatherers' Scrip": "红票收藏品", "Blue Gatherers' Scrip": "蓝票收藏品", "Aetherial Reduction possible": "精选", "Perception": "鉴别力", "Gathering": "获得力", "Cooldown": "冷却", "hours": "小时", "maintenance": "维护", "Mining": "采矿工", "Botany": "园艺工", "Fishing": "捕鱼人", "Unspoiled": "未知采集点", "Ephemeral": "限时采集地点", "Legendary": "传说采集地点", "Collectable": "收藏品", "Reducible": "精选", "Blue Scrips": "蓝票", "Red Scrips": "红票", "Yellow Scrips": "黄票", "Hunt": "狩猎", "Garland Bell": "GarLand 采集表", "Filters": "筛选", "Search": "检索", "Timeline": "时间轴", "Timers": "采集时间表", "timers": "时间表", "hidden": "隐藏", "Maps": "地图", "Select a list for this timer": "请为此时钟选择一个列表", "Create new list": "新建列表", "Name the new list": "填写收藏列表名字", "A list with this name already exists.": "已存在此名称的列表.", "Remove from list?  Click again to confirm.": "从列表移除此项？再次单击以确认操作。", "mooch": "以小钓大", "Predator": "捕鱼人之识", "Unspoiled": "未知采集点", "Ephemeral": "限时采集地点", "Legendary": "传说采集地点", " Gathering Rate 0%": "获得率 0%", "Gathering Rate": "获得率", "Gathering Fortune 0%": "优质率 0%", "Gathering Fortune": "优质率", "Hidden": "隐藏详细列表", "Impulsive Appraisal": "直觉甄别", "Discerning Eye": "审美眼", "Single Mind": "聚精会神", "Utmost Caution": "极度警戒", "Methodical Appraisal": "慎重甄别", "Instinctual Appraisal": "大胆甄别", "Impulsive Appraisal II": "直觉甄别2", "proc": "触发", "Fish Eyes required": "需要鱼眼", "Tome of Ichthyological Folklore": "鱼类传承录", "Snagging required": "需要钓组", "Collect 1": "采集 1", "Collect 2": "采集 2", "Collect 3": "采集 3", "Collect 4": "采集 4", "Collect 5": "采集 5", "Collect": "采集", "Completed": "已完成", "Favorites": "收藏夹",

        "Perception < 565": "鉴别力 < 565", "Perception < 489": "鉴别力 < 489", "Perception < 348": "鉴别力 < 348", "Perception < 304": "鉴别力 < 304", "Gathering < 600": "获得力 < 600", "Rotations": "收藏品技能循环[采集手法]", "Aetherial Reduction.  8/8 purity.  600 GP.": "精选. 8/8纯度.  600采集力需求. 绿框是成功触发,红框是触发失败.", "Respawn node": "胜败乃兵家常事,大侠请重新来过!", "Red Scrips.  470 collectability.  600 GP.": "红票手法. 470收藏品价值. 600采集力需求.", "Counterfoils.  380 collectability.  600 GP.": "采集票据. 380收藏品价值. 600采集力需求.", "Yellow Scrips.  470 collectability.  600 GP.": "黄票手法. 470收藏品价值. 600采集力需求. 绿框是成功触发,红框是触发失败.", "Yellow Scrips.  470 collectability.  Low stat requirement.  600 GP.": "黄票手法. 470收藏品价值. 最低数据需求. 600采集力需求. 绿框是成功触发,红框是触发失败.", "Leveling and Red Scrips. 450 collectability.  600 GP.": "理符及红票手法. 450收藏品价值. 600采集力需求", "Yellow Gatherers' Scrip": "黄票收藏品", ", Purity 5+": ", 纯度 5+", "Aetherial Reduction.  7/8 and 8/8 purity.  Adjust rating for perception.  600 GP.": "精选.  7/8 和 8/8 纯度.  根据鉴别力调整稀有度.  600 采集力需求.", "Rating": "稀有度",

        "Audio notifications are blocked by your browser.  Garland Bell will be unable to sound alerts.": "声音提示被浏览器阻止，采集时钟无法进行声音提醒。", "Audio preloading is not supported by your browser.  The first notification you receive may not play properly.": "你的浏览器不支持音频预加载，第一次声音提醒可能不准确。", "Popup notifications can not be displayed.": "弹出消息无法显示。", "Local storage is blocked by your browser.  You may be in private browsing mode.  Changes will not be saved.": "本地存储被浏览器禁用，你可能正在隐私模式下浏览，所有修改均不会保存。",

        "Settings": "设置", "Early Warning Alarm": "预备前提醒铃声", "Spawn Alarm": "进行中提醒铃声", "Alarm tone to sound for favorite nodes.": "选择你喜欢的提醒铃声.", "Early Warning Volume": "预备前提醒音量", "Spawn Volume": "进行提醒音量", "Volume of the alarm.": "铃声音量", "Early Warning Time": "预备前提醒时间", "Spawn Time": "进行中提醒时间", "Wait this number of real seconds before sounding the alarm.": "设置铃声多少秒之前触发.", "Unlimited Columns": "不限制列", "Use as many columns as possible.": "最可能一行中显示最多列.", "Compact": "隐藏信息", "Compact timer information to the essentials.": "隐藏采集时间表中的信息.", "Colorblind": "着色加强", "Alter active bar colors to better suit colorblind users.": "使得进行中的采集时间表时间轴更鲜艳.", "Server Time": "校准时间", "Calibrate time with the server.  Use if your time is wrong.  This feature is experimental and may not work properly.": "如果你的时间不准确采用本服务器时间,但是并不能保证一定有用.", "Linkshell": "默认铃声", "Tell 1": "铃声 1", "Tell 2": "铃声 2", "Tell 3": "铃声 3", "Classes": "采集职业", "Types": "采集类型", "Tasks": "采集计划", "Other": "其他", "Patches": "资料片版本", "Calibrate time with the server.  Use if your time is wrong.": "与服务器同步时间，当你的时间不准确时可启用此选项",

        // 金蝶
        "Gold S.": "金碟", "Event Stage GATE": "[游乐场事件]舞台表演", "Side Stage GATE": "[游乐场事件]周边活动", "The Time of My Life, Any Way the Wind Blows": "舞蹈大师的特训,喷风中的幸存者", "Cliffhanger, Vase Off, Skinchange We Can Believe In": "小雏鸟的营救者,从天而降的送货人,火眼金睛的追踪者",
    }

    var start = function () {
        window.gt.locale.lang = 'cn';
        window.gt.locale.cn = data_zh;
    }
    if (window.gt !== undefined && window.gt.locale !== undefined) {
        start();
    } else {
        setTimeout(function () {
            start();
            window.gt.bell.initialize();
        }, 2000);
    }


})();
