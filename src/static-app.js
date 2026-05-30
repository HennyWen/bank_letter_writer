const customers = [
  {
    id: "rubber-mother",
    name: "林阿顺",
    role: "胶园割胶工",
    origin: "新加坡外埠胶园",
    destination: "福建泉州安溪县湖头乡",
    payment: 7,
    urgency: 62,
    patience: 88,
    complexity: 2,
    letterType: "家书兼汇款",
    audioText:
      "先生，替我写给安溪湖头的老母亲。讲我在新加坡胶园还平安，番批里夹十六元家用银，叫她收了先买米。工钱虽被账房扣了些，这句勿写，免得老人家忧心。再讲船期是五月二十八，若迟到也莫惊。",
    promptHint: "他要寄家用银，也想隐瞒工钱被扣。",
    askAnswer: "他补充：收信人写林陈氏，托堂兄林耀宗代收。",
    required: [
      rule("收信人林陈氏", ["林陈氏", "母亲", "老母"], 16, "写明了老母亲或林陈氏。"),
      rule("安溪湖头", ["安溪", "湖头"], 12, "籍贯村名无误。"),
      rule("十六元家用银", ["十六", "16", "家用", "买米"], 18, "家用银数目和用途清楚。"),
      rule("平安近况", ["平安", "安好", "无恙"], 12, "报平安的意思到位。"),
      rule("五月二十八船期", ["五月二十八", "5月28", "船期"], 10, "船期交代清楚。"),
    ],
    forbidden: [
      rule("工钱被扣", ["工钱被扣", "扣工钱", "账房扣"], 14, "不该把工钱被扣写给母亲。"),
      rule("境况凄惨", ["苦死", "活不下去", "病重"], 10, "语气太沉，会让家中担心。"),
    ],
    toneTerms: ["母亲大人", "勿念", "安心", "保重", "儿不孝"],
    formatTerms: ["敬禀", "叩禀", "儿", "谨启", "家书"],
    successEvent: "老母收到番批后托人回信，说米已买下，只盼儿子保重。",
    failureEvent: "信里露出工钱被扣，家中急得四处借船费，想派人来南洋寻他。",
  },
  {
    id: "tin-field",
    name: "郑添水",
    role: "锡矿工人",
    origin: "霹雳近打锡矿",
    destination: "广东梅县松口镇",
    payment: 8,
    urgency: 70,
    patience: 82,
    complexity: 3,
    letterType: "托付信",
    audioText:
      "我在近打矿场三年未归，替我写给二弟添福。田千万不要卖，父亲坟前清明要有人看。矿上辛苦这话少写，免得他讲我在外头怨天怨地。另寄二十四元，先还去年买种子的债。",
    promptHint: "他要保住家中田地，并托二弟照顾祖坟。",
    askAnswer: "他补充：二弟全名郑添福，二十四元交给族叔郑树仁作见证。",
    required: [
      rule("二弟郑添福", ["郑添福", "二弟", "添福"], 14, "收信对象写对。"),
      rule("不要卖田", ["不要卖田", "勿卖田", "田不可卖", "保住田"], 18, "保住田地的托付明确。"),
      rule("清明祭扫", ["清明", "父亲坟", "祭扫", "坟前"], 12, "照看祖坟的托付写入信中。"),
      rule("二十四元还债", ["二十四", "24", "买种子", "还债"], 18, "还债金额和用途准确。"),
    ],
    forbidden: [rule("怨气太重", ["怨", "恨", "不认", "断绝"], 12, "语气过冲，像是在责怪家人。")],
    toneTerms: ["商量", "切记", "望弟", "家业", "体谅"],
    formatTerms: ["弟", "兄", "谨启", "托付"],
    successEvent: "郑添福托人回话，田暂不卖，债也先压下了。",
    failureEvent: "二弟误以为兄长责怪全家，回信语气冷硬，家里卖田的事又被提起。",
  },
  {
    id: "redeem-daughter",
    name: "黄水伯",
    role: "汇款赎女的父亲",
    origin: "吧生码头苦力栈",
    destination: "广东潮州澄海莲下乡",
    payment: 10,
    urgency: 94,
    patience: 72,
    complexity: 5,
    letterType: "急信兼汇款",
    audioText:
      "求你写快些。寄四十八元回澄海莲下，给我妻阿玉，叫她同族叔黄培坤去把小女阿桃赎回来。前年欠债，孩子被押去张家做童养媳，期限到六月初三。话要重，但不可骂族里，不然他们更不肯放人。写清楚，莫再拖。",
    promptHint: "他要汇款赎回女儿，期限很紧，语气要急但不能失礼。",
    askAnswer: "他补充：女儿名黄阿桃，钱交妻子阿玉，族叔黄培坤陪同去张家。",
    required: [
      rule("赎回黄阿桃", ["黄阿桃", "阿桃", "小女", "赎回"], 20, "赎回对象写清楚。"),
      rule("四十八元", ["四十八", "48"], 18, "赎女银数目准确。"),
      rule("交给妻阿玉", ["阿玉", "妻", "内人"], 14, "收款人没有写错。"),
      rule("族叔黄培坤", ["黄培坤", "族叔"], 14, "陪同交涉的人写明了。"),
      rule("六月初三期限", ["六月初三", "6月初3", "期限"], 14, "期限交代清楚。"),
    ],
    forbidden: [
      rule("辱骂宗族", ["骂", "无耻", "断亲", "报官"], 14, "措辞太冲，可能激怒族亲或债主。"),
      rule("语气太软", ["慢慢", "不急", "有空"], 10, "这封信不能写得像可拖延的小事。"),
    ],
    toneTerms: ["务必", "恳请", "切勿拖延", "有礼", "周全", "莫伤和气"],
    formatTerms: ["急信", "汇款", "妻", "族叔", "谨启"],
    successEvent: "阿玉带着族叔赶在六月初三前赎回阿桃，回批里只有一句：孩子已回家。",
    failureEvent: "金额或期限含糊，张家借故拖延，赎回事宜未成。",
  },
  {
    id: "mother-medicine",
    name: "陈其亮",
    role: "寄医药费的儿子",
    origin: "泗水米行后巷",
    destination: "福建漳州龙溪县石码",
    payment: 9,
    urgency: 88,
    patience: 80,
    complexity: 4,
    letterType: "家书兼医药费",
    audioText:
      "写给大嫂陈许氏，银三十二元，先请石码林郎中给我娘看病，余下买参片和米。叫大嫂多看顾，账记清。不要写我在米行睡货仓，也不要讲我咳了半月，我娘听了会更病。话要孝顺些，我多年未归，心里亏。",
    promptHint: "他寄医药费给母亲，但不想让家里知道自己也病着。",
    askAnswer: "他补充：母亲叫陈林氏，大嫂陈许氏管家，郎中姓林。",
    required: [
      rule("三十二元医药费", ["三十二", "32", "医药", "药费"], 18, "医药费金额和用途写明。"),
      rule("陈许氏收款", ["陈许氏", "大嫂"], 14, "收款照料人写对。"),
      rule("请林郎中", ["林郎中", "郎中", "看病"], 14, "请郎中看病的安排明确。"),
      rule("买参片和米", ["参片", "买米", "米"], 12, "余款用途交代清楚。"),
      rule("照看母亲", ["照看", "看顾", "母亲", "陈林氏"], 14, "托人照料母亲的意思完整。"),
    ],
    forbidden: [
      rule("自己咳病", ["咳", "病了", "货仓", "睡货仓"], 14, "不该透露他自己的困窘病况。"),
      rule("过度悲伤", ["恐怕见不到", "命苦", "哭", "绝望"], 10, "语气太悲，可能加重家中忧虑。"),
    ],
    toneTerms: ["母亲", "大嫂费心", "不孝", "保重", "安心", "调养"],
    formatTerms: ["家书", "大嫂", "儿", "谨启"],
    successEvent: "大嫂回信说已请郎中，母亲病势稍缓。",
    failureEvent: "信中漏了照料安排，银钱被拿去先还杂账，母亲迟了几日才请医。",
  },
  {
    id: "shop-clerk",
    name: "谢文昌",
    role: "小商号伙计",
    origin: "槟城杂货商号",
    destination: "广东台山端芬乡",
    payment: 8,
    urgency: 58,
    patience: 90,
    complexity: 3,
    letterType: "商信兼家书",
    audioText:
      "给我妻秀娘写。商号今年账慢，但不是亏空，叫她莫听乡里闲话。我寄二十元，十五元作家用，五元还给三叔。另说端午前若有船，我再寄布匹回去。语气要体面些，别像我在外头失了脸。",
    promptHint: "他需要体面地说明生意不顺，同时安排家用和还款。",
    askAnswer: "他补充：妻子名谢林秀娘，三叔叫谢广源。",
    required: [
      rule("妻子秀娘", ["秀娘", "妻", "谢林秀娘"], 14, "收信对象写对。"),
      rule("二十元分配", ["二十", "20", "十五", "五元"], 18, "银钱分配清楚。"),
      rule("家用与还三叔", ["家用", "三叔", "谢广源", "还"], 16, "家用和还款都写到了。"),
      rule("端午船期布匹", ["端午", "船", "布匹"], 12, "后续寄布匹的安排明确。"),
    ],
    forbidden: [rule("承认亏空", ["亏空", "破产", "败了"], 12, "不该把账慢写成亏空。")],
    toneTerms: ["勿听闲话", "尚可周转", "体面", "放心", "料理家中"],
    formatTerms: ["妻", "家用", "商号", "谨启"],
    successEvent: "秀娘把银钱分清，乡里闲话也暂时压下。",
    failureEvent: "信写得像商号亏败，家中开始变卖嫁妆防荒。",
  },
  {
    id: "new-coolie",
    name: "罗阿根",
    role: "新到南洋的年轻苦力",
    origin: "新加坡牛车水",
    destination: "福建永春五里街",
    payment: 5,
    urgency: 52,
    patience: 95,
    complexity: 2,
    letterType: "初到家书",
    audioText:
      "我第一次写番批，给阿爹阿娘。讲我已经到新加坡牛车水，跟同乡住，活计还在找。不要写我头两夜睡骑楼，也不要写我想哭。就说这里热闹，等领工钱就寄回家。叫妹妹阿兰读书莫停。",
    promptHint: "他第一次寄信，想报平安，也想鼓励妹妹继续读书。",
    askAnswer: "他补充：妹妹叫罗阿兰，家里在永春五里街溪边厝。",
    required: [
      rule("到达新加坡牛车水", ["新加坡", "牛车水", "到了"], 14, "到达地点写清楚。"),
      rule("跟同乡住", ["同乡", "住"], 10, "近况交代了。"),
      rule("等工钱寄回", ["工钱", "寄回", "家用"], 12, "后续寄钱承诺明确。"),
      rule("阿兰读书", ["阿兰", "读书", "莫停", "不要停"], 14, "妹妹读书的托付写到了。"),
    ],
    forbidden: [rule("露宿想哭", ["骑楼", "想哭", "露宿"], 12, "写出狼狈处会吓到家人。")],
    toneTerms: ["平安", "勿念", "热闹", "放心", "努力"],
    formatTerms: ["阿爹", "阿娘", "儿", "家书"],
    successEvent: "家中回信说阿兰还在学堂，父母只叫他稳住脚跟。",
    failureEvent: "父母得知他露宿，急着向亲戚借钱要他回乡。",
  },
  {
    id: "proxy-letter",
    name: "吴妈姐",
    role: "替同乡寄信的人",
    origin: "新加坡码头边",
    destination: "福建晋江安海",
    payment: 6,
    urgency: 76,
    patience: 76,
    complexity: 4,
    letterType: "代托信",
    audioText:
      "我是替隔壁阿珍来的，她男人在船上未返。她叫我写给晋江安海婆家，说这月寄十二元，先给孩子买药，再还米铺账。哎，孩子名字我一时想不起，像叫水生？你最好问我一句。",
    promptHint: "她是代别人来寄信，关键信息有缺口。",
    askAnswer: "她想起来了：孩子叫许水生，婆家收信人是许黄氏。",
    required: [
      rule("阿珍托寄", ["阿珍", "代", "托"], 12, "代托关系写清楚。"),
      rule("许黄氏收信", ["许黄氏", "婆家"], 14, "婆家收信人写对。"),
      rule("十二元", ["十二", "12"], 14, "汇款数目准确。"),
      rule("许水生买药", ["许水生", "水生", "买药", "孩子"], 18, "孩子姓名和医药用途写清楚。"),
      rule("还米铺账", ["米铺", "还账", "米账"], 10, "米铺账也交代了。"),
    ],
    forbidden: [rule("写成自己寄信", ["我吴妈姐", "吴妈姐寄"], 10, "不能把代托信写成她自己的家书。")],
    toneTerms: ["代禀", "托付", "照看", "孩子", "周全"],
    formatTerms: ["代", "婆家", "谨启", "托"],
    successEvent: "阿珍知道孩子姓名没写错，隔日送来一包茶叶答谢。",
    failureEvent: "孩子姓名含糊，婆家误把药钱先拿去还账。",
  },
  {
    id: "guild-donation",
    name: "许敬堂",
    role: "会馆商会中人",
    origin: "槟城福建会馆",
    destination: "福建南安诗山",
    payment: 12,
    urgency: 60,
    patience: 86,
    complexity: 4,
    letterType: "会馆公信",
    audioText:
      "写给南安诗山族长。槟城福建会馆募得一百二十元，助修义学，不是修祠堂。请族长会同乡绅立账，秋后把收支明细回批。称谓要庄重，莫写成寻常家书。",
    promptHint: "这是一封正式公信，关系到义学捐资。",
    askAnswer: "他补充：族长名许瑞章，回批寄槟城福建会馆账房。",
    required: [
      rule("族长许瑞章", ["许瑞章", "族长"], 14, "正式收信人写对。"),
      rule("一百二十元", ["一百二十", "120"], 18, "捐资金额准确。"),
      rule("助修义学", ["义学", "学堂"], 18, "用途写成义学。"),
      rule("立账回批", ["立账", "收支", "回批", "明细"], 14, "账目与回批要求明确。"),
    ],
    forbidden: [
      rule("写成修祠", ["修祠", "祠堂"], 16, "用途不能写成修祠堂。"),
      rule("家书口吻", ["阿爹", "阿娘", "儿"], 8, "公信不能用家书口吻。"),
    ],
    toneTerms: ["敬启", "会同", "乡绅", "谨具", "公议", "查照"],
    formatTerms: ["公信", "会馆", "族长", "敬启", "账房"],
    successEvent: "诗山来批称义学账目已立，银信局声誉上升。",
    failureEvent: "用途写错，族中争执捐银该修祠还是办学。",
  },
  {
    id: "secret-debt",
    name: "梁七",
    role: "秘密高风险来客",
    origin: "吧生河边栈房",
    destination: "广东顺德龙江",
    payment: 14,
    urgency: 82,
    patience: 68,
    complexity: 5,
    letterType: "隐晦急信",
    audioText:
      "这信写给我大哥梁德成。不要明写我逃了工棚，也不要写帮会两个字。只说我换了东家，旧账三十元请他先同陈掌柜周旋，莫让家里签卖地契。若有人问，就说我是寄平安信。",
    promptHint: "内容涉及逃工和债务，需要隐晦表达。",
    askAnswer: "他补充：陈掌柜在龙江东市口，旧账三十元先求缓一个月。",
    required: [
      rule("大哥梁德成", ["梁德成", "大哥"], 14, "收信对象写对。"),
      rule("换了东家", ["换了东家", "另谋活计", "改投别处"], 14, "用隐晦方式交代处境。"),
      rule("旧账三十元", ["三十", "30", "旧账"], 16, "旧账金额准确。"),
      rule("陈掌柜周旋", ["陈掌柜", "周旋", "缓一个月"], 16, "周旋对象和要求明确。"),
      rule("不要卖地契", ["地契", "卖地", "莫卖"], 14, "保住地契的请求写清。"),
    ],
    forbidden: [
      rule("逃工直写", ["逃工", "逃了", "工棚"], 16, "直写逃工会惹来追查。"),
      rule("帮会直写", ["帮会", "私会", "黑账"], 14, "敏感词太直白，风险很高。"),
    ],
    toneTerms: ["平安", "周旋", "缓", "勿惊", "暂且"],
    formatTerms: ["大哥", "谨启", "平安信"],
    successEvent: "梁德成回批说旧账暂缓，家中地契保住了。",
    failureEvent: "信里露出逃工字眼，陈掌柜的人先一步找到了梁家。",
  },
];

