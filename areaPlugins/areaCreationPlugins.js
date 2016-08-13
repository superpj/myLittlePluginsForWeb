
(function ($) {
	$.fn.rechargeableareaCheckbox = function () {
	var provinceAndCity = [
		{       "region" : "华东", 
			"pac" : [       { "province" : "上海", "city" : [{ "name" : "上海", "id" : "shanghaiitem" }], "id" : "shanghai" },
			        	{ "province" : "江苏", "city" : [	{ "name" : "南京", "id" : "nanjing" },
										{ "name" : "无锡", "id" : "wuxi" }, 
										{ "name" : "徐州", "id" : "xuzhou" },
										{ "name" : "常州", "id" : "changzhou" },
										{ "name" : "苏州", "id" : "suzhou" },
										{ "name" : "南通", "id" : "nantong" },
										{ "name" : "连云港", "id" : "lianyungang" },
										{ "name" : "淮安", "id" : "huaian" },
										{ "name" : "盐城", "id" : "yancheng" },
										{ "name" : "扬州", "id" : "yangzhou" },
										{ "name" : "镇江", "id" : "zhenjiang" },
										{ "name" : "泰州", "id" : "taizhou" },
										{ "name" : "宿迁", "id" : "suqian" }
								], "id" : "jiangsu" },
	
					{ "province" : "浙江", "city" : [	{ "name" : "杭州", "id" : "hangzhou" },
										{ "name" : "宁波", "id" : "ningbo" }, 
										{ "name" : "温州", "id" : "wenzhou" },
										{ "name" : "嘉兴", "id" : "jiaxing" },
										{ "name" : "湖州", "id" : "huzhou" },
										{ "name" : "绍兴", "id" : "shaoxing" },
										{ "name" : "金华", "id" : "jinhua" },
										{ "name" : "衢州", "id" : "quzhou" },
										{ "name" : "舟山", "id" : "zhoushan" },
										{ "name" : "台州", "id" : "taizhouy" },
										{ "name" : "丽水", "id" : "lishui" }
									], "id" : "zhejiang" },
	
					{ "province" : "安徽", "city" : [	{ "name" : "合肥", "id" : "hefei" },
										{ "name" : "芜湖", "id" : "wuhu" }, 
										{ "name" : "蚌埠", "id" : "bengbu" },
										{ "name" : "淮南", "id" : "huainan" },
										{ "name" : "马鞍山", "id" : "maanshan" },
										{ "name" : "淮北", "id" : "huaibei" },
										{ "name" : "铜陵", "id" : "tongling" },
										{ "name" : "安庆", "id" : "anqing" },
										{ "name" : "黄山", "id" : "huangshan" },
										{ "name" : "滁州", "id" : "chuzhou" },
										{ "name" : "阜阳", "id" : "fuyang" },
										{ "name" : "宿州", "id" : "suzhoua" },
										{ "name" : "六安", "id" : "luan" },
										{ "name" : "亳州", "id" : "bozhou" },
										{ "name" : "池州", "id" : "chizhou" },
										{ "name" : "巢湖", "id" : "chaohu" },
										{ "name" : "宣城", "id" : "xuancheng" }
									], "id" : "anhui" },
	
					{ "province" : "江西", "city" : [	{ "name" : "南昌", "id" : "nanchang" },
										{ "name" : "景德镇", "id" : "jingdezhen" }, 
										{ "name" : "萍乡", "id" : "pingxiang" },
										{ "name" : "九江", "id" : "jiujiang" },
										{ "name" : "新余", "id" : "xinyu" },
										{ "name" : "鹰潭", "id" : "yingtan" },
										{ "name" : "赣州", "id" : "ganzhou" },
										{ "name" : "吉安", "id" : "jian" },
										{ "name" : "宜春", "id" : "yichun" },
										{ "name" : "抚州", "id" : "fuzhouj" },
										{ "name" : "上饶", "id" : "shangrao" }
									], "id" : "jiangxi" }
	
				 ], 
			"id" : "eastChina" },
	
		{       "region" : "华北", 
			"pac" : [       { "province" : "北京", "city" : [{ "name" : "北京", "id" : "beijingitem" }], "id" : "beijing" },
					{ "province" : "天津", "city" : [{ "name" : "天津", "id" : "tianjinitem" }], "id" : "tianjin" },
					{ "province" : "山西", "city" : [	{ "name" : "太原", "id" : "taiyuan" },
										{ "name" : "大同", "id" : "datong" }, 
										{ "name" : "阳泉", "id" : "yangquan" },
										{ "name" : "长治", "id" : "changzhi" },
										{ "name" : "晋城", "id" : "jincheng" },
										{ "name" : "朔州", "id" : "shuozhou" },
										{ "name" : "晋中", "id" : "jinzhong" },
										{ "name" : "运城", "id" : "yuncheng" },
										{ "name" : "忻州", "id" : "xinzhou" },
										{ "name" : "临汾", "id" : "linfen" },
										{ "name" : "吕梁", "id" : "lvliang" }
									], "id" : "shanxi" },
	
					{ "province" : "山东", "city" : [	{ "name" : "济南", "id" : "jinan" },
										{ "name" : "青岛", "id" : "qingdao" }, 
										{ "name" : "淄博", "id" : "zibo" },
										{ "name" : "枣庄", "id" : "zaozhuang" },
										{ "name" : "东营", "id" : "dongying" },
										{ "name" : "烟台", "id" : "yantai" },
										{ "name" : "潍坊", "id" : "weifang" },
										{ "name" : "济宁", "id" : "jining" },
										{ "name" : "泰安", "id" : "taian" },
										{ "name" : "威海", "id" : "weihai" },
										{ "name" : "日照", "id" : "rizhao" },
										{ "name" : "莱芜", "id" : "laiwu" },
										{ "name" : "临沂", "id" : "linyi" },
										{ "name" : "德州", "id" : "dezhou" },
										{ "name" : "聊城", "id" : "liaocheng" },
										{ "name" : "滨州", "id" : "binzhou" },
										{ "name" : "菏泽", "id" : "heze" }
									], "id" : "shandong" },
	
					{ "province" : "河北", "city" : [	{ "name" : "石家庄", "id" : "shijiazhuang" },
										{ "name" : "唐山", "id" : "tangshan" }, 
										{ "name" : "秦皇岛", "id" : "qinhuangdao" },
										{ "name" : "邯郸", "id" : "handan" },
										{ "name" : "邢台", "id" : "xingtai" },
										{ "name" : "保定", "id" : "baoding" },
										{ "name" : "张家口", "id" : "zhangjiakou" },
										{ "name" : "承德", "id" : "chengde" },
										{ "name" : "沧州", "id" : "cangzhou" },
										{ "name" : "廊坊", "id" : "langfang" },
										{ "name" : "衡水", "id" : "hengshui" },
										{ "name" : "定州", "id" : "dingzhou" },
										{ "name" : "辛集", "id" : "xiji" }
									], "id" : "hebei" },
	
					{ "province" : "内蒙古", "city" : [	{ "name" : "呼和浩特", "id" : "huhehaote" },
										{ "name" : "包头", "id" : "baotou" }, 
										{ "name" : "乌海", "id" : "wuhai" },
										{ "name" : "赤峰", "id" : "chifeng" },
										{ "name" : "鄂尔多斯", "id" : "eerduosi" },
										{ "name" : "呼伦贝尔", "id" : "hulunbeier" },
										{ "name" : "巴彦淖尔", "id" : "bayannaoer" },
										{ "name" : "乌兰察布", "id" : "wulanchabu" },
										{ "name" : "兴安", "id" : "xingan" },
										{ "name" : "锡林郭勒", "id" : "xilinguole" },
										{ "name" : "阿拉善", "id" : "alashan" },
										{ "name" : "通辽", "id" : "tongliao" }
									], "id" : "neimenggu" }
	
				 ], 
			"id" : "northChina" },
	
		{       "region" : "华中", 
			"pac" : [   { "province" : "湖南", "city" : [	{ "name" : "长沙", "id" : "changsha" },
									{ "name" : "株洲", "id" : "zhuzhou" }, 
									{ "name" : "湘潭", "id" : "xiangtan" },
									{ "name" : "衡阳", "id" : "hengyang" },
									{ "name" : "邵阳", "id" : "shaoyang" },
									{ "name" : "岳阳", "id" : "yueyang" },
									{ "name" : "常德", "id" : "changde" },
									{ "name" : "张家界", "id" : "zhangjiajie" },
									{ "name" : "益阳", "id" : "yiyang" },
									{ "name" : "郴州", "id" : "chenzhou" },
									{ "name" : "永州", "id" : "yongzhou" },
									{ "name" : "怀化", "id" : "huaihua" },
									{ "name" : "娄底", "id" : "loudi" },
									{ "name" : "湘西", "id" : "xiangxi" }
								], "id" : "hunan" },
	
				{ "province" : "湖北", "city" : [	{ "name" : "武汉", "id" : "wuhan" },
									{ "name" : "黄石", "id" : "huangshi" }, 
									{ "name" : "十堰", "id" : "shiyan" },
									{ "name" : "宜昌", "id" : "yichang" },
									{ "name" : "襄阳", "id" : "xiangyang" },
									{ "name" : "鄂州", "id" : "ezhou" },
									{ "name" : "荆门", "id" : "jingmen" },
									{ "name" : "孝感", "id" : "xiaogan" },
									{ "name" : "荆州", "id" : "jingzhou" },
									{ "name" : "黄冈", "id" : "huanggang" },
									{ "name" : "咸宁", "id" : "xianning" },
									{ "name" : "随州", "id" : "suizhou" },
									{ "name" : "恩施", "id" : "enshi" },
									{ "name" : "仙桃", "id" : "xiantao" },
									{ "name" : "潜江", "id" : "qianjiang" },
									{ "name" : "天门", "id" : "tianmen" },
									{ "name" : "神农架", "id" : "shennongjia" }
								], "id" : "hubei" },
	
				{ "province" : "河南", "city" : [	{ "name" : "郑州", "id" : "zhengzhou" },
									{ "name" : "开封", "id" : "kaifeng" }, 
									{ "name" : "洛阳", "id" : "luoyang" },
									{ "name" : "平顶山", "id" : "pingdingshan" },
									{ "name" : "安阳", "id" : "anyang" },
									{ "name" : "鹤壁", "id" : "hebi" },
									{ "name" : "新乡", "id" : "xinxiang" },
									{ "name" : "焦作", "id" : "jiaozuo" },
									{ "name" : "济源", "id" : "jiyuan" },
									{ "name" : "濮阳", "id" : "puyang" },
									{ "name" : "许昌", "id" : "xuchang" },
									{ "name" : "漯河", "id" : "luohe" },
									{ "name" : "三门峡", "id" : "sanmenxia" },
									{ "name" : "南阳", "id" : "nanyang" },
									{ "name" : "商丘", "id" : "shangqiu" },
									{ "name" : "信阳", "id" : "xinyang" },
									{ "name" : "周口", "id" : "zhoukou" },
									{ "name" : "驻马店", "id" : "zhumadian" }
								], "id" : "henan" }
	
				 ], 
			"id" : "centralChina" },
	
		{       "region" : "华南", 
			"pac" : [   { "province" : "广东", "city" : [	{ "name" : "广州", "id" : "guangzhou" },
									{ "name" : "韶关", "id" : "shaoguan" }, 
									{ "name" : "深圳", "id" : "shenzhen" },
									{ "name" : "珠海", "id" : "zhuhai" },
									{ "name" : "汕头", "id" : "shantou" },
									{ "name" : "佛山", "id" : "foshan" },
									{ "name" : "江门", "id" : "jiangmen" },
									{ "name" : "湛江", "id" : "zhanjiang" },
									{ "name" : "茂名", "id" : "maoming" },
									{ "name" : "肇庆", "id" : "zhaoqing" },
									{ "name" : "惠州", "id" : "huizhou" },
									{ "name" : "梅州", "id" : "meizhou" },
									{ "name" : "汕尾", "id" : "shanwei" },
									{ "name" : "河源", "id" : "heyuan" },
									{ "name" : "阳江", "id" : "yangjiang" },
									{ "name" : "清远", "id" : "qingyuan" },
									{ "name" : "东莞", "id" : "dongguan" },
									{ "name" : "中山", "id" : "zhongshan" },
									{ "name" : "东沙", "id" : "dongsha" },
									{ "name" : "潮州", "id" : "chaozhou" },
									{ "name" : "揭阳", "id" : "jieyang" },
									{ "name" : "云浮", "id" : "yunfu" }
								], "id" : "guangdong" },
	
				{ "province" : "广西", "city" : [	{ "name" : "南宁", "id" : "nanning" },
									{ "name" : "柳州", "id" : "liuzhou" }, 
									{ "name" : "桂林", "id" : "guilin" },
									{ "name" : "梧州", "id" : "wuzhou" },
									{ "name" : "北海", "id" : "beihai" },
									{ "name" : "防城港", "id" : "fangchenggang" },
									{ "name" : "钦州", "id" : "qinzhou" },
									{ "name" : "贵港", "id" : "guigang" },
									{ "name" : "玉林", "id" : "yulin" },
									{ "name" : "百色", "id" : "baise" },
									{ "name" : "贺州", "id" : "hezhou" },
									{ "name" : "河池", "id" : "hechi" },
									{ "name" : "来宾", "id" : "laibin" },
									{ "name" : "崇左", "id" : "chongzuo" }
								], "id" : "guangxi" },
	
				{ "province" : "福建", "city" : [	{ "name" : "福州", "id" : "fuzhoufu" },
									{ "name" : "厦门", "id" : "xiamen" }, 
									{ "name" : "莆田", "id" : "putian" },
									{ "name" : "三明", "id" : "sanming" },
									{ "name" : "泉州", "id" : "quanzhou" },
									{ "name" : "漳州", "id" : "zhangzhou" },
									{ "name" : "南平", "id" : "nanping" },
									{ "name" : "龙岩", "id" : "longyan" },
									{ "name" : "平潭", "id" : "pingtan" },
									{ "name" : "宁德", "id" : "ningde" }
								], "id" : "fujian" },
	
				{ "province" : "海南", "city" : [	{ "name" : "海口", "id" : "haikou" },
									{ "name" : "三亚", "id" : "sanya" }, 
									{ "name" : "三沙", "id" : "sansha" },
									{ "name" : "五指山", "id" : "wuzhishan" },
									{ "name" : "琼海", "id" : "qionghai" },
									{ "name" : "儋州", "id" : "danzhou" },
									{ "name" : "文昌", "id" : "wenchang" },
									{ "name" : "万宁", "id" : "wanning" },
									{ "name" : "东方", "id" : "dongfang" },
									{ "name" : "定安", "id" : "dingan" },
									{ "name" : "屯昌", "id" : "tunchang" },
									{ "name" : "澄迈", "id" : "chengmai" },
									{ "name" : "临高", "id" : "lingao" },
									{ "name" : "白沙", "id" : "baisha" },
									{ "name" : "昌江", "id" : "changjiang" },
									{ "name" : "乐东", "id" : "ledong" },
									{ "name" : "中沙", "id" : "zhongsha" },
									{ "name" : "陵水", "id" : "lingshui" },
									{ "name" : "保亭", "id" : "baoting" },
									{ "name" : "琼中", "id" : "qiongzhong" },
									{ "name" : "西沙", "id" : "xisha" },
									{ "name" : "南沙", "id" : "nansha" }
								], "id" : "hainan" },
	
				 ], 
			"id" : "southChina" },
	
		{      "region" : "东北", 
			"pac" : 	{ "province" : "辽宁", "city" : [	{ "name" : "沈阳", "id" : "shenyang" },
										{ "name" : "大连", "id" : "dalian" }, 
										{ "name" : "鞍山", "id" : "anshan" },
										{ "name" : "抚顺", "id" : "fushun" },
										{ "name" : "本溪", "id" : "benxi" },
										{ "name" : "丹东", "id" : "dandong" },
										{ "name" : "锦州", "id" : "jinzhou" },
										{ "name" : "营口", "id" : "yingkou" },
										{ "name" : "阜新", "id" : "fuxin" },
										{ "name" : "辽阳", "id" : "liaoyang" },
										{ "name" : "盘锦", "id" : "panjin" },
										{ "name" : "铁岭", "id" : "tieling" },
										{ "name" : "朝阳", "id" : "chaoyang" },
										{ "name" : "葫芦岛", "id" : "huludao" }
								], "id" : "liaoning" },
	
				{ "province" : "吉林", "city" : [	{ "name" : "长春", "id" : "changchun" },
									{ "name" : "吉林", "id" : "jilinCity" }, 
									{ "name" : "四平", "id" : "siping" },
									{ "name" : "辽源", "id" : "liaoyuan" },
									{ "name" : "通化", "id" : "tonghua" },
									{ "name" : "白山", "id" : "baishan" },
									{ "name" : "松原", "id" : "songyuan" },
									{ "name" : "白城", "id" : "baicheng" },
									{ "name" : "延边朝鲜族自治州", "id" : "yanbian" }
								], "id" : "jilinPro" },
	
				{ "province" : "黑龙江", "city" : [	{ "name" : "哈尔滨", "id" : "haerbin" },
									{ "name" : "齐齐哈尔", "id" : "qiqihaer" }, 
									{ "name" : "鸡西", "id" : "jixi" },
									{ "name" : "鹤岗", "id" : "hegang" },
									{ "name" : "双鸭山", "id" : "shuangyashan" },
									{ "name" : "大庆", "id" : "daqing" },
									{ "name" : "伊春", "id" : "yichunhei" },
									{ "name" : "佳木斯", "id" : "jiamusi" },
									{ "name" : "七台河", "id" : "qitaihe" },
									{ "name" : "牡丹江", "id" : "mudanjiang" },
									{ "name" : "黑河", "id" : "heihe" },
									{ "name" : "绥化", "id" : "suihua" },
									{ "name" : "大兴安岭", "id" : "daxinganling" }
								], "id" : "heilongjiang" }
	
				 ], 
			"id" : "northeast" },
	
		{       "region" : "西北", 
			"pac" : [   	{ "province" : "陕西", "city" : [	{ "name" : "西安", "id" : "xian" },
										{ "name" : "铜川", "id" : "tongchuan" }, 
										{ "name" : "宝鸡", "id" : "baoji" },
										{ "name" : "咸阳", "id" : "xianyang" },
										{ "name" : "渭南", "id" : "weinan" },
										{ "name" : "延安", "id" : "yanan" },
										{ "name" : "汉中", "id" : "hanzhong" },
										{ "name" : "榆林", "id" : "yulinxshan" },
										{ "name" : "安康", "id" : "ankang" },
										{ "name" : "商洛", "id" : "shangluo" }
									], "id" : "shanxiwest" },
	
				{ "province" : "新疆", "city" : [	{ "name" : "乌鲁木齐", "id" : "wulumuqi" },
									{ "name" : "克拉玛依", "id" : "kelamayi" }, 
									{ "name" : "吐鲁番", "id" : "tulufan" },
									{ "name" : "哈密", "id" : "hami" },
									{ "name" : "昌吉", "id" : "changji" },
									{ "name" : "博尔塔拉", "id" : "boertala" },
									{ "name" : "巴音郭楞", "id" : "bayinguoleng" },
									{ "name" : "阿克苏", "id" : "akesu" },
									{ "name" : "克孜勒苏柯尔克孜", "id" : "kezi" },
									{ "name" : "喀什", "id" : "kashi" },
									{ "name" : "和田", "id" : "hetian" },
									{ "name" : "伊犁", "id" : "yili" },
									{ "name" : "塔城", "id" : "tacheng" },
									{ "name" : "阿勒泰", "id" : "aletai" },
									{ "name" : "石河子", "id" : "shihezi" },
									{ "name" : "阿拉尔", "id" : "alaer" },
									{ "name" : "图木舒克", "id" : "tumushuke" },
									{ "name" : "五家渠", "id" : "wujiaqu" }
								], "id" : "xinjiang" },
	
				{ "province" : "甘肃", "city" : [	{ "name" : "兰州", "id" : "lanzhou" },
									{ "name" : "嘉峪关", "id" : "jiayuguan" }, 
									{ "name" : "金昌", "id" : "jinchang" },
									{ "name" : "白银", "id" : "baiyin" },
									{ "name" : "天水", "id" : "tianshui" },
									{ "name" : "武威", "id" : "wuwei" },
									{ "name" : "张掖", "id" : "zhangye" },
									{ "name" : "平凉", "id" : "pingliang" },
									{ "name" : "酒泉", "id" : "jiuquan" },
									{ "name" : "庆阳", "id" : "qingyang" },
									{ "name" : "定西", "id" : "dingxi" },
									{ "name" : "陇南", "id" : "longnan" },
									{ "name" : "临夏", "id" : "linxia" },
									{ "name" : "甘南", "id" : "gannan" }
								], "id" : "gansu" },
	
				{ "province" : "宁夏", "city" : [	{ "name" : "银川", "id" : "yinchuan" },
									{ "name" : "石嘴山", "id" : "shizuishan" }, 
									{ "name" : "吴忠", "id" : "wuzhong" },
									{ "name" : "固原", "id" : "guyuan" },
									{ "name" : "中卫", "id" : "zhongwei" }
								], "id" : "ningxia" },
	
				{ "province" : "青海", "city" : [	{ "name" : "西宁", "id" : "xining" },
									{ "name" : "海东", "id" : "haidong" }, 
									{ "name" : "海北", "id" : "haibei" },
									{ "name" : "黄南", "id" : "huangnan" },
									{ "name" : "海南藏族", "id" : "hainanzang" }, 
									{ "name" : "果洛", "id" : "guoluo" },
									{ "name" : "玉树", "id" : "yushuqing" },
									{ "name" : "海西", "id" : "haixi" }
								], "id" : "qinghai" }
	
				 ], 
			"id" : "northwest" },
	
		{       "region" : "西南", 
			"pac" : [   	{ "province" : "重庆", "city" : [{ "name" : "重庆", "id" : "chongqingitem" }], "id" : "chongqing" },
	
					{ "province" : "云南", "city" : [	{ "name" : "昆明", "id" : "kunming" },
										{ "name" : "曲靖", "id" : "qujing" }, 
										{ "name" : "玉溪", "id" : "yuxi" },
										{ "name" : "保山", "id" : "baoshan" },
										{ "name" : "昭通", "id" : "zhaotong" },
										{ "name" : "丽江", "id" : "lijiang" },
										{ "name" : "普洱", "id" : "puer" },
										{ "name" : "临沧", "id" : "lincang" },
										{ "name" : "楚雄", "id" : "chuxiong" },
										{ "name" : "红河", "id" : "honghe" },
										{ "name" : "文山", "id" : "wenshan" },
										{ "name" : "西双版纳", "id" : "xishuang" },
										{ "name" : "大理", "id" : "dali" },
										{ "name" : "德宏", "id" : "dehong" },
										{ "name" : "怒江", "id" : "nujiang" },
										{ "name" : "迪庆", "id" : "diqing" }
									], "id" : "yunnan" },
	
					{ "province" : "贵州", "city" : [	{ "name" : "贵阳", "id" : "guiyang" },
										{ "name" : "六盘水", "id" : "liupanshui" }, 
										{ "name" : "遵义", "id" : "zunyi" },
										{ "name" : "安顺", "id" : "anshun" },
										{ "name" : "铜仁", "id" : "tongren" },
										{ "name" : "黔西南", "id" : "qianxinan" },
										{ "name" : "毕节", "id" : "bijie" },
										{ "name" : "黔东南", "id" : "qiandongnan" },
										{ "name" : "黔南", "id" : "qiannan" }
									], "id" : "guizhou" },
	
					{ "province" : "西藏", "city" : [	{ "name" : "拉萨", "id" : "lasa" },
										{ "name" : "昌都", "id" : "changdu" }, 
										{ "name" : "山南", "id" : "shannan" },
										{ "name" : "日喀则", "id" : "rikaze" },
										{ "name" : "那曲", "id" : "naqu" },
										{ "name" : "阿里", "id" : "ali" },
										{ "name" : "林芝", "id" : "linzhi" }
									], "id" : "xizang" },
	
					{ "province" : "四川", "city" : [	{ "name" : "成都", "id" : "chengdu" },
										{ "name" : "自贡", "id" : "zigong" }, 
										{ "name" : "攀枝花", "id" : "panzhihua" },
										{ "name" : "泸州", "id" : "luzhou" },
										{ "name" : "德阳", "id" : "deyang" }, 
										{ "name" : "绵阳", "id" : "mianyang" },
										{ "name" : "广元", "id" : "guangyuan" },
										{ "name" : "遂宁", "id" : "suining" },
										{ "name" : "内江", "id" : "neijiang" }, 
										{ "name" : "乐山", "id" : "leshan" },
										{ "name" : "南充", "id" : "nanchong" },
										{ "name" : "眉山", "id" : "meishan" }, 
										{ "name" : "宜宾", "id" : "yibin" },
										{ "name" : "广安", "id" : "guangan" },
										{ "name" : "达州", "id" : "dazhou" }, 
										{ "name" : "雅安", "id" : "yaan" },
										{ "name" : "巴中", "id" : "bazhong" },
										{ "name" : "资阳", "id" : "ziyang" }, 
										{ "name" : "阿坝", "id" : "aba" },
										{ "name" : "甘孜", "id" : "ganzi" },
										{ "name" : "凉山", "id" : "liangshan" }
									], "id" : "sichuan" }
	
				 ], 
			"id" : "southwest" },
	
		{       "region" : "港澳台", 
			"pac" : [   { "province" : "香港", "city" : [{ "name" : "香港", "id" : "hkitem" }], "id" : "HK" },
	
			  	    { "province" : "澳门", "city" : [{ "name" : "澳门", "id" : "macaoitem" }], "id" : "Macao" },
	
			 	    { "province" : "台湾", "city" : [{ "name" : "台湾", "id" : "taiwanitem" }], "id" : "Taiwan" }
				 ], 
			"id" : "HKMacaoTaiwan" },
	
		{	"region" : "全国",
			"pac" : [   { "province" : "全国", "city" : [{ "name" : "", "id" : "" }], "id" : "allCities" } ],
			"id" : "allCities"}
	]; 
	var oRegion = document.getElementById("region");
	for (var i = 0; i < provinceAndCity.length; i++) {
		var region = provinceAndCity[i].region;
		var regionID = provinceAndCity[i].id;
		var arrProvince = provinceAndCity[i].pac;

		var oRegionLi = document.createElement("li");

		var oRegionDiv = document.createElement("div");
		oRegionDiv.className = "form-group ";

		var oRegionInput = document.createElement("input");
		oRegionInput.setAttribute("type", "checkbox");
		oRegionInput.setAttribute("id", regionID);
		oRegionDiv.appendChild(oRegionInput);

		var oRegionLabel = document.createElement("label");
		oRegionLabel.innerHTML = region;
		oRegionLabel.setAttribute("for", regionID);
		oRegionDiv.appendChild(oRegionLabel);

		var oRegionChildDiv = document.createElement("div");
		oRegionChildDiv.className = "provinceDiv";

		var oRegionUl = document.createElement("ul");
		oRegionUl.className = "areaList";

		for (var j = 0; j < arrProvince.length; j++) {
			var province = arrProvince[j].province;
			var provinceID = arrProvince[j].id;
			var arrCity = arrProvince[j].city;

			var oProvinceLi = document.createElement("li");
			oProvinceLi.className = "province";

			var oProvinceInput = document.createElement("input");
			oProvinceInput.setAttribute("type", "checkbox");
			oProvinceInput.setAttribute("id", provinceID);
			oProvinceLi.appendChild(oProvinceInput);

			var oProvinceLabel = document.createElement("label");
			oProvinceLabel.innerHTML = province;
			oProvinceLabel.setAttribute("for", provinceID);
			oProvinceLi.appendChild(oProvinceLabel);

			var oProvinceButton = document.createElement("button");
			oProvinceButton.setAttribute("type", "button");
			oProvinceButton.className = "glyphicon glyphicon-triangle-bottom";
			oProvinceButton.setAttribute("onclick", "showCity(this)");
			oProvinceLi.appendChild(oProvinceButton);

			var oProvinceDiv = document.createElement("div");
			oProvinceDiv.className = "form-group itembox hideItembox";

			var oProvinceUl = document.createElement("ul");
			oProvinceUl.className = "areaList";
			for (var k = 0; k < arrCity.length; k++) {
				var cityName = arrCity[k].name;
				var cityID = arrCity[k].id;

				var oLocationLi = document.createElement("li");

				var oLocationInput = document.createElement("input");
				oLocationInput.setAttribute("type", "checkbox");
				oLocationInput.setAttribute("id", cityID);
				oLocationLi.appendChild(oLocationInput);

				var oLocationLabel = document.createElement("label");
				oLocationLabel.setAttribute("for", cityID);
				oLocationLabel.innerHTML = cityName;
				oLocationLi.appendChild(oLocationLabel);

				oProvinceUl.appendChild(oLocationLi);
			}

			oProvinceDiv.appendChild(oProvinceUl);
			oProvinceLi.appendChild(oProvinceDiv);

			oRegionUl.appendChild(oProvinceLi);
		}

		oRegionChildDiv.appendChild(oRegionUl);

		oRegionDiv.appendChild(oRegionChildDiv);

		oRegionLi.appendChild(oRegionDiv);

		oRegion.appendChild(oRegionLi);
	}
}
})(jQuery);
