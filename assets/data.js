/* 作品数据：所有作品以案件线索形式呈现。
   新增作品只需追加一条，首页画廊与详情页自动生成。 */
window.WORKS = [
  {
    id: "short-drama-01", no: "01", title: "无声的回响", subtitle: "短剧剪辑",
    category: "SHORT DRAMA", year: "2026", type: "video",
    tone: "kraft-a", embed: "", image: "",
    role: "剪辑 · 调色 · 声音设计", tools: "Premiere Pro · DaVinci Resolve · 剪映",
    note: "关键证物：情绪线散落，需重组时间线。",
    intro: "一部关于记忆与告别的情绪短剧。通过碎裂的时间线与克制的镜头组接，让沉默本身成为叙事的一部分。",
    challenge: "原素材拍摄周期长、素材量庞大，人物情绪线分散。需要在有限片长内建立清晰的因果与情感递进。",
    approach: "以声音先行的剪辑思路重构节奏，先搭声音骨架再铺画面；用颜色区分现实与回忆两条时空，冷调处理回忆段落。",
    result: "成片节奏紧凑、情绪层层递进，完成了从散素材到完整叙事的转化，展示了在叙事型剪辑上的把控能力。"
  },
  {
    id: "commercial-01", no: "02", title: "晨光计划", subtitle: "品牌广告片",
    category: "COMMERCIAL", year: "2026", type: "video",
    tone: "kraft-b", embed: "", image: "",
    role: "剪辑 · 包装", tools: "Premiere Pro · After Effects · 剪映",
    note: "证物备注：30 秒内锁定品牌调性。",
    intro: "一支以「新一天的起点」为主题的生活方式品牌广告，强调明亮、干净的视觉节奏。",
    challenge: "需要在 30 秒内建立品牌调性，同时保留产品细节与情绪温度。",
    approach: "采用递进式剪辑，从清晨的微光推到完整场景，配合节拍点做卡点转场，强化记忆点。",
    result: "成片节奏明快、画面通透，信息传达清晰，适配社交媒体与线下投放多种场景。"
  },
  {
    id: "commercial-02", no: "03", title: "城市的另一面", subtitle: "形象广告片",
    category: "COMMERCIAL", year: "2024", type: "video",
    tone: "kraft-c", embed: "", image: "",
    role: "剪辑 · 调色", tools: "DaVinci Resolve · Premiere Pro",
    note: "证物备注：多源素材，统一视觉语言。",
    intro: "城市形象宣传片，用快切与延时展现城市从清晨到夜晚的流动与活力。",
    challenge: "素材来源多样，风格不统一，需要建立一致的视觉语言。",
    approach: "统一调色风格，用速度曲线与匹配剪辑串接不同场景，形成连贯的时间流动感。",
    result: "不同来源的素材被整合为统一气质的成片，节奏富有呼吸感。"
  },
  {
    id: "commercial-03", no: "04", title: "一杯的温度", subtitle: "产品广告片",
    category: "COMMERCIAL", year: "2024", type: "video",
    tone: "kraft-a", embed: "", image: "",
    role: "剪辑 · 字幕包装", tools: "剪映 · Photoshop · Premiere Pro",
    note: "证物备注：前三秒必须抓住注意力。",
    intro: "饮品品牌短视频广告，以特写与节奏传达产品的质感与温度。",
    challenge: "短视频平台需要前三秒强钩子，同时信息密度要高。",
    approach: "用高密度特写快速建立质感，配合简洁字幕强化卖点，结尾留品牌记忆点。",
    result: "适合竖屏传播的成片，节奏与信息密度适配短视频平台观看习惯。"
  },
  {
    id: "mashup-01", no: "05", title: "光影混剪 Vol.1", subtitle: "混剪视频",
    category: "MASHUP", year: "2026", type: "video",
    tone: "kraft-b", embed: "", image: "",
    role: "剪辑 · 节奏设计", tools: "Premiere Pro · 剪映",
    note: "证物备注：以光线方向作为匹配剪辑依据。",
    intro: "以光影为主题的电影感混剪，用节奏与声音卡点串联多个片段。",
    challenge: "不同影片素材色调与构图差异大。",
    approach: "以光线方向作为匹配剪辑的依据，配合音乐节拍构建节奏曲线。",
    result: "画面流畅统一，形成强烈的视听冲击。"
  },
  {
    id: "mashup-02", no: "06", title: "色彩狂想", subtitle: "混剪视频",
    category: "MASHUP", year: "2026", type: "video",
    tone: "kraft-c", embed: "", image: "",
    role: "剪辑 · 调色", tools: "DaVinci Resolve · Premiere Pro",
    note: "证物备注：以色彩区块组织段落。",
    intro: "以色彩情绪为主线的混剪实验，通过色调推进情绪。",
    challenge: "需要在无叙事的情况下维持观看兴趣。",
    approach: "以色彩区块组织段落，用节奏与转场制造起伏。",
    result: "形成了有情绪曲线的视听作品。"
  },
  {
    id: "mashup-03", no: "07", title: "城市脉搏", subtitle: "混剪视频",
    category: "MASHUP", year: "2024", type: "video",
    tone: "kraft-a", embed: "", image: "",
    role: "剪辑", tools: "剪映 · Premiere Pro",
    note: "证物备注：鼓点为锚，镜头成组。",
    intro: "城市题材快节奏混剪，展现都市生活的律动。",
    challenge: "镜头数量多，节奏容易失控。",
    approach: "以鼓点为锚点组织镜头群组，张弛有度。",
    result: "节奏清晰、富有感染力的混剪成片。"
  },
  {
    id: "mashup-04", no: "08", title: "瞬间集锦", subtitle: "混剪视频",
    category: "MASHUP", year: "2024", type: "video",
    tone: "kraft-b", embed: "", image: "",
    role: "剪辑 · 包装", tools: "Premiere Pro · Photoshop",
    note: "证物备注：以情绪共鸣为线索筛选。",
    intro: "生活中的闪光瞬间合集，温暖而轻快。",
    challenge: "素材风格随意，缺乏统一主题。",
    approach: "以「情绪共鸣」为线索筛选片段，统一字幕与包装风格。",
    result: "碎片化素材被组织成有温度的整体。"
  },
  {
    id: "mashup-05", no: "09", title: "帧间诗", subtitle: "混剪视频",
    category: "MASHUP", year: "2023", type: "video",
    tone: "kraft-c", embed: "", image: "",
    role: "剪辑 · 调色", tools: "DaVinci Resolve · 剪映",
    note: "证物备注：慢节奏下的流动感。",
    intro: "偏抒情的慢节奏混剪，探索画面之间的诗意连接。",
    challenge: "慢节奏下如何避免拖沓。",
    approach: "用细腻的转场与声音设计维持画面流动感。",
    result: "安静而有韵味的抒情混剪。"
  },
  {
    id: "graphic-01", no: "10", title: "一叶毛尖 · 寻迹豫南", subtitle: "信息可视化设计",
    category: "GRAPHIC DESIGN", year: "2026", type: "image",
    tone: "kraft-a", embed: "",
    image: "assets/images/graphic-01.png",
    role: "信息设计 · 数据可视化", tools: "Photoshop · Illustrator",
    note: "证物备注：以信阳毛尖的产地、产业与文化为线索。",
    intro: "以信阳毛尖茶为主题的信息可视化研究，围绕产地生境、产茶优势、产业收入、传统制作工艺与文创衍生等维度，将繁杂的调研数据转化为一张直观可读的信息图谱。",
    challenge: "信息维度多、数据繁杂，需要在单一画面中兼顾学术严谨性与视觉可读性。",
    approach: "以「寻茶之路」为视觉动线，用圆形构图串联地图、桑基图、雷达图与摄影素材，统一的绿色系呼应茶叶主题，模块化网格组织各信息板块。",
    result: "形成一张层次清晰、叙事连贯的信息图谱，让观众快速读懂信阳毛尖的产业全貌与地域特色。"
  },
  {
    id: "graphic-02", no: "11", title: "巷陌寻踪 · 漫游平江", subtitle: "用户调研与空间分析",
    category: "GRAPHIC DESIGN", year: "2026", type: "image",
    tone: "kraft-b", embed: "",
    image: "assets/images/graphic-02.png",
    role: "调研分析 · 信息设计", tools: "Photoshop · Illustrator · Figma",
    note: "证物备注：以游客需求与街区问题为双线。",
    intro: "以平江路历史街区为对象的调研分析海报，围绕不同游客需求、街区文化特质、游览路线问题、休憩服务问题与文化节点发展问题展开系统梳理。",
    challenge: "调研信息量大，游客画像、空间问题与文化节点等线索分散，难以形成一眼可读的结论。",
    approach: "以「游踪」为叙事线索，将地图标注、用户画像、问题清单与实景照片编织为统一版面结构，用薄荷绿与砖红区分信息层级。",
    result: "将零散的田野调研转化为结构清晰的分析图，为后续的空间设计策略提供依据。"
  },
  {
    id: "graphic-03", no: "12", title: "水巷寻游 · 平江路", subtitle: "导视系统与服务设计",
    category: "GRAPHIC DESIGN", year: "2026", type: "image",
    tone: "kraft-c", embed: "",
    image: "assets/images/graphic-03.png",
    role: "视觉设计 · 导视规划", tools: "Figma · Photoshop · Illustrator",
    note: "证物备注：线上线下一体化的游览导览。",
    intro: "面向平江路历史街区的导视系统设计，整合线上线下导览、智能导航与文旅联动，构建从数字地图、交互导览到街巷指引与文化内容载体的完整游览体验。",
    challenge: "历史街区空间复杂，传统导视难以兼顾年轻游客的数字使用习惯，信息层级需要重新组织。",
    approach: "以「水巷」的流动感为视觉线索，统一青绿与暖橙的配色；将智能导览 App、二维码寻访、分级导视牌与街巷地图纳入同一套视觉系统。",
    result: "形成从数字界面到线下导视的完整方案，提升了街区的游览体验与文化传达效率。"
  }
];