function rule(label, terms, weight, feedback) {
  return { label, terms, weight, feedback };
}

const daySeconds = 9 * 60;
const assetStorageKey = "yin-xin-placeholder-assets";
let state = createInitialState();
let timer = null;

function loadAssetConfig() {
  try {
    return JSON.parse(localStorage.getItem(assetStorageKey) || "{}");
  } catch (error) {
    return {};
  }
}

function saveAssetConfig(config) {
  localStorage.setItem(assetStorageKey, JSON.stringify(config));
}

function createInitialState() {
  return {
    queue: customers.map((customer) => ({ ...customer })),
    currentIndex: 0,
    dayTime: daySeconds,
    customerTime: 0,
    letter: "",
    money: 0,
    reputation: 52,
    isPlaying: false,
    hasListened: false,
    isPaperOpen: false,
    hasAsked: false,
    lastResult: null,
    completed: [],
    departed: [],
    isDayEnded: false,
    isAssetToolOpen: false,
    assetConfig: loadAssetConfig(),
  };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function normalize(text) {
  return text.toLowerCase().replace(/\s/g, "");
}

function hasAny(text, terms) {
  return terms.some((term) => text.includes(term.toLowerCase()));
}

function evaluateLetter(customer, letter, secondsUsed) {
  const text = normalize(letter);
  const maxFact = customer.required.reduce((sum, item) => sum + item.weight, 0);
  let factPoints = 0;
  let forbiddenPenalty = 0;
  const positive = [];
  const negative = [];

  customer.required.forEach((item) => {
    if (hasAny(text, item.terms)) {
      factPoints += item.weight;
      positive.push(item.feedback);
    } else {
      negative.push(`漏写：${item.label}`);
    }
  });

  customer.forbidden.forEach((item) => {
    if (hasAny(text, item.terms)) {
      forbiddenPenalty += item.weight;
      negative.push(item.feedback);
    }
  });

  const factScore = clamp(Math.round((factPoints / maxFact) * 100 - forbiddenPenalty), 0, 100);
  const intentScore = clamp(Math.round((factPoints / maxFact) * 88 + (negative.length === 0 ? 12 : 0)), 0, 100);
  const toneHits = customer.toneTerms.filter((term) => text.includes(term.toLowerCase())).length;
  const toneScore = clamp(46 + toneHits * 14 - forbiddenPenalty, 0, 100);
  const formatHits = customer.formatTerms.filter((term) => text.includes(term.toLowerCase())).length;
  const formatScore = clamp(42 + formatHits * 14, 0, 100);
  const idealSeconds = 68 + customer.complexity * 18;
  const timePenalty = clamp(Math.round(Math.max(0, secondsUsed - idealSeconds) / 8), 0, 16);
  const finalScore = clamp(
    Math.round(factScore * 0.42 + intentScore * 0.24 + toneScore * 0.18 + formatScore * 0.16 - timePenalty),
    0,
    100,
  );
  const feedback = [`事实准确度 ${factScore}`, `意图符合度 ${intentScore}`, `语气匹配度 ${toneScore}`, `文体适配度 ${formatScore}`];

  if (timePenalty > 0) feedback.push(`用时偏久，扣 ${timePenalty} 分`);
  if (letter.trim().length < 48) feedback.push("信件太短，像柜台便条，不像能寄回乡里的番批。");

  return { factScore, intentScore, toneScore, formatScore, timePenalty, finalScore, feedback, positive, negative };
}

function currentCustomer() {
  return state.queue[state.currentIndex];
}

function formatClock(seconds) {
  const startHour = 8;
  const elapsedMinutes = Math.floor((daySeconds - seconds) / 6);
  const hour = startHour + Math.floor(elapsedMinutes / 60);
  const minute = elapsedMinutes % 60;
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function patienceColor(value) {
  if (value > 62) return "good";
  if (value > 32) return "warn";
  return "bad";
}

function spendTime(seconds) {
  state.dayTime = Math.max(0, state.dayTime - seconds);
  state.customerTime += seconds;
  if (state.dayTime <= 0) state.isDayEnded = true;
}

function tick() {
  if (state.isDayEnded || !currentCustomer()) return;
  state.dayTime = Math.max(0, state.dayTime - 1);
  state.customerTime += 1;

  state.queue = state.queue.filter((customer, index) => {
    if (index <= state.currentIndex) return true;
    const drain = 0.015 + customer.urgency / 9000 + customer.complexity / 260;
    customer.patience = Math.max(0, customer.patience - drain);
    if (customer.patience > 0) return true;
    state.departed.push(customer);
    state.reputation = Math.max(0, state.reputation - 3);
    return false;
  });

  if (state.dayTime <= 0) state.isDayEnded = true;
  render();
}

function playAudio() {
  if (!currentCustomer() || state.isPlaying) return;
  state.isPlaying = true;
  state.hasListened = true;
  spendTime(12);
  render();
  window.setTimeout(() => {
    state.isPlaying = false;
    render();
  }, 900);
}

function askQuestion() {
  if (!currentCustomer() || state.hasAsked) return;
  state.hasAsked = true;
  spendTime(18);
  render();
}

function submitLetter() {
  const customer = currentCustomer();
  if (!customer || state.isDayEnded) return;
  const letterBox = document.querySelector("#letterBox");
  state.letter = letterBox ? letterBox.value : state.letter;
  const evaluation = evaluateLetter(customer, state.letter, state.customerTime);
  const earned = evaluation.finalScore >= 72 ? customer.payment : Math.max(1, Math.round(customer.payment * 0.45));
  const reputationShift = evaluation.finalScore >= 82 ? 4 : evaluation.finalScore >= 62 ? 1 : -4;
  const result = { customer, letter: state.letter, evaluation, secondsUsed: state.customerTime };

  state.money += earned;
  state.reputation = clamp(state.reputation + reputationShift, 0, 100);
  state.completed.push(result);
  state.lastResult = result;
  state.letter = "";
  state.hasAsked = false;
  state.hasListened = false;
  state.isPaperOpen = false;
  state.customerTime = 0;
  state.currentIndex += 1;
  if (state.currentIndex >= state.queue.length) state.isDayEnded = true;
  render();
}

function resetDay() {
  state = createInitialState();
  startTimer();
  render();
}

function startTimer() {
  if (timer) window.clearInterval(timer);
  timer = window.setInterval(tick, 1000);
}

function icon(label) {
  return `<span class="icon">${label}</span>`;
}

function escapeAttr(value) {
  return String(value || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function getAsset(customerId, kind) {
  return state.assetConfig[customerId]?.[kind] || "";
}

function setAsset(customerId, kind, value) {
  state.assetConfig = {
    ...state.assetConfig,
    [customerId]: {
      ...(state.assetConfig[customerId] || {}),
      [kind]: value,
    },
  };
  saveAssetConfig(state.assetConfig);
  render();
}

function clearAsset(customerId, kind) {
  setAsset(customerId, kind, "");
}

function readAssetFile(customerId, kind, file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => setAsset(customerId, kind, String(reader.result || ""));
  reader.readAsDataURL(file);
}

function assetImageOrPlaceholder(customer, kind, className, label) {
  const src = getAsset(customer.id, kind);
  if (src) {
    return `<img class="${className} configured" src="${escapeAttr(src)}" alt="${escapeAttr(customer.name)} ${label}" />`;
  }
  if (kind === "npc") {
    return `
      <div class="${className}">
        <span>${customer.name.slice(0, 1)}</span>
        <small>NPC IMAGE</small>
      </div>
    `;
  }
  return `
    <div class="${className}">
      <span>${customer.name.slice(0, 1)}</span>
      <small>TOP</small>
    </div>
  `;
}

function queuePerson(customer, index, isActive) {
  const patience = Math.round(customer.patience);
  return `
    <article class="queue-person ${isActive ? "at-counter" : ""}" style="--step:${index}; --patience:${patience}%">
      <div class="queue-character">
        ${assetImageOrPlaceholder(customer, "queue", "queue-image-placeholder", "队列图")}
        <div class="queue-floor-shadow"></div>
      </div>
      <div class="queue-nameplate">
        <strong>${customer.name}</strong>
        <span>${customer.role}</span>
        ${isActive ? "<b>柜台</b>" : `<i><em></em></i>`}
      </div>
    </article>
  `;
}

function openPaper() {
  if (!currentCustomer() || !state.hasListened) return;
  state.isPaperOpen = true;
  render();
}

function toggleAssetTool() {
  state.isAssetToolOpen = !state.isAssetToolOpen;
  render();
}

function renderAssetTool() {
  if (!state.isAssetToolOpen) return "";
  return `
    <aside class="asset-tool">
      <div class="asset-tool-head">
        <div>
          <span>Placeholder 工具</span>
          <strong>图片配置</strong>
        </div>
        <button id="closeAssetTool" title="关闭">×</button>
      </div>
      <p class="asset-help">为每位客人分别配置 NPC 立绘和队列俯视图。可粘贴相对路径、绝对路径、URL，或选择本地图片存入浏览器缓存。</p>
      <div class="asset-list">
        ${customers
          .map((customer) => {
            const npcValue = getAsset(customer.id, "npc");
            const queueValue = getAsset(customer.id, "queue");
            return `
              <section class="asset-row" data-customer="${customer.id}">
                <div class="asset-person">
                  <strong>${customer.name}</strong>
                  <span>${customer.role}</span>
                </div>
                <div class="asset-fields">
                  <label>
                    <span>NPC 立绘</span>
                    <input class="asset-path" data-id="${customer.id}" data-kind="npc" value="${escapeAttr(npcValue)}" placeholder="./images/${customer.id}-npc.png" />
                  </label>
                  <div class="asset-buttons">
                    <input class="asset-file" data-id="${customer.id}" data-kind="npc" type="file" accept="image/*" />
                    <button class="asset-clear" data-id="${customer.id}" data-kind="npc">清空</button>
                  </div>
                  <label>
                    <span>队列俯视图</span>
                    <input class="asset-path" data-id="${customer.id}" data-kind="queue" value="${escapeAttr(queueValue)}" placeholder="./images/${customer.id}-top.png" />
                  </label>
                  <div class="asset-buttons">
                    <input class="asset-file" data-id="${customer.id}" data-kind="queue" type="file" accept="image/*" />
                    <button class="asset-clear" data-id="${customer.id}" data-kind="queue">清空</button>
                  </div>
                </div>
              </section>
            `;
          })
          .join("")}
      </div>
    </aside>
  `;
}

function bindAssetTool() {
  const openButton = document.querySelector("#assetToolBtn");
  if (openButton) openButton.addEventListener("click", toggleAssetTool);

  const closeButton = document.querySelector("#closeAssetTool");
  if (closeButton) closeButton.addEventListener("click", toggleAssetTool);

  document.querySelectorAll(".asset-path").forEach((input) => {
    input.addEventListener("change", (event) => {
      const target = event.target;
      setAsset(target.dataset.id, target.dataset.kind, target.value.trim());
    });
  });

  document.querySelectorAll(".asset-file").forEach((input) => {
    input.addEventListener("change", (event) => {
      const target = event.target;
      readAssetFile(target.dataset.id, target.dataset.kind, target.files?.[0]);
    });
  });

  document.querySelectorAll(".asset-clear").forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.currentTarget;
      clearAsset(target.dataset.id, target.dataset.kind);
    });
  });
}

function renderSummary(root) {
  const avgScore = state.completed.length
    ? Math.round(state.completed.reduce((sum, item) => sum + item.evaluation.finalScore, 0) / state.completed.length)
    : 0;
  root.innerHTML = `
    <main class="app summary-screen">
      <section class="summary-panel">
        <div>
          <p class="eyebrow">今日收柜</p>
          <h1>南洋埠头的船灯暗下来了</h1>
          <p class="summary-copy">你完成了 ${state.completed.length} 封番批，${state.departed.length} 位客人等不及离开。平均信件评分 ${avgScore}，今日收入 ${state.money} 元，银信局声誉 ${state.reputation}。</p>
        </div>
        <div class="summary-grid">
          ${state.completed
            .map(
              (item) => `
                <article class="result-card">
                  <span>${item.customer.role}</span>
                  <strong>${item.evaluation.finalScore}</strong>
                  <p>${item.evaluation.finalScore >= 68 ? item.customer.successEvent : item.customer.failureEvent}</p>
                </article>
              `,
            )
            .join("")}
        </div>
        ${state.departed.length > 0 ? `<p class="departed">离队：${state.departed.map((item) => item.name).join("、")}</p>` : ""}
        <button class="primary wide" id="resetBtn">${icon("↻")}重新开柜</button>
      </section>
    </main>
  `;
  document.querySelector("#resetBtn").addEventListener("click", resetDay);
}

function renderGame(root) {
  const current = currentCustomer();
  const waitingQueue = state.queue.slice(state.currentIndex + 1);
  const shipDeadline = Math.max(0, state.dayTime - 105);

  root.innerHTML = `
    <main class="app">
      <header class="topbar">
        <div class="brand">
          <span class="seal">银</span>
          <div>
            <p>南洋埠头</p>
            <h1>银信局写信员</h1>
          </div>
        </div>
        <div class="metrics">
          <div>${icon("◷")}<span>${formatClock(state.dayTime)}</span></div>
          <div>${icon("舶")}<span>船期 ${Math.ceil(shipDeadline / 60)} 分</span></div>
          <div>${icon("钱")}<span>${state.money} 元</span></div>
          <div>${icon("誉")}<span>声誉 ${state.reputation}</span></div>
          <button class="tool-toggle" id="assetToolBtn">${icon("图")}图片</button>
        </div>
      </header>

      <section class="dialogue-layout ${state.isPaperOpen ? "paper-open" : ""}">
        <aside class="queue-rail">
          <div class="panel-title">${icon("队")}<span>柜前队伍</span></div>
          <div class="queue-scene">
            <div class="counter-marker">柜台</div>
            <div class="queue-line"></div>
            ${[current, ...waitingQueue].map((customer, index) => queuePerson(customer, index, index === 0)).join("")}
          </div>
        </aside>

        <section class="dialogue-stage">
          <div class="npc-scene">
            <div class="npc-art" aria-label="NPC placeholder">
              ${assetImageOrPlaceholder(current, "npc", "portrait-placeholder", "立绘")}
              <div class="npc-shadow"></div>
            </div>
            <div class="npc-info">
              <p>${current.origin}</p>
              <h2>${current.name}</h2>
              <span>${current.role} · ${current.letterType}</span>
              <b>寄往：${current.destination}</b>
            </div>
          </div>

          <div class="audio-focus" aria-label="客人口述语音">
            <div class="speaker-line">
              <strong>${current.name}</strong>
              <span>${state.hasListened ? "语音已听取" : "等待听取口述"}</span>
            </div>
            <div class="audio-strip ${state.isPlaying ? "playing" : ""}">
              <div class="waves">
                ${Array.from(
                  { length: 56 },
                  (_, index) =>
                    `<i style="--wave-height:${18 + ((index * 13) % 38)}px; --wave-delay:${(index % 14) * 0.045}s"></i>`,
                ).join("")}
              </div>
              <button class="icon-btn" id="playBtn" title="播放语音">${icon("听")}</button>
            </div>
          </div>

          <div class="dialogue-box">
            <div class="speaker-line">
              <strong>${current.name}</strong>
              <span>${state.hasListened ? "语音已听取" : "等待听取口述"}</span>
            </div>
            <div class="spoken transcript ${state.hasListened ? "show" : ""}">
              <p>${state.hasListened ? current.audioText : "点击语音条听取客人口述。听完后，信纸才会展开。"}</p>
            </div>
            <div class="actions">
              <button id="replayBtn">${icon("↻")}重听耗时</button>
              <button id="askBtn" ${state.hasAsked ? "disabled" : ""}>${icon("?")}追问</button>
              <button class="primary" id="openPaperBtn" ${state.hasListened ? "" : "disabled"}>${icon("信")}打开信纸</button>
            </div>
            ${state.hasAsked ? `<p class="answer">${current.askAnswer}</p>` : ""}
            <div class="hint-box">${icon("!")}<span>${current.promptHint}</span></div>
          </div>
        </section>

        <section class="letter-panel letter-drawer ${state.isPaperOpen ? "visible" : ""}" aria-hidden="${state.isPaperOpen ? "false" : "true"}">
          <div class="panel-title">${icon("信")}<span>信纸记录</span></div>
          ${
            state.isPaperOpen
              ? `
                <textarea id="letterBox" placeholder="在此代客写信。记清银钱、人名、村名和托付，也要顾住语气。">${state.letter}</textarea>
                <div class="letter-footer">
                  <span>当前用时 ${state.customerTime} 秒</span>
                  <button class="primary" id="submitBtn">${icon("封")}封信交付</button>
                </div>
              `
              : `
                <div class="locked-paper">
                  <span>${icon("听")}</span>
                  <strong>先听完客人口述</strong>
                  <p>语音听取后，信纸会从柜台展开，开始记录与润色。</p>
                </div>
              `
          }
        </section>
      </section>

      ${
        state.lastResult
          ? `
            <aside class="toast">
              <div><span>上一封：${state.lastResult.customer.role}</span><strong>${state.lastResult.evaluation.finalScore} 分</strong></div>
              <p>${state.lastResult.evaluation.positive.slice(0, 2).join("；") || "内容仍需斟酌。"}</p>
              ${state.lastResult.evaluation.negative.length > 0 ? `<p class="bad-text">${state.lastResult.evaluation.negative[0]}</p>` : ""}
            </aside>
          `
          : ""
      }
      ${renderAssetTool()}
    </main>
  `;

  const letterBox = document.querySelector("#letterBox");
  if (letterBox) {
    letterBox.addEventListener("input", (event) => {
      state.letter = event.target.value;
    });
  }
  document.querySelector("#playBtn").addEventListener("click", playAudio);
  document.querySelector("#replayBtn").addEventListener("click", playAudio);
  document.querySelector("#askBtn").addEventListener("click", askQuestion);
  document.querySelector("#openPaperBtn").addEventListener("click", openPaper);
  const submitBtn = document.querySelector("#submitBtn");
  if (submitBtn) submitBtn.addEventListener("click", submitLetter);
  bindAssetTool();
}

function render() {
  const root = document.querySelector("#root");
  if (!root) return;
  if (state.isDayEnded || !currentCustomer()) {
    if (timer) window.clearInterval(timer);
    renderSummary(root);
    return;
  }
  renderGame(root);
}

startTimer();
render();
