// node_modules/.nitro/vite/services/ssr/assets/curriculum-BpJOvEwT.js
var w$1 = (id, thai, roman, en, pos, topic) => ({
	id,
	thai,
	roman,
	en,
	level: "A1",
	pos,
	topic
});
var t$1 = (word) => ({
	kind: "w",
	word
});
var SELF$1 = { kind: "self" };
var OTHER$1 = { kind: "other-self" };
var POLITE$1 = { kind: "polite" };
var POLITE_Q$1 = {
	kind: "polite",
	q: true
};
var choice$1 = (dir, word, traps, coach) => ({
	kind: "choice",
	dir,
	word,
	traps,
	coach
});
var tiles$1 = (prompt, answer, extra, coach) => ({
	kind: "tiles",
	prompt,
	answer,
	extra,
	coach
});
var pairs$1 = (list, coach) => ({
	kind: "pairs",
	pairs: list,
	coach
});
var a1Vocab = {
	hello: w$1("a1-hello", "สวัสดี", "sà-wàt-dii", "Hello", "phrase", "Greetings"),
	bye: w$1("a1-bye", "ลาก่อน", "laa-gàwn", "Goodbye", "phrase", "Greetings"),
	meet: w$1("a1-meet", "ยินดีที่ได้รู้จัก", "yin-dii-thîi-dâai-rúu-jàk", "Nice to meet you", "phrase", "Greetings"),
	kha: w$1("a1-kha", "ค่ะ", "khâ", "Polite particle (women)", "particle", "Greetings"),
	khrap: w$1("a1-khrap", "ครับ", "khráp", "Polite particle (men)", "particle", "Greetings"),
	thanks: w$1("a1-thanks", "ขอบคุณ", "khàawp-khun", "Thank you", "phrase", "Greetings"),
	sorry: w$1("a1-sorry", "ขอโทษ", "khǎaw-thôot", "Sorry / excuse me", "phrase", "Greetings"),
	np: w$1("a1-np", "ไม่เป็นไร", "mâi-bpen-rai", "No problem", "phrase", "Greetings"),
	yes: w$1("a1-yes", "ใช่", "châi", "Yes", "adverb", "Greetings"),
	no: w$1("a1-no", "ไม่", "mâi", "No / not", "adverb", "Greetings"),
	can: w$1("a1-can", "ได้", "dâai", "Can / okay", "verb", "Greetings"),
	cant: w$1("a1-cant", "ไม่ได้", "mâi-dâai", "Cannot", "phrase", "Greetings"),
	khaQ: w$1("a1-kha-q", "คะ", "khá", "Question particle (women)", "particle", "Greetings"),
	howru: w$1("a1-howru", "สบายดีไหม", "sà-baai-dii-mǎi", "How are you?", "phrase", "People"),
	well: w$1("a1-well", "สบายดี", "sà-baai-dii", "I'm well", "phrase", "People"),
	iF: w$1("a1-i-f", "ฉัน", "chǎn", "I (women / neutral)", "pronoun", "People"),
	iM: w$1("a1-i-m", "ผม", "phǒm", "I (men)", "pronoun", "People"),
	you: w$1("a1-you", "คุณ", "khun", "You", "pronoun", "People"),
	mom: w$1("a1-mom", "แม่", "mâae", "Mom", "noun", "People"),
	dad: w$1("a1-dad", "พ่อ", "phâaw", "Dad", "noun", "People"),
	older: w$1("a1-older", "พี่", "phîi", "Older sibling", "noun", "People"),
	younger: w$1("a1-younger", "น้อง", "náawng", "Younger sibling", "noun", "People"),
	friend: w$1("a1-friend", "เพื่อน", "phûean", "Friend", "noun", "People"),
	family: w$1("a1-family", "ครอบครัว", "khrâawp-khrua", "Family", "noun", "People"),
	child: w$1("a1-child", "ลูก", "lûuk", "Child / offspring", "noun", "People"),
	man: w$1("a1-man", "ผู้ชาย", "phûu-chaai", "Man", "noun", "People"),
	woman: w$1("a1-woman", "ผู้หญิง", "phûu-yǐng", "Woman", "noun", "People"),
	kid: w$1("a1-kid", "เด็ก", "dèk", "Kid / young child", "noun", "People"),
	teacher: w$1("a1-teacher", "ครู", "khruu", "Teacher", "noun", "Jobs & Countries"),
	student: w$1("a1-student", "นักเรียน", "nák-riian", "Student", "noun", "Jobs & Countries"),
	doctor: w$1("a1-doctor", "หมอ", "mǎaw", "Doctor", "noun", "Jobs & Countries"),
	staff: w$1("a1-staff", "พนักงาน", "phá-nák-ngaan", "Staff / employee", "noun", "Jobs & Countries"),
	work: w$1("a1-work", "ทำงาน", "tham-ngaan", "To work", "verb", "Jobs & Countries"),
	study: w$1("a1-study", "เรียน", "riian", "To study", "verb", "Jobs & Countries"),
	company: w$1("a1-company", "บริษัท", "baaw-rí-sàt", "Company", "noun", "Jobs & Countries"),
	country: w$1("a1-country", "ประเทศ", "bprà-thêet", "Country", "noun", "Jobs & Countries"),
	thailand: w$1("a1-thailand", "ประเทศไทย", "bprà-thêet-thai", "Thailand", "noun", "Jobs & Countries"),
	english: w$1("a1-english", "ภาษาอังกฤษ", "phaa-sǎa-ang-grìt", "English language", "noun", "Jobs & Countries"),
	bangkok: w$1("a1-bangkok", "กรุงเทพฯ", "grung-thêep", "Bangkok", "noun", "Jobs & Countries"),
	rice: w$1("a1-rice", "ข้าว", "khâao", "Rice / a meal", "noun", "Food & Drink"),
	water: w$1("a1-water", "น้ำ", "náam", "Water", "noun", "Food & Drink"),
	coffee: w$1("a1-coffee", "กาแฟ", "gaa-fae", "Coffee", "noun", "Food & Drink"),
	tea: w$1("a1-tea", "ชา", "chaa", "Tea", "noun", "Food & Drink"),
	tasty: w$1("a1-tasty", "อร่อย", "à-ròi", "Delicious", "adjective", "Food & Drink"),
	hungry: w$1("a1-hungry", "หิว", "hǐu", "Hungry", "adjective", "Food & Drink"),
	eat: w$1("a1-eat", "กิน", "gin", "To eat", "verb", "Food & Drink"),
	want: w$1("a1-want", "อยาก", "yàak", "To want to", "verb", "Food & Drink"),
	please: w$1("a1-please", "ขอ", "khǎaw", "May I have", "verb", "Shopping"),
	thisOne: w$1("a1-this-one", "อันนี้", "an-níi", "This one", "pronoun", "Shopping"),
	howMuch: w$1("a1-how-much", "เท่าไหร่", "thâo-rài", "How much?", "question", "Shopping"),
	expensive: w$1("a1-expensive", "แพง", "phaeng", "Expensive", "adjective", "Shopping"),
	cheap: w$1("a1-cheap", "ถูก", "thùuk", "Cheap", "adjective", "Shopping"),
	baht: w$1("a1-baht", "บาท", "bàat", "Baht", "noun", "Shopping"),
	snack: w$1("a1-snack", "ขนม", "khà-nǒm", "Snack / dessert", "noun", "Food & Drink"),
	fruit: w$1("a1-fruit", "ผลไม้", "phǒn-lá-mái", "Fruit", "noun", "Food & Drink"),
	mango: w$1("a1-mango", "มะม่วง", "má-mûang", "Mango", "noun", "Food & Drink"),
	banana: w$1("a1-banana", "กล้วย", "glûai", "Banana", "noun", "Food & Drink"),
	friedRice: w$1("a1-fried-rice", "ข้าวผัด", "khâao-phàt", "Fried rice", "noun", "Food & Drink"),
	noodles: w$1("a1-noodles", "ก๋วยเตี๋ยว", "gǔai-dtǐao", "Noodle soup", "noun", "Food & Drink"),
	egg: w$1("a1-egg", "ไข่", "khài", "Egg", "noun", "Food & Drink"),
	fish: w$1("a1-fish", "ปลา", "bplaa", "Fish", "noun", "Food & Drink"),
	vegetable: w$1("a1-vegetable", "ผัก", "phàk", "Vegetables", "noun", "Food & Drink"),
	meat: w$1("a1-meat", "เนื้อ", "núea", "Meat / beef", "noun", "Food & Drink"),
	drink: w$1("a1-drink", "ดื่ม", "dùuem", "To drink", "verb", "Food & Drink"),
	ice: w$1("a1-ice", "น้ำแข็ง", "náam-khǎeng", "Ice", "noun", "Food & Drink"),
	milk: w$1("a1-milk", "นม", "nom", "Milk", "noun", "Food & Drink"),
	orangeJuice: w$1("a1-orange-juice", "น้ำส้ม", "náam-sôm", "Orange juice", "noun", "Food & Drink"),
	beer: w$1("a1-beer", "เบียร์", "biia", "Beer", "noun", "Food & Drink"),
	sweet: w$1("a1-sweet", "หวาน", "wǎan", "Sweet", "adjective", "Food & Drink"),
	salty: w$1("a1-salty", "เค็ม", "khem", "Salty", "adjective", "Food & Drink"),
	sour: w$1("a1-sour", "เปรี้ยว", "bprîao", "Sour", "adjective", "Food & Drink"),
	spicy: w$1("a1-spicy", "เผ็ด", "phèt", "Spicy", "adjective", "Food & Drink"),
	bland: w$1("a1-bland", "จืด", "jùuet", "Mild / not spicy", "adjective", "Food & Drink"),
	one: w$1("a1-one", "หนึ่ง", "nùeng", "One", "number", "Numbers"),
	two: w$1("a1-two", "สอง", "sǎawng", "Two", "number", "Numbers"),
	three: w$1("a1-three", "สาม", "sǎam", "Three", "number", "Numbers"),
	four: w$1("a1-four", "สี่", "sìi", "Four", "number", "Numbers"),
	five: w$1("a1-five", "ห้า", "hâa", "Five", "number", "Numbers"),
	six: w$1("a1-six", "หก", "hòk", "Six", "number", "Numbers"),
	seven: w$1("a1-seven", "เจ็ด", "jèt", "Seven", "number", "Numbers"),
	eight: w$1("a1-eight", "แปด", "bpàaet", "Eight", "number", "Numbers"),
	nine: w$1("a1-nine", "เก้า", "gâao", "Nine", "number", "Numbers"),
	ten: w$1("a1-ten", "สิบ", "sìp", "Ten", "number", "Numbers"),
	zero: w$1("a1-zero", "ศูนย์", "sǔun", "Zero", "number", "Numbers"),
	eleven: w$1("a1-eleven", "สิบเอ็ด", "sìp-èt", "Eleven", "number", "Numbers"),
	twelve: w$1("a1-twelve", "สิบสอง", "sìp-sǎawng", "Twelve", "number", "Numbers"),
	twenty: w$1("a1-twenty", "ยี่สิบ", "yîi-sìp", "Twenty", "number", "Numbers"),
	thirty: w$1("a1-thirty", "สามสิบ", "sǎam-sìp", "Thirty", "number", "Numbers"),
	fifty: w$1("a1-fifty", "ห้าสิบ", "hâa-sìp", "Fifty", "number", "Numbers"),
	hundred: w$1("a1-hundred", "ร้อย", "ráawy", "Hundred", "number", "Numbers"),
	thousand: w$1("a1-thousand", "พัน", "phan", "Thousand", "number", "Numbers"),
	tenThousand: w$1("a1-ten-thousand", "หมื่น", "mùuen", "Ten thousand", "number", "Numbers"),
	half: w$1("a1-half", "ครึ่ง", "khrûeng", "Half", "number", "Numbers"),
	clfThing: w$1("a1-clf-thing", "อัน", "an", "Piece / item (classifier)", "classifier", "Classifiers"),
	clfPerson: w$1("a1-clf-person", "คน", "khon", "Person (classifier)", "classifier", "Classifiers"),
	clfGlass: w$1("a1-clf-glass", "แก้ว", "gâaeo", "Glass / cup", "classifier", "Classifiers"),
	clfPlate: w$1("a1-clf-plate", "จาน", "jaan", "Plate", "classifier", "Classifiers"),
	clfBottle: w$1("a1-clf-bottle", "ขวด", "khùat", "Bottle", "classifier", "Classifiers"),
	clfBody: w$1("a1-clf-body", "ตัว", "dtua", "Animal / shirt (classifier)", "classifier", "Classifiers"),
	howMany: w$1("a1-how-many", "กี่", "gìi", "How many?", "question", "Classifiers"),
	allTotal: w$1("a1-all-total", "ทั้งหมด", "tháng-mòt", "All / total", "adjective", "Classifiers"),
	many: w$1("a1-many", "มาก", "mâak", "Very / a lot", "adverb", "Classifiers"),
	few: w$1("a1-few", "น้อย", "náawy", "A little / few", "adverb", "Classifiers"),
	bathroom: w$1("a1-bathroom", "ห้องน้ำ", "hông-náam", "Bathroom", "noun", "Places & Directions"),
	where: w$1("a1-where", "ที่ไหน", "thîi-nǎi", "Where", "question", "Places & Directions"),
	located: w$1("a1-located", "อยู่", "yùu", "To be at / live", "verb", "Places & Directions"),
	go: w$1("a1-go", "ไป", "bpai", "To go", "verb", "Places & Directions"),
	market: w$1("a1-market", "ตลาด", "dtà-làat", "Market", "noun", "Places & Directions"),
	temple: w$1("a1-temple", "วัด", "wát", "Temple", "noun", "Places & Directions"),
	left: w$1("a1-left", "ซ้าย", "sáai", "Left", "noun", "Places & Directions"),
	right: w$1("a1-right", "ขวา", "khwǎa", "Right", "noun", "Places & Directions"),
	straight: w$1("a1-straight", "ตรงไป", "dtrong-bpai", "Straight ahead", "phrase", "Places & Directions"),
	turn: w$1("a1-turn", "เลี้ยว", "líiao", "To turn", "verb", "Places & Directions"),
	taxi: w$1("a1-taxi", "แท็กซี่", "tháek-sîi", "Taxi", "noun", "Places & Directions"),
	home: w$1("a1-home", "บ้าน", "bâan", "Home / house", "noun", "Places & Directions"),
	room: w$1("a1-room", "ห้อง", "hâawng", "Room", "noun", "Places & Directions"),
	shop: w$1("a1-shop", "ร้าน", "ráan", "Shop / store", "noun", "Places & Directions"),
	restaurant: w$1("a1-restaurant", "ร้านอาหาร", "ráan-aa-hǎan", "Restaurant", "noun", "Places & Directions"),
	hospital: w$1("a1-hospital", "โรงพยาบาล", "roong-phá-yaa-baan", "Hospital", "noun", "Places & Directions"),
	bank: w$1("a1-bank", "ธนาคาร", "thá-naa-khaan", "Bank", "noun", "Places & Directions"),
	school: w$1("a1-school", "โรงเรียน", "roong-riian", "School", "noun", "Places & Directions"),
	supermarket: w$1("a1-supermarket", "ซูเปอร์มาร์เก็ต", "suu-bpôe-maa-gêt", "Supermarket", "noun", "Places & Directions"),
	park: w$1("a1-park", "สวน", "sǔan", "Park / garden", "noun", "Places & Directions"),
	street: w$1("a1-street", "ถนน", "thà-nǒn", "Road / street", "noun", "Places & Directions"),
	sign: w$1("a1-sign", "ป้าย", "bpâai", "Sign / stop", "noun", "Places & Directions"),
	today: w$1("a1-today", "วันนี้", "wan-níi", "Today", "noun", "Time & Calendar"),
	tomorrow: w$1("a1-tomorrow", "พรุ่งนี้", "phrûng-níi", "Tomorrow", "noun", "Time & Calendar"),
	yesterday: w$1("a1-yesterday", "เมื่อวาน", "mûea-waan", "Yesterday", "noun", "Time & Calendar"),
	now: w$1("a1-now", "ตอนนี้", "dtaawn-níi", "Now", "adverb", "Time & Calendar"),
	morning: w$1("a1-morning", "เช้า", "cháao", "Morning", "noun", "Time & Calendar"),
	afternoon: w$1("a1-afternoon", "บ่าย", "bàai", "Afternoon", "noun", "Time & Calendar"),
	evening: w$1("a1-evening", "เย็น", "yen", "Evening / cool", "noun", "Time & Calendar"),
	whatTime: w$1("a1-what-time", "กี่โมง", "gìi-moong", "What time?", "question", "Time & Calendar"),
	hourClock: w$1("a1-hour-clock", "โมง", "moong", "O'clock (daytime)", "noun", "Time & Calendar"),
	minute: w$1("a1-minute", "นาที", "naa-thii", "Minute", "noun", "Time & Calendar"),
	clock: w$1("a1-clock", "นาฬิกา", "naa-lí-gaa", "Clock / watch", "noun", "Time & Calendar"),
	night: w$1("a1-night", "กลางคืน", "glaang-khuuen", "Nighttime", "noun", "Time & Calendar"),
	noon: w$1("a1-noon", "เที่ยง", "thîiang", "Noon", "noun", "Time & Calendar"),
	hourDur: w$1("a1-hour-dur", "ชั่วโมง", "chûa-moong", "Hour (duration)", "noun", "Time & Calendar"),
	second: w$1("a1-second", "วินาที", "wí-naa-thii", "Second", "noun", "Time & Calendar"),
	monday: w$1("a1-monday", "วันจันทร์", "wan-jan", "Monday", "noun", "Days & Months"),
	tuesday: w$1("a1-tuesday", "วันอังคาร", "wan-ang-khaan", "Tuesday", "noun", "Days & Months"),
	wednesday: w$1("a1-wednesday", "วันพุธ", "wan-phút", "Wednesday", "noun", "Days & Months"),
	thursday: w$1("a1-thursday", "วันพฤหัสบดี", "wan-phá-rúe-hàt-sà-baaw-dii", "Thursday", "noun", "Days & Months"),
	friday: w$1("a1-friday", "วันศุกร์", "wan-sùk", "Friday", "noun", "Days & Months"),
	saturday: w$1("a1-saturday", "วันเสาร์", "wan-sǎo", "Saturday", "noun", "Days & Months"),
	sunday: w$1("a1-sunday", "วันอาทิตย์", "wan-aa-thít", "Sunday", "noun", "Days & Months"),
	week: w$1("a1-week", "สัปดาห์", "sàp-daa", "Week", "noun", "Days & Months"),
	day: w$1("a1-day", "วัน", "wan", "Day", "noun", "Days & Months"),
	month: w$1("a1-month", "เดือน", "duean", "Month", "noun", "Days & Months"),
	year: w$1("a1-year", "ปี", "bpii", "Year", "noun", "Days & Months"),
	hotSeason: w$1("a1-hot-season", "ฤดูร้อน", "rúe-duu-ráawn", "Hot season", "noun", "Days & Months"),
	rainySeason: w$1("a1-rainy-season", "ฤดูฝน", "rúe-duu-fǒn", "Rainy season", "noun", "Days & Months"),
	coolSeason: w$1("a1-cool-season", "ฤดูหนาว", "rúe-duu-nǎao", "Cool season", "noun", "Days & Months"),
	everyDay: w$1("a1-every-day", "ทุกวัน", "thúk-wan", "Every day", "adverb", "Days & Months"),
	holiday: w$1("a1-holiday", "วันหยุด", "wan-yùt", "Holiday / day off", "noun", "Days & Months"),
	birthday: w$1("a1-birthday", "วันเกิด", "wan-gòet", "Birthday", "noun", "Days & Months"),
	before: w$1("a1-before", "ก่อน", "gàawn", "Before / first", "preposition", "Time & Calendar"),
	after: w$1("a1-after", "หลัง", "lǎng", "After", "preposition", "Time & Calendar"),
	wakeUp: w$1("a1-wake-up", "ตื่น", "dtùuen", "To wake up", "verb", "Daily Routine"),
	sleep: w$1("a1-sleep", "นอน", "naawn", "To sleep", "verb", "Daily Routine"),
	shower: w$1("a1-shower", "อาบน้ำ", "àap-náam", "To shower", "verb", "Daily Routine"),
	brushTeeth: w$1("a1-brush-teeth", "แปรงฟัน", "bpraaeng-fan", "To brush teeth", "verb", "Daily Routine"),
	getDressed: w$1("a1-get-dressed", "แต่งตัว", "dtàeng-dtua", "To get dressed", "verb", "Daily Routine"),
	goBack: w$1("a1-go-back", "กลับ", "glàp", "To return / go back", "verb", "Daily Routine"),
	rest: w$1("a1-rest", "พักผ่อน", "phák-phàawn", "To rest", "verb", "Daily Routine"),
	doMake: w$1("a1-do-make", "ทำ", "tham", "To do / make", "verb", "Daily Routine"),
	cook: w$1("a1-cook", "ทำอาหาร", "tham-aa-hǎan", "To cook", "verb", "Daily Routine"),
	wash: w$1("a1-wash", "ล้าง", "láang", "To wash", "verb", "Daily Routine"),
	come: w$1("a1-come", "มา", "maa", "To come", "verb", "Common Verbs"),
	watch: w$1("a1-watch", "ดู", "duu", "To watch / look", "verb", "Common Verbs"),
	listen: w$1("a1-listen", "ฟัง", "fang", "To listen", "verb", "Common Verbs"),
	read: w$1("a1-read", "อ่าน", "àan", "To read", "verb", "Common Verbs"),
	write: w$1("a1-write", "เขียน", "khǐian", "To write", "verb", "Common Verbs"),
	buy: w$1("a1-buy", "ซื้อ", "súue", "To buy", "verb", "Common Verbs"),
	sell: w$1("a1-sell", "ขาย", "khǎai", "To sell", "verb", "Common Verbs"),
	pay: w$1("a1-pay", "จ่าย", "jàai", "To pay", "verb", "Common Verbs"),
	use: w$1("a1-use", "ใช้", "chái", "To use", "verb", "Common Verbs"),
	wait: w$1("a1-wait", "รอ", "raaw", "To wait", "verb", "Common Verbs"),
	help: w$1("a1-help", "ช่วย", "chûai", "To help", "verb", "Common Verbs"),
	give: w$1("a1-give", "ให้", "hâi", "To give", "verb", "Common Verbs"),
	takeWant: w$1("a1-take-want", "เอา", "ao", "To take / want", "verb", "Common Verbs"),
	lookFor: w$1("a1-look-for", "หา", "hǎa", "To look for", "verb", "Common Verbs"),
	meetFind: w$1("a1-meet-find", "พบ", "phóp", "To meet / find", "verb", "Common Verbs"),
	know: w$1("a1-know", "รู้", "rúu", "To know", "verb", "Common Verbs"),
	remember: w$1("a1-remember", "จำ", "jam", "To remember", "verb", "Common Verbs"),
	forget: w$1("a1-forget", "ลืม", "luuem", "To forget", "verb", "Common Verbs"),
	think: w$1("a1-think", "คิด", "khít", "To think", "verb", "Common Verbs"),
	ask: w$1("a1-ask", "ถาม", "thǎam", "To ask", "verb", "Common Verbs"),
	table: w$1("a1-table", "โต๊ะ", "dtó", "Table", "noun", "Home"),
	chair: w$1("a1-chair", "เก้าอี้", "gâo-îi", "Chair", "noun", "Home"),
	bed: w$1("a1-bed", "เตียง", "dtiiang", "Bed", "noun", "Home"),
	door: w$1("a1-door", "ประตู", "bprà-dtuu", "Door", "noun", "Home"),
	window: w$1("a1-window", "หน้าต่าง", "nâa-dtàang", "Window", "noun", "Home"),
	kitchen: w$1("a1-kitchen", "ห้องครัว", "hông-khrua", "Kitchen", "noun", "Home"),
	bedroom: w$1("a1-bedroom", "ห้องนอน", "hông-naawn", "Bedroom", "noun", "Home"),
	key: w$1("a1-key", "กุญแจ", "gun-jae", "Key", "noun", "Home"),
	fridge: w$1("a1-fridge", "ตู้เย็น", "dtûu-yen", "Refrigerator", "noun", "Home"),
	light: w$1("a1-light", "ไฟ", "fai", "Light / electricity", "noun", "Home"),
	phone: w$1("a1-phone", "โทรศัพท์", "thoo-rá-sàp", "Phone", "noun", "Objects"),
	money: w$1("a1-money", "เงิน", "ngoen", "Money", "noun", "Objects"),
	bag: w$1("a1-bag", "กระเป๋า", "grà-bpǎo", "Bag / wallet", "noun", "Objects"),
	book: w$1("a1-book", "หนังสือ", "nǎng-sǔue", "Book", "noun", "Objects"),
	pen: w$1("a1-pen", "ปากกา", "bpàak-gaa", "Pen", "noun", "Objects"),
	paper: w$1("a1-paper", "กระดาษ", "grà-dàat", "Paper", "noun", "Objects"),
	wristwatch: w$1("a1-wristwatch", "นาฬิกาข้อมือ", "naa-lí-gaa-khâaw-muue", "Wristwatch", "noun", "Objects"),
	umbrella: w$1("a1-umbrella", "ร่ม", "rôm", "Umbrella", "noun", "Objects"),
	card: w$1("a1-card", "บัตร", "bàt", "Card / ID card", "noun", "Objects"),
	photo: w$1("a1-photo", "รูป", "rûup", "Photo / picture", "noun", "Objects"),
	shirt: w$1("a1-shirt", "เสื้อ", "sûea", "Shirt / top", "noun", "Clothes"),
	pants: w$1("a1-pants", "กางเกง", "gaang-geeng", "Pants", "noun", "Clothes"),
	skirt: w$1("a1-skirt", "กระโปรง", "grà-bproong", "Skirt", "noun", "Clothes"),
	shoes: w$1("a1-shoes", "รองเท้า", "raawng-tháo", "Shoes", "noun", "Clothes"),
	socks: w$1("a1-socks", "ถุงเท้า", "thǔng-tháo", "Socks", "noun", "Clothes"),
	hat: w$1("a1-hat", "หมวก", "mùak", "Hat", "noun", "Clothes"),
	glasses: w$1("a1-glasses", "แว่นตา", "wâaen-dtaa", "Glasses", "noun", "Clothes"),
	wear: w$1("a1-wear", "ใส่", "sài", "To wear / put in", "verb", "Clothes"),
	takeOff: w$1("a1-take-off", "ถอด", "thàawt", "To take off", "verb", "Clothes"),
	outfit: w$1("a1-outfit", "ชุด", "chút", "Outfit / set", "noun", "Clothes"),
	head: w$1("a1-head", "หัว", "hǔa", "Head", "noun", "Body"),
	face: w$1("a1-face", "หน้า", "nâa", "Face", "noun", "Body"),
	eye: w$1("a1-eye", "ตา", "dtaa", "Eye", "noun", "Body"),
	ear: w$1("a1-ear", "หู", "hǔu", "Ear", "noun", "Body"),
	nose: w$1("a1-nose", "จมูก", "jà-mùuk", "Nose", "noun", "Body"),
	mouth: w$1("a1-mouth", "ปาก", "bpàak", "Mouth", "noun", "Body"),
	tooth: w$1("a1-tooth", "ฟัน", "fan", "Tooth / teeth", "noun", "Body"),
	hand: w$1("a1-hand", "มือ", "muue", "Hand", "noun", "Body"),
	foot: w$1("a1-foot", "เท้า", "tháo", "Foot", "noun", "Body"),
	stomach: w$1("a1-stomach", "ท้อง", "tháawng", "Stomach / belly", "noun", "Body"),
	hurt: w$1("a1-hurt", "เจ็บ", "jèp", "Hurt / painful", "adjective", "Health"),
	ache: w$1("a1-ache", "ปวด", "bpùat", "To ache", "verb", "Health"),
	headache: w$1("a1-headache", "ปวดหัว", "bpùat-hǔa", "Headache", "noun", "Health"),
	stomachache: w$1("a1-stomachache", "ปวดท้อง", "bpùat-tháawng", "Stomachache", "noun", "Health"),
	fever: w$1("a1-fever", "ไข้", "khâi", "Fever", "noun", "Health"),
	sick: w$1("a1-sick", "ป่วย", "bpùai", "Sick / ill", "adjective", "Health"),
	medicine: w$1("a1-medicine", "ยา", "yaa", "Medicine", "noun", "Health"),
	allergic: w$1("a1-allergic", "แพ้", "pháae", "Allergic (to)", "verb", "Health"),
	recover: w$1("a1-recover", "หาย", "hǎai", "To recover / disappear", "verb", "Health"),
	healthy: w$1("a1-healthy", "แข็งแรง", "khǎeng-raaeng", "Healthy / strong", "adjective", "Health"),
	color: w$1("a1-color", "สี", "sǐi", "Color", "noun", "Colors"),
	red: w$1("a1-red", "สีแดง", "sǐi-daaeng", "Red", "adjective", "Colors"),
	white: w$1("a1-white", "สีขาว", "sǐi-khǎao", "White", "adjective", "Colors"),
	black: w$1("a1-black", "สีดำ", "sǐi-dam", "Black", "adjective", "Colors"),
	blue: w$1("a1-blue", "สีฟ้า", "sǐi-fáa", "Blue", "adjective", "Colors"),
	green: w$1("a1-green", "สีเขียว", "sǐi-khǐao", "Green", "adjective", "Colors"),
	yellow: w$1("a1-yellow", "สีเหลือง", "sǐi-lǔeang", "Yellow", "adjective", "Colors"),
	pink: w$1("a1-pink", "สีชมพู", "sǐi-chom-phuu", "Pink", "adjective", "Colors"),
	orange: w$1("a1-orange", "สีส้ม", "sǐi-sôm", "Orange", "adjective", "Colors"),
	brown: w$1("a1-brown", "สีน้ำตาล", "sǐi-náam-dtaan", "Brown", "adjective", "Colors"),
	big: w$1("a1-big", "ใหญ่", "yài", "Big", "adjective", "Descriptions"),
	small: w$1("a1-small", "เล็ก", "lék", "Small", "adjective", "Descriptions"),
	pretty: w$1("a1-pretty", "สวย", "sǔai", "Pretty / beautiful", "adjective", "Descriptions"),
	good: w$1("a1-good", "ดี", "dii", "Good", "adjective", "Descriptions"),
	newW: w$1("a1-new", "ใหม่", "mài", "New", "adjective", "Descriptions"),
	oldThing: w$1("a1-old-thing", "เก่า", "gào", "Old (things)", "adjective", "Descriptions"),
	easy: w$1("a1-easy", "ง่าย", "ngâai", "Easy", "adjective", "Descriptions"),
	hard: w$1("a1-hard", "ยาก", "yâak", "Difficult", "adjective", "Descriptions"),
	fast: w$1("a1-fast", "เร็ว", "reo", "Fast", "adjective", "Descriptions"),
	slow: w$1("a1-slow", "ช้า", "cháa", "Slow", "adjective", "Descriptions"),
	hot: w$1("a1-hot", "ร้อน", "ráawn", "Hot", "adjective", "Feelings"),
	cold: w$1("a1-cold", "หนาว", "nǎao", "Cold (weather)", "adjective", "Feelings"),
	happy: w$1("a1-happy", "ดีใจ", "dii-jai", "Happy / glad", "adjective", "Feelings"),
	sad: w$1("a1-sad", "เสียใจ", "sǐia-jai", "Sad / sorry", "adjective", "Feelings"),
	angry: w$1("a1-angry", "โกรธ", "gròot", "Angry", "adjective", "Feelings"),
	afraid: w$1("a1-afraid", "กลัว", "glua", "Afraid", "adjective", "Feelings"),
	bored: w$1("a1-bored", "เบื่อ", "bùea", "Bored", "adjective", "Feelings"),
	busy: w$1("a1-busy", "ยุ่ง", "yûng", "Busy", "adjective", "Feelings"),
	free: w$1("a1-free", "ว่าง", "wâang", "Free / available", "adjective", "Feelings"),
	sleepy: w$1("a1-sleepy", "ง่วง", "ngûang", "Sleepy", "adjective", "Feelings"),
	who: w$1("a1-who", "ใคร", "khrai", "Who", "question", "Questions"),
	which: w$1("a1-which", "ไหน", "nǎi", "Which", "question", "Questions"),
	when: w$1("a1-when", "เมื่อไหร่", "mûea-rài", "When", "question", "Questions"),
	why: w$1("a1-why", "ทำไม", "tham-mai", "Why", "question", "Questions"),
	how: w$1("a1-how", "ยังไง", "yang-ngai", "How", "question", "Questions"),
	whichOne: w$1("a1-which-one", "อันไหน", "an-nǎi", "Which one", "question", "Questions"),
	what: w$1("a1-what", "อะไร", "à-rai", "What", "question", "Questions"),
	whatKind: w$1("a1-what-kind", "แบบไหน", "bàaep-nǎi", "What kind", "question", "Questions"),
	andW: w$1("a1-and", "และ", "láe", "And (clauses/nouns)", "conjunction", "Connectors"),
	withW: w$1("a1-with", "กับ", "gàp", "With / and", "preposition", "Connectors"),
	orW: w$1("a1-or", "หรือ", "rǔue", "Or", "conjunction", "Connectors"),
	butW: w$1("a1-but", "แต่", "dtàae", "But", "conjunction", "Connectors"),
	because: w$1("a1-because", "เพราะว่า", "phráw-wâa", "Because", "conjunction", "Connectors"),
	ifW: w$1("a1-if", "ถ้า", "thâa", "If", "conjunction", "Connectors"),
	already: w$1("a1-already", "แล้ว", "láaeo", "Already / then", "adverb", "Connectors"),
	currently: w$1("a1-currently", "กำลัง", "gam-lang", "Currently (-ing)", "adverb", "Connectors"),
	willW: w$1("a1-will", "จะ", "jà", "Will (future)", "adverb", "Connectors"),
	mustW: w$1("a1-must", "ต้อง", "dtâawng", "Must / have to", "verb", "Connectors"),
	everW: w$1("a1-ever", "เคย", "khoei", "Have ever", "adverb", "Connectors"),
	alsoW: w$1("a1-also", "ด้วย", "dûai", "Also / too", "adverb", "Connectors"),
	inW: w$1("a1-in", "ใน", "nai", "In / inside", "preposition", "Positions"),
	onW: w$1("a1-on", "บน", "bon", "On / above", "preposition", "Positions"),
	underW: w$1("a1-under", "ใต้", "dtâi", "Under", "preposition", "Positions"),
	inFront: w$1("a1-in-front", "ข้างหน้า", "khâang-nâa", "In front", "preposition", "Positions"),
	behind: w$1("a1-behind", "ข้างหลัง", "khâang-lǎng", "Behind", "preposition", "Positions"),
	nextTo: w$1("a1-next-to", "ข้างๆ", "khâang-khâang", "Next to", "preposition", "Positions"),
	between: w$1("a1-between", "ระหว่าง", "rá-wàang", "Between", "preposition", "Positions"),
	fromW: w$1("a1-from", "จาก", "jàak", "From", "preposition", "Positions"),
	toUntil: w$1("a1-to-until", "ถึง", "thǔeng", "To / arrive / until", "preposition", "Positions"),
	ofBelong: w$1("a1-of", "ของ", "khǎawng", "Of / belonging to", "preposition", "Positions"),
	price: w$1("a1-price", "ราคา", "raa-khaa", "Price", "noun", "Shopping"),
	discount: w$1("a1-discount", "ลดราคา", "lót-raa-khaa", "Discount", "verb", "Shopping"),
	cash: w$1("a1-cash", "เงินสด", "ngoen-sòt", "Cash", "noun", "Shopping"),
	creditCard: w$1("a1-credit-card", "บัตรเครดิต", "bàt-khree-dìt", "Credit card", "noun", "Shopping"),
	receipt: w$1("a1-receipt", "ใบเสร็จ", "bai-sèt", "Receipt", "noun", "Shopping"),
	plasticBag: w$1("a1-plastic-bag", "ถุง", "thǔng", "Bag / pouch", "noun", "Shopping"),
	tryW: w$1("a1-try", "ลอง", "laawng", "To try", "verb", "Shopping"),
	changeW: w$1("a1-change", "เปลี่ยน", "bplìian", "To change / exchange", "verb", "Shopping"),
	openW: w$1("a1-open", "เปิด", "bpòet", "Open / turn on", "verb", "Shopping"),
	closeW: w$1("a1-close", "ปิด", "bpìt", "Closed / turn off", "verb", "Shopping"),
	ready: w$1("a1-ready", "พร้อม", "phráawm", "Ready", "adjective", "Shopping"),
	travel: w$1("a1-travel", "เที่ยว", "thîiao", "To travel / hang out", "verb", "Hobbies"),
	sea: w$1("a1-sea", "ทะเล", "thá-lee", "Sea / beach", "noun", "Hobbies"),
	mountain: w$1("a1-mountain", "ภูเขา", "phuu-khǎo", "Mountain", "noun", "Hobbies"),
	takePhoto: w$1("a1-take-photo", "ถ่ายรูป", "thàai-rûup", "To take a photo", "verb", "Hobbies"),
	walk: w$1("a1-walk", "เดิน", "doen", "To walk", "verb", "Hobbies"),
	run: w$1("a1-run", "วิ่ง", "wîng", "To run", "verb", "Hobbies"),
	swim: w$1("a1-swim", "ว่ายน้ำ", "wâai-náam", "To swim", "verb", "Hobbies"),
	music: w$1("a1-music", "เพลง", "phleeng", "Song / music", "noun", "Hobbies"),
	movie: w$1("a1-movie", "หนัง", "nǎng", "Movie", "noun", "Hobbies"),
	sport: w$1("a1-sport", "กีฬา", "gii-laa", "Sport", "noun", "Hobbies"),
	game: w$1("a1-game", "เกม", "geem", "Game", "noun", "Hobbies")
};
var v$1 = a1Vocab;
var toneCoach = "สี่ stays low. ห้า drops. Don't swap them.";
var maiCoach = "ไหม rises, and it asks. ไม่ falls, and it means no.";
var twentyCoach = "Twenty is ยี่สิบ. สองสิบ is not the word people use.";
var timeCoach = "กี่โมง asks the time. On a Thai clock, สองโมง is 8 in the morning, not 2.";
var a1Units = [
	{
		id: "hello",
		level: "A1",
		kicker: "A1 · Unit 1",
		title: "Say hello",
		blurb: "Greet people, thank them, and use ค่ะ or ครับ."
	},
	{
		id: "people",
		level: "A1",
		kicker: "A1 · Unit 2",
		title: "People & Work",
		blurb: "Pronouns, family, jobs, and where you are from."
	},
	{
		id: "market",
		level: "A1",
		kicker: "A1 · Unit 3",
		title: "Food & Market",
		blurb: "Order street food, describe flavors, and ask prices."
	},
	{
		id: "numbers-unit",
		level: "A1",
		kicker: "A1 · Unit 4",
		title: "Numbers & Counting",
		blurb: "Count from zero to ten thousand and use Thai classifiers."
	},
	{
		id: "town",
		level: "A1",
		kicker: "A1 · Unit 5",
		title: "Around Town",
		blurb: "Ask where places are and follow directions."
	},
	{
		id: "time",
		level: "A1",
		kicker: "A1 · Unit 6",
		title: "Time & Calendar",
		blurb: "Tell time, name the seven days, and talk about seasons."
	},
	{
		id: "routine",
		level: "A1",
		kicker: "A1 · Unit 7",
		title: "Daily Life & Verbs",
		blurb: "Morning routines, shopping verbs, and thinking actions."
	},
	{
		id: "home-things",
		level: "A1",
		kicker: "A1 · Unit 8",
		title: "Home, Objects & Clothes",
		blurb: "Rooms, everyday items in your bag, and what you wear."
	},
	{
		id: "body-health",
		level: "A1",
		kicker: "A1 · Unit 9",
		title: "Body & Health",
		blurb: "Name body parts and explain symptoms at a clinic."
	},
	{
		id: "adjectives-a1",
		level: "A1",
		kicker: "A1 · Unit 10",
		title: "Colors & Feelings",
		blurb: "Describe colors, opposites, and how you feel today."
	},
	{
		id: "grammar-a1",
		level: "A1",
		kicker: "A1 · Unit 11",
		title: "Questions & Grammar",
		blurb: "Ask who, why, when, connect sentences, and place objects."
	},
	{
		id: "shopping-hobbies",
		level: "A1",
		kicker: "A1 · Unit 12",
		title: "Shopping, Hobbies & A1 Finale",
		blurb: "Pay at a counter, talk about free time, and pass A1."
	}
];
var a1Lessons = [
	{
		id: "hello",
		unit: "hello",
		title: "Hello",
		subtitle: "First greetings",
		tip: "Put your polite particle at the end. Women end with ค่ะ, men with ครับ. One word already works.",
		words: [
			v$1.hello,
			v$1.bye,
			v$1.meet,
			v$1.kha,
			v$1.khrap
		],
		exercises: [
			choice$1("th-en", v$1.hello, [
				v$1.bye,
				v$1.thanks,
				v$1.sorry
			]),
			choice$1("en-th", v$1.bye, [
				v$1.hello,
				v$1.meet,
				v$1.np
			]),
			choice$1("listen", v$1.hello, [
				v$1.bye,
				v$1.np,
				v$1.sorry
			]),
			tiles$1("Hello (polite)", [t$1(v$1.hello), POLITE$1], [t$1(v$1.bye), t$1(v$1.thanks)]),
			tiles$1("Goodbye (polite)", [t$1(v$1.bye), POLITE$1], [t$1(v$1.hello), t$1(v$1.meet)]),
			pairs$1([
				v$1.hello,
				v$1.bye,
				v$1.meet
			]),
			choice$1("th-en", v$1.meet, [
				v$1.hello,
				v$1.bye,
				v$1.thanks
			])
		]
	},
	{
		id: "thanks",
		unit: "hello",
		title: "Thanks",
		subtitle: "Polite everyday words",
		tip: "ไม่เป็นไร is the reply to both ขอบคุณ and ขอโทษ. It softens everything.",
		words: [
			v$1.thanks,
			v$1.sorry,
			v$1.np
		],
		exercises: [
			choice$1("th-en", v$1.thanks, [
				v$1.sorry,
				v$1.np,
				v$1.hello
			]),
			choice$1("en-th", v$1.sorry, [
				v$1.thanks,
				v$1.np,
				v$1.bye
			]),
			choice$1("listen", v$1.np, [
				v$1.thanks,
				v$1.sorry,
				v$1.hello
			]),
			tiles$1("Thank you", [t$1(v$1.thanks), POLITE$1], [t$1(v$1.sorry), t$1(v$1.np)]),
			tiles$1("Sorry", [t$1(v$1.sorry), POLITE$1], [t$1(v$1.thanks), t$1(v$1.hello)]),
			pairs$1([
				v$1.thanks,
				v$1.sorry,
				v$1.np,
				v$1.hello
			]),
			tiles$1("No problem", [t$1(v$1.np), POLITE$1], [t$1(v$1.sorry), t$1(v$1.bye)])
		]
	},
	{
		id: "yes-no",
		unit: "hello",
		title: "Yes & no",
		subtitle: "Confirming and refusing",
		tip: "ได้ means can or okay. Put ไม่ in front to flip it to ไม่ได้ (cannot). Women use คะ for questions.",
		words: [
			v$1.yes,
			v$1.no,
			v$1.can,
			v$1.cant,
			v$1.khaQ
		],
		exercises: [
			choice$1("th-en", v$1.yes, [
				v$1.no,
				v$1.can,
				v$1.cant
			]),
			choice$1("en-th", v$1.no, [
				v$1.yes,
				v$1.can,
				v$1.cant
			]),
			choice$1("listen", v$1.can, [
				v$1.cant,
				v$1.yes,
				v$1.no
			]),
			choice$1("th-en", v$1.cant, [
				v$1.can,
				v$1.yes,
				v$1.np
			]),
			tiles$1("Okay / can do", [t$1(v$1.can), POLITE$1], [t$1(v$1.cant), t$1(v$1.no)]),
			tiles$1("No, sorry", [
				t$1(v$1.no),
				t$1(v$1.sorry),
				POLITE$1
			], [t$1(v$1.yes), t$1(v$1.can)]),
			pairs$1([
				v$1.yes,
				v$1.no,
				v$1.can,
				v$1.cant
			])
		]
	},
	{
		id: "how-are-you",
		unit: "people",
		title: "How are you",
		subtitle: "Asking and answering",
		tip: "ฉัน and ผม mean I. Women usually use ฉัน, men use ผม. Drop ไหม from สบายดีไหม to answer.",
		words: [
			v$1.howru,
			v$1.well,
			v$1.iF,
			v$1.iM,
			v$1.you
		],
		exercises: [
			choice$1("th-en", v$1.howru, [
				v$1.well,
				v$1.hello,
				v$1.thanks
			], maiCoach),
			choice$1("en-th", v$1.well, [
				v$1.howru,
				v$1.np,
				v$1.you
			]),
			choice$1("listen", v$1.you, [
				v$1.iF,
				v$1.iM,
				v$1.well
			]),
			tiles$1("How are you?", [t$1(v$1.howru), POLITE_Q$1], [t$1(v$1.well), t$1(v$1.hello)], maiCoach),
			tiles$1("I'm well", [
				SELF$1,
				t$1(v$1.well),
				POLITE$1
			], [OTHER$1, t$1(v$1.howru)]),
			pairs$1([
				v$1.howru,
				v$1.well,
				v$1.iF,
				v$1.iM,
				v$1.you
			]),
			choice$1("en-th", v$1.howru, [
				v$1.well,
				v$1.meet,
				v$1.thanks
			], maiCoach)
		]
	},
	{
		id: "family",
		unit: "people",
		title: "Family",
		subtitle: "Home and people around you",
		tip: "พี่ is any older sibling (and a friendly way to address someone slightly older). น้อง is younger.",
		words: [
			v$1.mom,
			v$1.dad,
			v$1.older,
			v$1.younger,
			v$1.friend,
			v$1.family,
			v$1.child,
			v$1.man,
			v$1.woman,
			v$1.kid
		],
		exercises: [
			choice$1("th-en", v$1.mom, [
				v$1.dad,
				v$1.older,
				v$1.woman
			]),
			choice$1("en-th", v$1.dad, [
				v$1.mom,
				v$1.man,
				v$1.child
			]),
			choice$1("listen", v$1.friend, [
				v$1.family,
				v$1.older,
				v$1.younger
			]),
			choice$1("th-en", v$1.family, [
				v$1.friend,
				v$1.child,
				v$1.kid
			]),
			tiles$1("Older sibling, thank you", [
				t$1(v$1.older),
				t$1(v$1.thanks),
				POLITE$1
			], [t$1(v$1.younger), t$1(v$1.friend)]),
			pairs$1([
				v$1.mom,
				v$1.dad,
				v$1.man,
				v$1.woman
			]),
			pairs$1([
				v$1.family,
				v$1.child,
				v$1.kid,
				v$1.friend
			])
		]
	},
	{
		id: "jobs-countries",
		unit: "people",
		title: "Work & Countries",
		subtitle: "Jobs, study, and Thailand",
		tip: "Put ประเทศ in front of a country name, or ภาษา in front of a language name.",
		words: [
			v$1.teacher,
			v$1.student,
			v$1.doctor,
			v$1.staff,
			v$1.work,
			v$1.study,
			v$1.company,
			v$1.country,
			v$1.thailand,
			v$1.english,
			v$1.bangkok
		],
		exercises: [
			choice$1("th-en", v$1.teacher, [
				v$1.student,
				v$1.doctor,
				v$1.staff
			]),
			choice$1("en-th", v$1.doctor, [
				v$1.teacher,
				v$1.student,
				v$1.staff
			]),
			choice$1("listen", v$1.thailand, [
				v$1.bangkok,
				v$1.country,
				v$1.english
			]),
			tiles$1("I work", [
				SELF$1,
				t$1(v$1.work),
				POLITE$1
			], [
				t$1(v$1.study),
				OTHER$1,
				t$1(v$1.company)
			]),
			tiles$1("Study in Bangkok", [t$1(v$1.study), t$1(v$1.bangkok)], [t$1(v$1.work), t$1(v$1.teacher)]),
			pairs$1([
				v$1.teacher,
				v$1.student,
				v$1.doctor,
				v$1.staff
			]),
			pairs$1([
				v$1.work,
				v$1.study,
				v$1.thailand,
				v$1.bangkok
			])
		]
	},
	{
		id: "hungry",
		unit: "market",
		title: "Hungry",
		subtitle: "Food, drinks, and appetite",
		tip: "หิวข้าว literally means hungry for rice, and it means I'm hungry.",
		words: [
			v$1.rice,
			v$1.water,
			v$1.coffee,
			v$1.tea,
			v$1.tasty,
			v$1.hungry,
			v$1.eat,
			v$1.want
		],
		exercises: [
			choice$1("th-en", v$1.rice, [
				v$1.water,
				v$1.coffee,
				v$1.tasty
			]),
			choice$1("en-th", v$1.water, [
				v$1.rice,
				v$1.tea,
				v$1.coffee
			]),
			choice$1("listen", v$1.tasty, [
				v$1.hungry,
				v$1.eat,
				v$1.tea
			]),
			tiles$1("I'm hungry", [
				SELF$1,
				t$1(v$1.hungry),
				t$1(v$1.rice),
				POLITE$1
			], [t$1(v$1.water), t$1(v$1.tasty)]),
			tiles$1("I want to eat", [
				SELF$1,
				t$1(v$1.want),
				t$1(v$1.eat),
				POLITE$1
			], [t$1(v$1.hungry), t$1(v$1.coffee)]),
			pairs$1([
				v$1.rice,
				v$1.water,
				v$1.coffee,
				v$1.tea
			]),
			choice$1("th-en", v$1.coffee, [
				v$1.tea,
				v$1.water,
				v$1.rice
			])
		]
	},
	{
		id: "how-much",
		unit: "market",
		title: "How much",
		subtitle: "Buying at a stall",
		tip: "Point and say อันนี้เท่าไหร่ (how much is this one?). ขอ starts almost any polite request.",
		words: [
			v$1.please,
			v$1.thisOne,
			v$1.howMuch,
			v$1.expensive,
			v$1.cheap,
			v$1.baht
		],
		exercises: [
			choice$1("th-en", v$1.howMuch, [
				v$1.expensive,
				v$1.cheap,
				v$1.thisOne
			]),
			choice$1("en-th", v$1.expensive, [
				v$1.cheap,
				v$1.howMuch,
				v$1.baht
			]),
			choice$1("listen", v$1.cheap, [
				v$1.expensive,
				v$1.please,
				v$1.baht
			]),
			tiles$1("How much is this one?", [
				t$1(v$1.thisOne),
				t$1(v$1.howMuch),
				POLITE_Q$1
			], [t$1(v$1.expensive), t$1(v$1.baht)]),
			tiles$1("May I have water", [
				t$1(v$1.please),
				t$1(v$1.water),
				POLITE$1
			], [t$1(v$1.rice), t$1(v$1.thisOne)]),
			pairs$1([
				v$1.please,
				v$1.thisOne,
				v$1.howMuch,
				v$1.expensive,
				v$1.cheap
			]),
			choice$1("th-en", v$1.baht, [
				v$1.cheap,
				v$1.howMuch,
				v$1.thisOne
			])
		]
	},
	{
		id: "street-food",
		unit: "market",
		title: "More food",
		subtitle: "Dishes, snacks, and fruit",
		tip: "ข้าวผัด is fried rice. ก๋วยเตี๋ยว is noodle soup—ubiquitous at every Thai street corner.",
		words: [
			v$1.snack,
			v$1.fruit,
			v$1.mango,
			v$1.banana,
			v$1.friedRice,
			v$1.noodles,
			v$1.egg,
			v$1.fish,
			v$1.vegetable,
			v$1.meat
		],
		exercises: [
			choice$1("th-en", v$1.friedRice, [
				v$1.noodles,
				v$1.rice,
				v$1.egg
			]),
			choice$1("en-th", v$1.mango, [
				v$1.banana,
				v$1.fruit,
				v$1.snack
			]),
			choice$1("listen", v$1.noodles, [
				v$1.friedRice,
				v$1.fish,
				v$1.meat
			]),
			tiles$1("May I have fried rice", [
				t$1(v$1.please),
				t$1(v$1.friedRice),
				POLITE$1
			], [t$1(v$1.noodles), t$1(v$1.egg)]),
			pairs$1([
				v$1.mango,
				v$1.banana,
				v$1.egg,
				v$1.fish
			]),
			pairs$1([
				v$1.snack,
				v$1.fruit,
				v$1.vegetable,
				v$1.meat
			]),
			choice$1("th-en", v$1.vegetable, [
				v$1.fruit,
				v$1.meat,
				v$1.snack
			])
		]
	},
	{
		id: "tastes-drinks",
		unit: "market",
		title: "Drinks & Taste",
		subtitle: "Sweet, sour, salty, spicy",
		tip: "Put ไม่ before a flavor adjective: ไม่เผ็ด means not spicy, ไม่หวาน means not sweet.",
		words: [
			v$1.drink,
			v$1.ice,
			v$1.milk,
			v$1.orangeJuice,
			v$1.beer,
			v$1.sweet,
			v$1.salty,
			v$1.sour,
			v$1.spicy,
			v$1.bland
		],
		exercises: [
			choice$1("th-en", v$1.spicy, [
				v$1.sweet,
				v$1.salty,
				v$1.sour
			]),
			choice$1("en-th", v$1.sweet, [
				v$1.salty,
				v$1.sour,
				v$1.bland
			]),
			choice$1("listen", v$1.orangeJuice, [
				v$1.milk,
				v$1.ice,
				v$1.beer
			]),
			tiles$1("Not spicy", [
				t$1(v$1.no),
				t$1(v$1.spicy),
				POLITE$1
			], [t$1(v$1.sweet), t$1(v$1.salty)]),
			tiles$1("Drink coffee", [t$1(v$1.drink), t$1(v$1.coffee)], [
				t$1(v$1.eat),
				t$1(v$1.milk),
				t$1(v$1.ice)
			]),
			pairs$1([
				v$1.sweet,
				v$1.salty,
				v$1.sour,
				v$1.spicy
			]),
			pairs$1([
				v$1.drink,
				v$1.ice,
				v$1.milk,
				v$1.beer
			])
		]
	},
	{
		id: "numbers",
		unit: "numbers-unit",
		title: "Numbers 1–10",
		subtitle: "Counting in Thai",
		tip: "หนึ่ง through สิบ gives you every price up to ten. Watch the tones on สี่ (low) and ห้า (falling).",
		words: [
			v$1.one,
			v$1.two,
			v$1.three,
			v$1.four,
			v$1.five,
			v$1.six,
			v$1.seven,
			v$1.eight,
			v$1.nine,
			v$1.ten
		],
		exercises: [
			choice$1("th-en", v$1.one, [
				v$1.two,
				v$1.three,
				v$1.ten
			]),
			choice$1("listen", v$1.four, [
				v$1.five,
				v$1.three,
				v$1.seven
			], toneCoach),
			choice$1("en-th", v$1.five, [
				v$1.four,
				v$1.six,
				v$1.eight
			], toneCoach),
			choice$1("listen", v$1.seven, [
				v$1.eight,
				v$1.nine,
				v$1.six
			]),
			tiles$1("Five baht", [t$1(v$1.five), t$1(v$1.baht)], [t$1(v$1.four), t$1(v$1.ten)], toneCoach),
			pairs$1([
				v$1.one,
				v$1.two,
				v$1.three,
				v$1.four,
				v$1.five
			]),
			pairs$1([
				v$1.six,
				v$1.seven,
				v$1.eight,
				v$1.nine,
				v$1.ten
			])
		]
	},
	{
		id: "big-numbers",
		unit: "numbers-unit",
		title: "11 to 10,000",
		subtitle: "Prices, change, and half",
		tip: "11 uses เอ็ด at the end (สิบเอ็ด). 20 is always ยี่สิบ, never สองสิบ.",
		words: [
			v$1.zero,
			v$1.eleven,
			v$1.twelve,
			v$1.twenty,
			v$1.thirty,
			v$1.fifty,
			v$1.hundred,
			v$1.thousand,
			v$1.tenThousand,
			v$1.half
		],
		exercises: [
			choice$1("th-en", v$1.twenty, [
				v$1.twelve,
				v$1.thirty,
				v$1.fifty
			], twentyCoach),
			choice$1("en-th", v$1.eleven, [
				v$1.twelve,
				v$1.one,
				v$1.ten
			]),
			choice$1("listen", v$1.hundred, [
				v$1.thousand,
				v$1.tenThousand,
				v$1.fifty
			]),
			tiles$1("One hundred baht", [
				t$1(v$1.one),
				t$1(v$1.hundred),
				t$1(v$1.baht)
			], [t$1(v$1.thousand), t$1(v$1.twenty)]),
			tiles$1("Twenty baht", [t$1(v$1.twenty), t$1(v$1.baht)], [t$1(v$1.two), t$1(v$1.ten)], twentyCoach),
			pairs$1([
				v$1.zero,
				v$1.eleven,
				v$1.twelve,
				v$1.twenty
			]),
			pairs$1([
				v$1.fifty,
				v$1.hundred,
				v$1.thousand,
				v$1.half
			])
		]
	},
	{
		id: "classifiers",
		unit: "numbers-unit",
		title: "Counting Things",
		subtitle: "Thai classifiers & amounts",
		tip: "Thai places the classifier AFTER the number: noun + number + classifier (น้ำ สอง ขวด = two bottles of water).",
		words: [
			v$1.clfThing,
			v$1.clfPerson,
			v$1.clfGlass,
			v$1.clfPlate,
			v$1.clfBottle,
			v$1.clfBody,
			v$1.howMany,
			v$1.allTotal,
			v$1.many,
			v$1.few
		],
		exercises: [
			choice$1("th-en", v$1.clfGlass, [
				v$1.clfPlate,
				v$1.clfBottle,
				v$1.clfThing
			]),
			choice$1("en-th", v$1.clfPerson, [
				v$1.clfThing,
				v$1.clfBody,
				v$1.howMany
			]),
			choice$1("listen", v$1.howMany, [
				v$1.allTotal,
				v$1.many,
				v$1.few
			]),
			tiles$1("Two bottles of water", [
				t$1(v$1.water),
				t$1(v$1.two),
				t$1(v$1.clfBottle)
			], [t$1(v$1.clfGlass), t$1(v$1.three)]),
			tiles$1("How many people?", [
				t$1(v$1.howMany),
				t$1(v$1.clfPerson),
				POLITE_Q$1
			], [t$1(v$1.clfThing), t$1(v$1.many)]),
			pairs$1([
				v$1.clfThing,
				v$1.clfPerson,
				v$1.clfGlass,
				v$1.clfBottle
			]),
			pairs$1([
				v$1.clfPlate,
				v$1.clfBody,
				v$1.allTotal,
				v$1.many
			])
		]
	},
	{
		id: "which-way",
		unit: "town",
		title: "Which way",
		subtitle: "Places and directions",
		tip: "Put the place first, then อยู่ที่ไหน (where is it?): ห้องน้ำอยู่ที่ไหน.",
		words: [
			v$1.bathroom,
			v$1.where,
			v$1.located,
			v$1.go,
			v$1.market,
			v$1.temple,
			v$1.left,
			v$1.right,
			v$1.straight,
			v$1.turn,
			v$1.taxi
		],
		exercises: [
			choice$1("th-en", v$1.bathroom, [
				v$1.market,
				v$1.temple,
				v$1.taxi
			]),
			choice$1("en-th", v$1.left, [
				v$1.right,
				v$1.straight,
				v$1.turn
			]),
			choice$1("listen", v$1.market, [
				v$1.temple,
				v$1.bathroom,
				v$1.taxi
			]),
			tiles$1("Where is the bathroom?", [
				t$1(v$1.bathroom),
				t$1(v$1.located),
				t$1(v$1.where),
				POLITE_Q$1
			], [t$1(v$1.market), t$1(v$1.go)]),
			tiles$1("Go to the market", [t$1(v$1.go), t$1(v$1.market)], [
				t$1(v$1.temple),
				t$1(v$1.bathroom),
				t$1(v$1.located)
			]),
			tiles$1("Turn left", [t$1(v$1.turn), t$1(v$1.left)], [t$1(v$1.right), t$1(v$1.straight)]),
			pairs$1([
				v$1.left,
				v$1.right,
				v$1.straight,
				v$1.taxi
			])
		]
	},
	{
		id: "places-town",
		unit: "town",
		title: "Places in Town",
		subtitle: "Shops, hospitals, and streets",
		tip: "โรง means building: โรงพยาบาล (hospital) and โรงเรียน (school) both start with it.",
		words: [
			v$1.home,
			v$1.room,
			v$1.shop,
			v$1.restaurant,
			v$1.hospital,
			v$1.bank,
			v$1.school,
			v$1.supermarket,
			v$1.park,
			v$1.street,
			v$1.sign
		],
		exercises: [
			choice$1("th-en", v$1.hospital, [
				v$1.school,
				v$1.bank,
				v$1.restaurant
			]),
			choice$1("en-th", v$1.restaurant, [
				v$1.shop,
				v$1.supermarket,
				v$1.home
			]),
			choice$1("listen", v$1.bank, [
				v$1.hospital,
				v$1.school,
				v$1.park
			]),
			tiles$1("Go home", [
				t$1(v$1.go),
				t$1(v$1.home),
				POLITE$1
			], [t$1(v$1.room), t$1(v$1.shop)]),
			tiles$1("Where is the bank?", [
				t$1(v$1.bank),
				t$1(v$1.located),
				t$1(v$1.where),
				POLITE_Q$1
			], [t$1(v$1.hospital), t$1(v$1.park)]),
			pairs$1([
				v$1.home,
				v$1.shop,
				v$1.restaurant,
				v$1.hospital
			]),
			pairs$1([
				v$1.bank,
				v$1.school,
				v$1.park,
				v$1.street
			])
		]
	},
	{
		id: "checkpoint-1",
		unit: "town",
		title: "Night market",
		subtitle: "Checkpoint 1 · Units 1–5",
		tip: "No new words. Five hearts. Put greetings, numbers, food, and directions together.",
		checkpoint: true,
		words: [],
		exercises: [
			choice$1("listen", v$1.thanks, [
				v$1.sorry,
				v$1.hello,
				v$1.np
			]),
			tiles$1("How much is this one?", [
				t$1(v$1.thisOne),
				t$1(v$1.howMuch),
				POLITE_Q$1
			], [t$1(v$1.baht), t$1(v$1.expensive)]),
			tiles$1("Where is the bathroom?", [
				t$1(v$1.bathroom),
				t$1(v$1.located),
				t$1(v$1.where),
				POLITE_Q$1
			], [t$1(v$1.market), t$1(v$1.go)]),
			choice$1("th-en", v$1.four, [
				v$1.five,
				v$1.six,
				v$1.seven
			], toneCoach),
			tiles$1("I'm hungry", [
				SELF$1,
				t$1(v$1.hungry),
				t$1(v$1.rice),
				POLITE$1
			], [t$1(v$1.water), t$1(v$1.tasty)]),
			pairs$1([
				v$1.water,
				v$1.coffee,
				v$1.tasty,
				v$1.cheap
			]),
			choice$1("en-th", v$1.straight, [
				v$1.left,
				v$1.right,
				v$1.turn
			]),
			tiles$1("Not spicy", [
				t$1(v$1.no),
				t$1(v$1.spicy),
				POLITE$1
			], [t$1(v$1.sweet), t$1(v$1.tasty)])
		]
	},
	{
		id: "today",
		unit: "time",
		title: "Today & Now",
		subtitle: "Days and parts of the day",
		tip: "Thai verbs do not change tense. Put วันนี้, พรุ่งนี้, or เมื่อวาน in the sentence instead.",
		words: [
			v$1.today,
			v$1.tomorrow,
			v$1.yesterday,
			v$1.now,
			v$1.morning,
			v$1.afternoon,
			v$1.evening
		],
		exercises: [
			choice$1("th-en", v$1.today, [
				v$1.tomorrow,
				v$1.yesterday,
				v$1.now
			]),
			choice$1("en-th", v$1.tomorrow, [
				v$1.today,
				v$1.yesterday,
				v$1.morning
			]),
			choice$1("listen", v$1.yesterday, [
				v$1.today,
				v$1.tomorrow,
				v$1.evening
			]),
			tiles$1("Go tomorrow", [t$1(v$1.tomorrow), t$1(v$1.go)], [
				t$1(v$1.today),
				t$1(v$1.yesterday),
				t$1(v$1.morning)
			]),
			tiles$1("Eat this morning", [
				t$1(v$1.morning),
				t$1(v$1.eat),
				t$1(v$1.rice)
			], [t$1(v$1.evening), t$1(v$1.tomorrow)]),
			pairs$1([
				v$1.today,
				v$1.tomorrow,
				v$1.yesterday,
				v$1.now
			]),
			pairs$1([
				v$1.morning,
				v$1.afternoon,
				v$1.evening
			])
		]
	},
	{
		id: "what-time",
		unit: "time",
		title: "Telling Time",
		subtitle: "Clocks, hours, and minutes",
		tip: "กี่โมง asks what time it is. ชั่วโมง measures how long something takes.",
		words: [
			v$1.whatTime,
			v$1.hourClock,
			v$1.minute,
			v$1.clock,
			v$1.night,
			v$1.noon,
			v$1.hourDur,
			v$1.second
		],
		exercises: [
			choice$1("th-en", v$1.whatTime, [
				v$1.hourClock,
				v$1.minute,
				v$1.clock
			], timeCoach),
			choice$1("en-th", v$1.minute, [
				v$1.hourClock,
				v$1.second,
				v$1.hourDur
			]),
			choice$1("listen", v$1.clock, [
				v$1.whatTime,
				v$1.noon,
				v$1.night
			]),
			tiles$1("What time is it now?", [
				t$1(v$1.now),
				t$1(v$1.whatTime),
				POLITE_Q$1
			], [t$1(v$1.today), t$1(v$1.minute)], timeCoach),
			tiles$1("Ten minutes", [t$1(v$1.ten), t$1(v$1.minute)], [
				t$1(v$1.hourClock),
				t$1(v$1.five),
				t$1(v$1.clock)
			]),
			pairs$1([
				v$1.whatTime,
				v$1.minute,
				v$1.clock,
				v$1.noon
			]),
			pairs$1([
				v$1.night,
				v$1.hourDur,
				v$1.second,
				v$1.hourClock
			])
		]
	},
	{
		id: "days-week",
		unit: "time",
		title: "Days of the Week",
		subtitle: "Monday through Sunday",
		tip: "Every weekday starts with วัน (day) followed by the planet/traditional name.",
		words: [
			v$1.monday,
			v$1.tuesday,
			v$1.wednesday,
			v$1.thursday,
			v$1.friday,
			v$1.saturday,
			v$1.sunday,
			v$1.week
		],
		exercises: [
			choice$1("th-en", v$1.monday, [
				v$1.tuesday,
				v$1.friday,
				v$1.sunday
			]),
			choice$1("en-th", v$1.friday, [
				v$1.wednesday,
				v$1.saturday,
				v$1.monday
			]),
			choice$1("listen", v$1.sunday, [
				v$1.saturday,
				v$1.monday,
				v$1.week
			]),
			tiles$1("Today is Monday", [t$1(v$1.today), t$1(v$1.monday)], [t$1(v$1.tomorrow), t$1(v$1.friday)]),
			pairs$1([
				v$1.monday,
				v$1.tuesday,
				v$1.wednesday,
				v$1.thursday
			]),
			pairs$1([
				v$1.friday,
				v$1.saturday,
				v$1.sunday,
				v$1.week
			]),
			choice$1("th-en", v$1.saturday, [
				v$1.sunday,
				v$1.friday,
				v$1.thursday
			])
		]
	},
	{
		id: "months-seasons",
		unit: "time",
		title: "Seasons & Dates",
		subtitle: "Months, years, and holidays",
		tip: "Thailand has three seasons: ฤดูร้อน (hot), ฤดูฝน (rainy), and ฤดูหนาว (cool).",
		words: [
			v$1.day,
			v$1.month,
			v$1.year,
			v$1.hotSeason,
			v$1.rainySeason,
			v$1.coolSeason,
			v$1.everyDay,
			v$1.holiday,
			v$1.birthday,
			v$1.before,
			v$1.after
		],
		exercises: [
			choice$1("th-en", v$1.month, [
				v$1.day,
				v$1.year,
				v$1.week
			]),
			choice$1("en-th", v$1.holiday, [
				v$1.birthday,
				v$1.everyDay,
				v$1.day
			]),
			choice$1("listen", v$1.everyDay, [
				v$1.holiday,
				v$1.before,
				v$1.after
			]),
			tiles$1("Go every day", [t$1(v$1.go), t$1(v$1.everyDay)], [t$1(v$1.holiday), t$1(v$1.month)]),
			pairs$1([
				v$1.day,
				v$1.month,
				v$1.year,
				v$1.birthday
			]),
			pairs$1([
				v$1.hotSeason,
				v$1.rainySeason,
				v$1.coolSeason,
				v$1.holiday
			]),
			choice$1("th-en", v$1.before, [
				v$1.after,
				v$1.everyDay,
				v$1.year
			])
		]
	},
	{
		id: "daily-routine",
		unit: "routine",
		title: "Morning to Night",
		subtitle: "Your daily routine",
		tip: "อาบน้ำ literally means bathe-water, and ทำอาหาร literally means make-food.",
		words: [
			v$1.wakeUp,
			v$1.sleep,
			v$1.shower,
			v$1.brushTeeth,
			v$1.getDressed,
			v$1.goBack,
			v$1.rest,
			v$1.doMake,
			v$1.cook,
			v$1.wash
		],
		exercises: [
			choice$1("th-en", v$1.wakeUp, [
				v$1.sleep,
				v$1.shower,
				v$1.rest
			]),
			choice$1("en-th", v$1.sleep, [
				v$1.wakeUp,
				v$1.rest,
				v$1.goBack
			]),
			choice$1("listen", v$1.cook, [
				v$1.wash,
				v$1.doMake,
				v$1.shower
			]),
			tiles$1("Go back home", [t$1(v$1.goBack), t$1(v$1.home)], [
				t$1(v$1.wakeUp),
				t$1(v$1.sleep),
				t$1(v$1.rest)
			]),
			tiles$1("Rest today", [t$1(v$1.today), t$1(v$1.rest)], [t$1(v$1.cook), t$1(v$1.wash)]),
			pairs$1([
				v$1.wakeUp,
				v$1.sleep,
				v$1.shower,
				v$1.brushTeeth
			]),
			pairs$1([
				v$1.getDressed,
				v$1.goBack,
				v$1.cook,
				v$1.wash
			])
		]
	},
	{
		id: "everyday-verbs",
		unit: "routine",
		title: "Everyday Actions",
		subtitle: "Come, watch, buy, pay, wait",
		tip: "Verb + แล้ว shows completion, and ไม่ + verb negates any action simply.",
		words: [
			v$1.come,
			v$1.watch,
			v$1.listen,
			v$1.read,
			v$1.write,
			v$1.buy,
			v$1.sell,
			v$1.pay,
			v$1.use,
			v$1.wait
		],
		exercises: [
			choice$1("th-en", v$1.buy, [
				v$1.sell,
				v$1.pay,
				v$1.use
			]),
			choice$1("en-th", v$1.read, [
				v$1.write,
				v$1.listen,
				v$1.watch
			]),
			choice$1("listen", v$1.wait, [
				v$1.come,
				v$1.use,
				v$1.pay
			]),
			tiles$1("Wait a minute", [
				t$1(v$1.wait),
				t$1(v$1.one),
				t$1(v$1.minute),
				POLITE$1
			], [t$1(v$1.buy), t$1(v$1.come)]),
			tiles$1("Buy fruit", [t$1(v$1.buy), t$1(v$1.fruit)], [
				t$1(v$1.sell),
				t$1(v$1.read),
				t$1(v$1.write)
			]),
			pairs$1([
				v$1.come,
				v$1.watch,
				v$1.listen,
				v$1.read
			]),
			pairs$1([
				v$1.write,
				v$1.buy,
				v$1.sell,
				v$1.pay
			])
		]
	},
	{
		id: "mind-verbs",
		unit: "routine",
		title: "Help & Know",
		subtitle: "Asking, helping, remembering",
		tip: "Put ช่วย before a verb to say please help me do something: ช่วยถาม, ช่วยหา.",
		words: [
			v$1.help,
			v$1.give,
			v$1.takeWant,
			v$1.lookFor,
			v$1.meetFind,
			v$1.know,
			v$1.remember,
			v$1.forget,
			v$1.think,
			v$1.ask
		],
		exercises: [
			choice$1("th-en", v$1.help, [
				v$1.give,
				v$1.ask,
				v$1.lookFor
			]),
			choice$1("en-th", v$1.forget, [
				v$1.remember,
				v$1.know,
				v$1.think
			]),
			choice$1("listen", v$1.know, [
				v$1.think,
				v$1.remember,
				v$1.ask
			]),
			tiles$1("I don't know", [
				SELF$1,
				t$1(v$1.no),
				t$1(v$1.know),
				POLITE$1
			], [t$1(v$1.forget), t$1(v$1.think)]),
			tiles$1("Please help look for", [
				t$1(v$1.help),
				t$1(v$1.lookFor),
				POLITE$1
			], [t$1(v$1.give), t$1(v$1.ask)]),
			pairs$1([
				v$1.help,
				v$1.give,
				v$1.takeWant,
				v$1.ask
			]),
			pairs$1([
				v$1.know,
				v$1.remember,
				v$1.forget,
				v$1.think
			])
		]
	},
	{
		id: "at-home",
		unit: "home-things",
		title: "Around the House",
		subtitle: "Furniture and rooms",
		tip: "Add ห้อง (room) in front to name rooms: ห้องนอน (bedroom), ห้องครัว (kitchen).",
		words: [
			v$1.table,
			v$1.chair,
			v$1.bed,
			v$1.door,
			v$1.window,
			v$1.kitchen,
			v$1.bedroom,
			v$1.key,
			v$1.fridge,
			v$1.light
		],
		exercises: [
			choice$1("th-en", v$1.table, [
				v$1.chair,
				v$1.bed,
				v$1.door
			]),
			choice$1("en-th", v$1.key, [
				v$1.door,
				v$1.window,
				v$1.light
			]),
			choice$1("listen", v$1.bedroom, [
				v$1.kitchen,
				v$1.fridge,
				v$1.bed
			]),
			tiles$1("Open the door", [t$1(v$1.openW), t$1(v$1.door)], [
				t$1(v$1.window),
				t$1(v$1.table),
				t$1(v$1.key)
			]),
			pairs$1([
				v$1.table,
				v$1.chair,
				v$1.bed,
				v$1.door
			]),
			pairs$1([
				v$1.window,
				v$1.kitchen,
				v$1.key,
				v$1.fridge
			]),
			choice$1("th-en", v$1.light, [
				v$1.fridge,
				v$1.key,
				v$1.window
			])
		]
	},
	{
		id: "daily-objects",
		unit: "home-things",
		title: "In Your Bag",
		subtitle: "Phone, money, book, umbrella",
		tip: "Forgot your umbrella or key? ลืม + object says I forgot it.",
		words: [
			v$1.phone,
			v$1.money,
			v$1.bag,
			v$1.book,
			v$1.pen,
			v$1.paper,
			v$1.wristwatch,
			v$1.umbrella,
			v$1.card,
			v$1.photo
		],
		exercises: [
			choice$1("th-en", v$1.phone, [
				v$1.money,
				v$1.bag,
				v$1.book
			]),
			choice$1("en-th", v$1.money, [
				v$1.bag,
				v$1.card,
				v$1.phone
			]),
			choice$1("listen", v$1.umbrella, [
				v$1.bag,
				v$1.pen,
				v$1.paper
			]),
			tiles$1("I forgot the key", [
				SELF$1,
				t$1(v$1.forget),
				t$1(v$1.key)
			], [t$1(v$1.phone), t$1(v$1.bag)]),
			tiles$1("Read a book", [t$1(v$1.read), t$1(v$1.book)], [
				t$1(v$1.write),
				t$1(v$1.paper),
				t$1(v$1.pen)
			]),
			pairs$1([
				v$1.phone,
				v$1.money,
				v$1.bag,
				v$1.book
			]),
			pairs$1([
				v$1.pen,
				v$1.paper,
				v$1.umbrella,
				v$1.card
			])
		]
	},
	{
		id: "clothes",
		unit: "home-things",
		title: "What You Wear",
		subtitle: "Shirts, shoes, and putting on",
		tip: "ใส่ works for wearing clothes, glasses, shoes, and even putting ice in a glass.",
		words: [
			v$1.shirt,
			v$1.pants,
			v$1.skirt,
			v$1.shoes,
			v$1.socks,
			v$1.hat,
			v$1.glasses,
			v$1.wear,
			v$1.takeOff,
			v$1.outfit
		],
		exercises: [
			choice$1("th-en", v$1.shirt, [
				v$1.pants,
				v$1.skirt,
				v$1.hat
			]),
			choice$1("en-th", v$1.shoes, [
				v$1.socks,
				v$1.pants,
				v$1.glasses
			]),
			choice$1("listen", v$1.glasses, [
				v$1.hat,
				v$1.shoes,
				v$1.shirt
			]),
			tiles$1("Take off shoes", [t$1(v$1.takeOff), t$1(v$1.shoes)], [
				t$1(v$1.wear),
				t$1(v$1.socks),
				t$1(v$1.hat)
			]),
			tiles$1("Wear a shirt", [t$1(v$1.wear), t$1(v$1.shirt)], [t$1(v$1.takeOff), t$1(v$1.pants)]),
			pairs$1([
				v$1.shirt,
				v$1.pants,
				v$1.skirt,
				v$1.hat
			]),
			pairs$1([
				v$1.shoes,
				v$1.socks,
				v$1.glasses,
				v$1.outfit
			])
		]
	},
	{
		id: "body-parts",
		unit: "body-health",
		title: "Head to Toe",
		subtitle: "Essential body parts",
		tip: "รองเท้า (shoes) and ถุงเท้า (socks) both contain เท้า (foot)—literally foot-support and foot-bag.",
		words: [
			v$1.head,
			v$1.face,
			v$1.eye,
			v$1.ear,
			v$1.nose,
			v$1.mouth,
			v$1.tooth,
			v$1.hand,
			v$1.foot,
			v$1.stomach
		],
		exercises: [
			choice$1("th-en", v$1.head, [
				v$1.face,
				v$1.hand,
				v$1.foot
			]),
			choice$1("en-th", v$1.eye, [
				v$1.ear,
				v$1.nose,
				v$1.mouth
			]),
			choice$1("listen", v$1.stomach, [
				v$1.hand,
				v$1.foot,
				v$1.tooth
			]),
			tiles$1("Wash hands", [t$1(v$1.wash), t$1(v$1.hand)], [
				t$1(v$1.foot),
				t$1(v$1.face),
				t$1(v$1.mouth)
			]),
			pairs$1([
				v$1.head,
				v$1.face,
				v$1.eye,
				v$1.ear
			]),
			pairs$1([
				v$1.nose,
				v$1.mouth,
				v$1.hand,
				v$1.stomach
			]),
			choice$1("th-en", v$1.tooth, [
				v$1.mouth,
				v$1.nose,
				v$1.ear
			])
		]
	},
	{
		id: "at-clinic",
		unit: "body-health",
		title: "Not Feeling Well",
		subtitle: "Pain, medicine, and allergies",
		tip: "ปวด means an ache (ปวดหัว headache, ปวดท้อง stomachache). เจ็บ is sharp pain or soreness.",
		words: [
			v$1.hurt,
			v$1.ache,
			v$1.headache,
			v$1.stomachache,
			v$1.fever,
			v$1.sick,
			v$1.medicine,
			v$1.allergic,
			v$1.recover,
			v$1.healthy
		],
		exercises: [
			choice$1("th-en", v$1.headache, [
				v$1.stomachache,
				v$1.fever,
				v$1.sick
			]),
			choice$1("en-th", v$1.medicine, [
				v$1.sick,
				v$1.fever,
				v$1.doctor
			]),
			choice$1("listen", v$1.allergic, [
				v$1.hurt,
				v$1.recover,
				v$1.healthy
			]),
			tiles$1("I have a headache", [
				SELF$1,
				t$1(v$1.headache),
				POLITE$1
			], [t$1(v$1.stomachache), t$1(v$1.medicine)]),
			tiles$1("Buy medicine", [t$1(v$1.buy), t$1(v$1.medicine)], [
				t$1(v$1.sick),
				t$1(v$1.fever),
				t$1(v$1.hurt)
			]),
			pairs$1([
				v$1.hurt,
				v$1.headache,
				v$1.stomachache,
				v$1.sick
			]),
			pairs$1([
				v$1.fever,
				v$1.medicine,
				v$1.allergic,
				v$1.healthy
			])
		]
	},
	{
		id: "colors-a1",
		unit: "adjectives-a1",
		title: "Colors",
		subtitle: "Ten everyday colors",
		tip: "Colors start with สี (color) and go AFTER the noun: เสื้อสีขาว (a white shirt).",
		words: [
			v$1.color,
			v$1.red,
			v$1.white,
			v$1.black,
			v$1.blue,
			v$1.green,
			v$1.yellow,
			v$1.pink,
			v$1.orange,
			v$1.brown
		],
		exercises: [
			choice$1("th-en", v$1.red, [
				v$1.white,
				v$1.black,
				v$1.pink
			]),
			choice$1("en-th", v$1.white, [
				v$1.black,
				v$1.yellow,
				v$1.blue
			]),
			choice$1("listen", v$1.green, [
				v$1.blue,
				v$1.yellow,
				v$1.brown
			]),
			tiles$1("White shirt", [t$1(v$1.shirt), t$1(v$1.white)], [t$1(v$1.black), t$1(v$1.pants)]),
			pairs$1([
				v$1.red,
				v$1.white,
				v$1.black,
				v$1.blue
			]),
			pairs$1([
				v$1.green,
				v$1.yellow,
				v$1.pink,
				v$1.orange
			]),
			choice$1("th-en", v$1.brown, [
				v$1.orange,
				v$1.black,
				v$1.red
			])
		]
	},
	{
		id: "opposites-a1",
		unit: "adjectives-a1",
		title: "Big, New & Easy",
		subtitle: "Core adjectives",
		tip: "Adjectives work directly as predicates in Thai—no verb 'to be' needed: อันนี้ใหญ่ (this one is big).",
		words: [
			v$1.big,
			v$1.small,
			v$1.pretty,
			v$1.good,
			v$1.newW,
			v$1.oldThing,
			v$1.easy,
			v$1.hard,
			v$1.fast,
			v$1.slow
		],
		exercises: [
			choice$1("th-en", v$1.big, [
				v$1.small,
				v$1.newW,
				v$1.good
			]),
			choice$1("en-th", v$1.easy, [
				v$1.hard,
				v$1.fast,
				v$1.slow
			]),
			choice$1("listen", v$1.newW, [
				v$1.oldThing,
				v$1.pretty,
				v$1.good
			]),
			tiles$1("Very good", [t$1(v$1.good), t$1(v$1.many)], [t$1(v$1.small), t$1(v$1.oldThing)]),
			tiles$1("Very easy", [t$1(v$1.easy), t$1(v$1.many)], [t$1(v$1.hard), t$1(v$1.slow)]),
			pairs$1([
				v$1.big,
				v$1.small,
				v$1.newW,
				v$1.oldThing
			]),
			pairs$1([
				v$1.easy,
				v$1.hard,
				v$1.fast,
				v$1.slow
			])
		]
	},
	{
		id: "feelings-a1",
		unit: "adjectives-a1",
		title: "Moods & Energy",
		subtitle: "Hot, happy, busy, sleepy",
		tip: "Many Thai feelings use ใจ (heart/mind): ดีใจ (good-heart = happy), เสียใจ (broken-heart = sad).",
		words: [
			v$1.hot,
			v$1.cold,
			v$1.happy,
			v$1.sad,
			v$1.angry,
			v$1.afraid,
			v$1.bored,
			v$1.busy,
			v$1.free,
			v$1.sleepy
		],
		exercises: [
			choice$1("th-en", v$1.happy, [
				v$1.sad,
				v$1.angry,
				v$1.sleepy
			]),
			choice$1("en-th", v$1.busy, [
				v$1.free,
				v$1.bored,
				v$1.hot
			]),
			choice$1("listen", v$1.sleepy, [
				v$1.afraid,
				v$1.cold,
				v$1.angry
			]),
			tiles$1("Today is hot", [t$1(v$1.today), t$1(v$1.hot)], [t$1(v$1.cold), t$1(v$1.tomorrow)]),
			tiles$1("I'm free tomorrow", [
				t$1(v$1.tomorrow),
				SELF$1,
				t$1(v$1.free)
			], [t$1(v$1.busy), t$1(v$1.today)]),
			pairs$1([
				v$1.hot,
				v$1.cold,
				v$1.happy,
				v$1.sad
			]),
			pairs$1([
				v$1.busy,
				v$1.free,
				v$1.bored,
				v$1.sleepy
			])
		]
	},
	{
		id: "questions-a1",
		unit: "grammar-a1",
		title: "Who, Why & When",
		subtitle: "Essential question words",
		tip: "Question words usually stay right where the answer goes, instead of moving to the start of the sentence.",
		words: [
			v$1.who,
			v$1.which,
			v$1.when,
			v$1.why,
			v$1.how,
			v$1.whichOne,
			v$1.what,
			v$1.whatKind
		],
		exercises: [
			choice$1("th-en", v$1.who, [
				v$1.what,
				v$1.when,
				v$1.why
			]),
			choice$1("en-th", v$1.when, [
				v$1.why,
				v$1.how,
				v$1.who
			]),
			choice$1("listen", v$1.why, [
				v$1.how,
				v$1.what,
				v$1.which
			]),
			tiles$1("Go when?", [
				t$1(v$1.go),
				t$1(v$1.when),
				POLITE_Q$1
			], [t$1(v$1.why), t$1(v$1.who)]),
			tiles$1("Which one?", [t$1(v$1.whichOne), POLITE_Q$1], [t$1(v$1.what), t$1(v$1.how)]),
			pairs$1([
				v$1.who,
				v$1.what,
				v$1.when,
				v$1.why
			]),
			pairs$1([
				v$1.how,
				v$1.whichOne,
				v$1.which,
				v$1.whatKind
			])
		]
	},
	{
		id: "connectors-a1",
		unit: "grammar-a1",
		title: "And, But & Future",
		subtitle: "Linking words and tense markers",
		tip: "กำลัง (doing now), จะ (will), and แล้ว (already) give you past, present, and future without verb conjugation.",
		words: [
			v$1.andW,
			v$1.withW,
			v$1.orW,
			v$1.butW,
			v$1.because,
			v$1.ifW,
			v$1.already,
			v$1.currently,
			v$1.willW,
			v$1.mustW,
			v$1.everW,
			v$1.alsoW
		],
		exercises: [
			choice$1("th-en", v$1.butW, [
				v$1.orW,
				v$1.andW,
				v$1.because
			]),
			choice$1("en-th", v$1.because, [
				v$1.ifW,
				v$1.butW,
				v$1.alsoW
			]),
			choice$1("listen", v$1.already, [
				v$1.currently,
				v$1.willW,
				v$1.everW
			]),
			tiles$1("I will go tomorrow", [
				SELF$1,
				t$1(v$1.willW),
				t$1(v$1.go),
				t$1(v$1.tomorrow)
			], [t$1(v$1.already), t$1(v$1.yesterday)]),
			tiles$1("Tea or coffee?", [
				t$1(v$1.tea),
				t$1(v$1.orW),
				t$1(v$1.coffee),
				POLITE_Q$1
			], [t$1(v$1.andW), t$1(v$1.butW)]),
			pairs$1([
				v$1.andW,
				v$1.orW,
				v$1.butW,
				v$1.because
			]),
			pairs$1([
				v$1.already,
				v$1.currently,
				v$1.willW,
				v$1.mustW
			])
		]
	},
	{
		id: "positions-a1",
		unit: "grammar-a1",
		title: "Where Things Are",
		subtitle: "In, on, under, next to",
		tip: "Place อยู่ (located) + position word + noun: อยู่บนโต๊ะ (it is on the table).",
		words: [
			v$1.inW,
			v$1.onW,
			v$1.underW,
			v$1.inFront,
			v$1.behind,
			v$1.nextTo,
			v$1.between,
			v$1.fromW,
			v$1.toUntil,
			v$1.ofBelong
		],
		exercises: [
			choice$1("th-en", v$1.onW, [
				v$1.inW,
				v$1.underW,
				v$1.nextTo
			]),
			choice$1("en-th", v$1.inFront, [
				v$1.behind,
				v$1.nextTo,
				v$1.between
			]),
			choice$1("listen", v$1.nextTo, [
				v$1.inFront,
				v$1.behind,
				v$1.underW
			]),
			tiles$1("On the table", [
				t$1(v$1.located),
				t$1(v$1.onW),
				t$1(v$1.table)
			], [t$1(v$1.inW), t$1(v$1.underW)]),
			tiles$1("In the bag", [
				t$1(v$1.located),
				t$1(v$1.inW),
				t$1(v$1.bag)
			], [t$1(v$1.onW), t$1(v$1.behind)]),
			pairs$1([
				v$1.inW,
				v$1.onW,
				v$1.underW,
				v$1.nextTo
			]),
			pairs$1([
				v$1.inFront,
				v$1.behind,
				v$1.fromW,
				v$1.toUntil
			])
		]
	},
	{
		id: "shopping-a1",
		unit: "shopping-hobbies",
		title: "At the Shop",
		subtitle: "Paying, trying on, open & closed",
		tip: "Use เงินสด for cash and บัตรเครดิต for card. เปิด / ปิด works for doors, shops, and lights.",
		words: [
			v$1.price,
			v$1.discount,
			v$1.cash,
			v$1.creditCard,
			v$1.receipt,
			v$1.plasticBag,
			v$1.tryW,
			v$1.changeW,
			v$1.openW,
			v$1.closeW,
			v$1.ready
		],
		exercises: [
			choice$1("th-en", v$1.discount, [
				v$1.price,
				v$1.receipt,
				v$1.cash
			]),
			choice$1("en-th", v$1.receipt, [
				v$1.cash,
				v$1.creditCard,
				v$1.plasticBag
			]),
			choice$1("listen", v$1.openW, [
				v$1.closeW,
				v$1.ready,
				v$1.tryW
			]),
			tiles$1("Pay by cash", [t$1(v$1.pay), t$1(v$1.cash)], [t$1(v$1.creditCard), t$1(v$1.receipt)]),
			tiles$1("Shop is open", [
				t$1(v$1.shop),
				t$1(v$1.openW),
				t$1(v$1.already)
			], [t$1(v$1.closeW), t$1(v$1.price)]),
			pairs$1([
				v$1.price,
				v$1.discount,
				v$1.cash,
				v$1.receipt
			]),
			pairs$1([
				v$1.openW,
				v$1.closeW,
				v$1.tryW,
				v$1.ready
			])
		]
	},
	{
		id: "hobbies-a1",
		unit: "shopping-hobbies",
		title: "Free Time",
		subtitle: "Travel, beach, music, and movies",
		tip: "ไปเที่ยว means going out for fun or traveling on a trip.",
		words: [
			v$1.travel,
			v$1.sea,
			v$1.mountain,
			v$1.takePhoto,
			v$1.walk,
			v$1.run,
			v$1.swim,
			v$1.music,
			v$1.movie,
			v$1.sport,
			v$1.game
		],
		exercises: [
			choice$1("th-en", v$1.sea, [
				v$1.mountain,
				v$1.travel,
				v$1.swim
			]),
			choice$1("en-th", v$1.takePhoto, [
				v$1.travel,
				v$1.walk,
				v$1.movie
			]),
			choice$1("listen", v$1.music, [
				v$1.movie,
				v$1.sport,
				v$1.game
			]),
			tiles$1("Go to the beach", [
				t$1(v$1.go),
				t$1(v$1.travel),
				t$1(v$1.sea)
			], [t$1(v$1.mountain), t$1(v$1.park)]),
			tiles$1("Listen to music", [t$1(v$1.listen), t$1(v$1.music)], [t$1(v$1.watch), t$1(v$1.movie)]),
			pairs$1([
				v$1.sea,
				v$1.mountain,
				v$1.music,
				v$1.movie
			]),
			pairs$1([
				v$1.walk,
				v$1.run,
				v$1.swim,
				v$1.sport
			])
		]
	},
	{
		id: "checkpoint-a1",
		unit: "shopping-hobbies",
		title: "A1 Milestone",
		subtitle: "Checkpoint 2 · Full CEFR A1",
		tip: "Everything from greetings, numbers, calendar, daily verbs, health, questions, and shopping.",
		checkpoint: true,
		words: [],
		exercises: [
			choice$1("listen", v$1.headache, [
				v$1.stomachache,
				v$1.medicine,
				v$1.fever
			]),
			tiles$1("I will go tomorrow", [
				SELF$1,
				t$1(v$1.willW),
				t$1(v$1.go),
				t$1(v$1.tomorrow)
			], [t$1(v$1.yesterday), t$1(v$1.already)]),
			tiles$1("Two bottles of water", [
				t$1(v$1.water),
				t$1(v$1.two),
				t$1(v$1.clfBottle)
			], [t$1(v$1.clfGlass), t$1(v$1.ice)]),
			choice$1("th-en", v$1.friday, [
				v$1.monday,
				v$1.saturday,
				v$1.sunday
			]),
			tiles$1("Pay by cash", [
				t$1(v$1.pay),
				t$1(v$1.cash),
				POLITE$1
			], [t$1(v$1.creditCard), t$1(v$1.receipt)]),
			pairs$1([
				v$1.because,
				v$1.butW,
				v$1.onW,
				v$1.behind
			]),
			tiles$1("I don't know", [
				SELF$1,
				t$1(v$1.no),
				t$1(v$1.know),
				POLITE$1
			], [t$1(v$1.remember), t$1(v$1.forget)]),
			choice$1("en-th", v$1.discount, [
				v$1.price,
				v$1.receipt,
				v$1.changeW
			])
		]
	}
];
var w = (id, thai, roman, en, pos, topic) => ({
	id,
	thai,
	roman,
	en,
	level: "A2",
	pos,
	topic
});
var t = (word) => ({
	kind: "w",
	word
});
var SELF = { kind: "self" };
var OTHER = { kind: "other-self" };
var POLITE = { kind: "polite" };
var POLITE_Q = {
	kind: "polite",
	q: true
};
var choice = (dir, word, traps, coach) => ({
	kind: "choice",
	dir,
	word,
	traps,
	coach
});
var tiles = (prompt, answer, extra, coach) => ({
	kind: "tiles",
	prompt,
	answer,
	extra,
	coach
});
var pairs = (list, coach) => ({
	kind: "pairs",
	pairs: list,
	coach
});
var a1 = a1Vocab;
var a2Vocab = {
	padThai: w("a2-pad-thai", "ผัดไทย", "phàt-thai", "Pad Thai", "noun", "Food & Dining"),
	somtam: w("a2-somtam", "ส้มตำ", "sôm-dtam", "Papaya salad", "noun", "Food & Dining"),
	chicken: w("a2-chicken", "ไก่", "gài", "Chicken", "noun", "Food & Dining"),
	pork: w("a2-pork", "หมู", "mǔu", "Pork", "noun", "Food & Dining"),
	special: w("a2-special", "พิเศษ", "phí-sèet", "Extra / large portion", "adjective", "Food & Dining"),
	regular: w("a2-regular", "ธรรมดา", "tham-má-daa", "Regular portion", "adjective", "Food & Dining"),
	lessSweet: w("a2-less-sweet", "หวานน้อย", "wǎan-náawy", "Less sweet", "phrase", "Food & Dining"),
	without: w("a2-without", "ไม่ใส่", "mâi-sài", "Without / no topping", "phrase", "Food & Dining"),
	spoon: w("a2-spoon", "ช้อน", "cháawn", "Spoon", "noun", "Food & Dining"),
	fork: w("a2-fork", "ส้อม", "sâawm", "Fork", "noun", "Food & Dining"),
	chopsticks: w("a2-chopsticks", "ตะเกียบ", "dtà-gìiap", "Chopsticks", "noun", "Food & Dining"),
	full: w("a2-full", "อิ่ม", "ìm", "Full (after eating)", "adjective", "Food & Dining"),
	bill: w("a2-bill", "เช็คบิล", "chék-bin", "The bill", "phrase", "Food & Dining"),
	plainWater: w("a2-plain-water", "น้ำเปล่า", "náam-bplào", "Plain water", "noun", "Food & Dining"),
	orderW: w("a2-order", "สั่ง", "sàng", "To order", "verb", "Food & Dining"),
	takeaway: w("a2-takeaway", "ใส่ถุง", "sài-thǔng", "To pack to go", "phrase", "Food & Dining"),
	flavor: w("a2-flavor", "รสชาติ", "rót-châat", "Taste / flavor", "noun", "Food & Dining"),
	enough: w("a2-enough", "พอ", "phaaw", "Enough", "adverb", "Food & Dining"),
	near: w("a2-near", "ใกล้", "glâi", "Near", "adjective", "Travel & Transit"),
	far: w("a2-far", "ไกล", "glai", "Far", "adjective", "Travel & Transit"),
	here: w("a2-here", "ที่นี่", "thîi-nîi", "Here", "adverb", "Travel & Transit"),
	there: w("a2-there", "ที่นั่น", "thîi-nân", "There", "adverb", "Travel & Transit"),
	stop: w("a2-stop", "หยุด", "yùt", "Stop", "verb", "Travel & Transit"),
	intersection: w("a2-intersection", "สี่แยก", "sìi-yâaek", "Four-way intersection", "noun", "Travel & Transit"),
	crossRoad: w("a2-cross-road", "ข้ามถนน", "khâam-thà-nǒn", "To cross the street", "verb", "Travel & Transit"),
	exitW: w("a2-exit", "ทางออก", "thaang-àawk", "Exit", "noun", "Travel & Transit"),
	hotel: w("a2-hotel", "โรงแรม", "roong-raaem", "Hotel", "noun", "Travel & Transit"),
	station: w("a2-station", "สถานี", "sà-thǎa-nii", "Station", "noun", "Travel & Transit"),
	airport: w("a2-airport", "สนามบิน", "sà-naam-bin", "Airport", "noun", "Travel & Transit"),
	bus: w("a2-bus", "รถเมล์", "rót-mee", "Bus", "noun", "Travel & Transit"),
	skytrain: w("a2-skytrain", "รถไฟฟ้า", "rót-fai-fáa", "Skytrain", "noun", "Travel & Transit"),
	train: w("a2-train", "รถไฟ", "rót-fai", "Train", "noun", "Travel & Transit"),
	boat: w("a2-boat", "เรือ", "ruea", "Boat / ferry", "noun", "Travel & Transit"),
	ticket: w("a2-ticket", "ตั๋ว", "dtǔa", "Ticket", "noun", "Travel & Transit"),
	mapW: w("a2-map", "แผนที่", "phǎaen-thîi", "Map", "noun", "Travel & Transit"),
	reserve: w("a2-reserve", "จอง", "jaawng", "To book / reserve", "verb", "Travel & Transit"),
	nameW: w("a2-name", "ชื่อ", "chûue", "Name", "noun", "Conversation"),
	thaiPerson: w("a2-thai-person", "คนไทย", "khon-thai", "Thai person", "noun", "Conversation"),
	age: w("a2-age", "อายุ", "aa-yú", "Age", "noun", "Conversation"),
	reside: w("a2-reside", "อาศัย", "aa-sǎi", "To live / reside", "verb", "Conversation"),
	comeFrom: w("a2-come-from", "มาจาก", "maa-jàak", "To come from", "phrase", "Conversation"),
	speak: w("a2-speak", "พูด", "phûut", "To speak", "verb", "Conversation"),
	understand: w("a2-understand", "เข้าใจ", "khâo-jai", "To understand", "verb", "Conversation"),
	aLittle: w("a2-a-little", "นิดหน่อย", "nít-nòi", "A little", "adverb", "Conversation"),
	slowly: w("a2-slowly", "ช้าๆ", "cháa-cháa", "Slowly", "adverb", "Conversation"),
	thaiLang: w("a2-thai-lang", "ภาษาไทย", "phaa-sǎa-thai", "Thai language", "noun", "Conversation"),
	meaning: w("a2-meaning", "ความหมาย", "khwaam-mǎai", "Meaning", "noun", "Conversation"),
	rain: w("a2-rain", "ฝน", "fǒn", "Rain", "noun", "Weather & Opinions"),
	fall: w("a2-fall", "ตก", "dtòk", "To fall / drop", "verb", "Weather & Opinions"),
	sunshine: w("a2-sunshine", "แดด", "dàaet", "Sunshine", "noun", "Weather & Opinions"),
	wind: w("a2-wind", "ลม", "lom", "Wind", "noun", "Weather & Opinions"),
	tired: w("a2-tired", "เหนื่อย", "nùeai", "Tired", "adjective", "Weather & Opinions"),
	like: w("a2-like", "ชอบ", "châawp", "To like", "verb", "Weather & Opinions"),
	fun: w("a2-fun", "สนุก", "sà-nùk", "Fun", "adjective", "Weather & Opinions")
};
var v = a2Vocab;
var nearCoach = "ใกล้ falls and means near. ไกล is mid and means far.";
var a2Units = [
	{
		id: "meal",
		level: "A2",
		kicker: "A2 · Unit 1",
		title: "Ordering Like a Local",
		blurb: "Customize Thai dishes, ask for utensils, and settle the bill."
	},
	{
		id: "going",
		level: "A2",
		kicker: "A2 · Unit 2",
		title: "Getting Around Thailand",
		blurb: "Near and far, intersections, transit, and booking tickets."
	},
	{
		id: "talking",
		level: "A2",
		kicker: "A2 · Unit 3",
		title: "Conversation & Repair",
		blurb: "Introduce yourself and ask someone to slow down."
	},
	{
		id: "out",
		level: "A2",
		kicker: "A2 · Unit 4",
		title: "Out for the Day",
		blurb: "Weather, energy, opinions, and the course finale."
	}
];
var a2Lessons = [
	{
		id: "a2-food-custom",
		unit: "meal",
		title: "Customize Your Dish",
		subtitle: "Portions, sweetness, and utensils",
		tip: "Say หวานน้อย at drink stalls for less sweet, and ธรรมดา or พิเศษ for regular or extra portion.",
		words: [
			v.padThai,
			v.somtam,
			v.chicken,
			v.pork,
			v.special,
			v.regular,
			v.lessSweet,
			v.without,
			v.spoon,
			v.fork,
			v.chopsticks
		],
		exercises: [
			choice("th-en", v.padThai, [
				v.somtam,
				v.chicken,
				v.pork
			]),
			choice("en-th", v.lessSweet, [
				v.special,
				v.regular,
				v.without
			]),
			choice("listen", v.somtam, [
				v.padThai,
				v.chicken,
				v.chopsticks
			]),
			tiles("Chicken Pad Thai", [t(v.padThai), t(v.chicken)], [t(v.pork), t(v.somtam)]),
			tiles("Coffee, less sweet", [
				t(a1.coffee),
				t(v.lessSweet),
				POLITE
			], [t(v.special), t(v.without)]),
			pairs([
				v.padThai,
				v.somtam,
				v.chicken,
				v.pork
			]),
			pairs([
				v.special,
				v.regular,
				v.spoon,
				v.fork
			])
		]
	},
	{
		id: "a2-bill",
		unit: "meal",
		title: "The Bill & Takeaway",
		subtitle: "Full, plain water, and packing to go",
		tip: "เช็คบิลครับ or ค่ะ gets the check. ใส่ถุง asks the stall to bag your food to go.",
		words: [
			v.full,
			v.bill,
			v.plainWater,
			v.orderW,
			v.takeaway,
			v.flavor,
			v.enough
		],
		exercises: [
			choice("th-en", v.bill, [
				v.full,
				v.plainWater,
				v.takeaway
			]),
			choice("en-th", v.plainWater, [
				v.bill,
				v.full,
				v.flavor
			]),
			choice("listen", v.full, [
				v.enough,
				v.bill,
				v.orderW
			]),
			tiles("The bill, please", [t(v.bill), POLITE], [t(v.plainWater), t(v.full)]),
			tiles("Pack it to go", [t(v.takeaway), POLITE], [t(v.orderW), t(v.bill)]),
			pairs([
				v.full,
				v.bill,
				v.plainWater,
				v.orderW
			]),
			choice("th-en", v.enough, [
				v.full,
				v.flavor,
				v.takeaway
			])
		]
	},
	{
		id: "a2-directions",
		unit: "going",
		title: "Near & Far",
		subtitle: "Distance, intersections, and exits",
		tip: "ใกล้ (falling) is near. ไกล (mid) is far. Say จอด / หยุด here to stop a taxi or songthaew.",
		words: [
			v.near,
			v.far,
			v.here,
			v.there,
			v.stop,
			v.intersection,
			v.crossRoad,
			v.exitW
		],
		exercises: [
			choice("th-en", v.near, [
				v.far,
				v.here,
				v.there
			], nearCoach),
			choice("en-th", v.far, [
				v.near,
				v.here,
				v.there
			], nearCoach),
			choice("listen", v.here, [
				v.there,
				v.near,
				v.stop
			]),
			tiles("Stop here", [
				t(v.stop),
				t(v.here),
				POLITE
			], [t(v.there), t(v.near)]),
			tiles("Not far from here", [
				t(a1.no),
				t(v.far),
				t(a1.fromW),
				t(v.here)
			], [t(v.near), t(v.there)], nearCoach),
			pairs([
				v.near,
				v.far,
				v.here,
				v.there
			]),
			pairs([
				v.stop,
				v.intersection,
				v.crossRoad,
				v.exitW
			])
		]
	},
	{
		id: "a2-transit",
		unit: "going",
		title: "Transit & Travel",
		subtitle: "Skytrain, boat, tickets, and hotels",
		tip: "รถไฟฟ้า is the BTS/MRT skytrain, รถไฟ is the intercity train, and รถเมล์ is the city bus.",
		words: [
			v.hotel,
			v.station,
			v.airport,
			v.bus,
			v.skytrain,
			v.train,
			v.boat,
			v.ticket,
			v.mapW,
			v.reserve
		],
		exercises: [
			choice("th-en", v.hotel, [
				v.station,
				v.airport,
				v.ticket
			]),
			choice("en-th", v.airport, [
				v.station,
				v.hotel,
				v.bus
			]),
			choice("listen", v.skytrain, [
				v.train,
				v.bus,
				v.boat
			]),
			tiles("Where is the station?", [
				t(v.station),
				t(a1.located),
				t(a1.where),
				POLITE_Q
			], [t(v.hotel), t(v.airport)]),
			tiles("Book a hotel", [t(v.reserve), t(v.hotel)], [t(v.ticket), t(v.mapW)]),
			pairs([
				v.hotel,
				v.station,
				v.airport,
				v.ticket
			]),
			pairs([
				v.bus,
				v.skytrain,
				v.train,
				v.boat
			])
		]
	},
	{
		id: "a2-intro",
		unit: "talking",
		title: "Introducing Yourself",
		subtitle: "Name, nationality, and origin",
		tip: "ฉัน/ผมมาจาก… says where you come from. ชื่ออะไร asks someone's name politely.",
		words: [
			v.nameW,
			v.thaiPerson,
			v.age,
			v.reside,
			v.comeFrom
		],
		exercises: [
			choice("th-en", v.nameW, [
				v.age,
				v.thaiPerson,
				v.reside
			]),
			choice("en-th", v.comeFrom, [
				v.reside,
				v.nameW,
				v.age
			]),
			choice("listen", v.thaiPerson, [
				v.nameW,
				v.age,
				v.reside
			]),
			tiles("What's your name?", [
				t(v.nameW),
				t(a1.what),
				POLITE_Q
			], [t(v.age), t(a1.you)]),
			tiles("My name...", [SELF, t(v.nameW)], [OTHER, t(a1.what)]),
			pairs([
				v.nameW,
				v.thaiPerson,
				v.age,
				v.reside
			]),
			choice("th-en", v.age, [
				v.nameW,
				v.reside,
				v.comeFrom
			])
		]
	},
	{
		id: "a2-slowly",
		unit: "talking",
		title: "When You're Stuck",
		subtitle: "Ask people to repeat or slow down",
		tip: "ไม่เข้าใจ is one of the highest-value phrases you can know. พูดช้าๆ asks someone to speak slowly.",
		words: [
			v.speak,
			v.understand,
			v.aLittle,
			v.slowly,
			v.thaiLang,
			v.meaning
		],
		exercises: [
			choice("th-en", v.understand, [
				v.speak,
				v.slowly,
				v.aLittle
			]),
			choice("en-th", v.speak, [
				v.understand,
				v.slowly,
				v.thaiLang
			]),
			choice("listen", v.slowly, [
				v.aLittle,
				v.speak,
				v.understand
			]),
			tiles("I don't understand", [
				SELF,
				t(a1.no),
				t(v.understand),
				POLITE
			], [t(v.speak), OTHER]),
			tiles("Speak slowly", [
				t(v.speak),
				t(v.slowly),
				POLITE
			], [t(v.aLittle), t(v.understand)]),
			tiles("A little Thai", [t(v.thaiLang), t(v.aLittle)], [t(v.speak), t(v.slowly)]),
			pairs([
				v.speak,
				v.understand,
				v.slowly,
				v.aLittle
			])
		]
	},
	{
		id: "a2-weather",
		unit: "out",
		title: "Weather & Opinions",
		subtitle: "Rain, sun, wind, and likes",
		tip: "ฝนตก means it is raining. ชอบ goes straight before the verb or noun you like.",
		words: [
			v.rain,
			v.fall,
			v.sunshine,
			v.wind,
			v.tired,
			v.like,
			v.fun
		],
		exercises: [
			choice("th-en", v.rain, [
				v.sunshine,
				v.wind,
				v.tired
			]),
			choice("en-th", v.tired, [
				v.fun,
				v.like,
				v.rain
			]),
			choice("listen", v.like, [
				v.fun,
				v.tired,
				v.wind
			]),
			tiles("It's raining", [t(v.rain), t(v.fall)], [t(v.sunshine), t(v.wind)]),
			tiles("I like Thailand", [
				SELF,
				t(v.like),
				t(a1.thailand)
			], [
				t(a1.no),
				OTHER,
				t(v.tired)
			]),
			pairs([
				v.rain,
				v.sunshine,
				v.wind,
				v.tired
			]),
			choice("th-en", v.fun, [
				v.tired,
				v.like,
				v.rain
			])
		]
	},
	{
		id: "checkpoint-2",
		unit: "out",
		title: "Course Finale",
		subtitle: "Checkpoint 3 · A1 & A2 Review",
		tip: "A full mix across A1 and A2—food customization, transit, health, and conversation repair.",
		checkpoint: true,
		words: [],
		exercises: [
			choice("listen", v.understand, [
				a1.hello,
				a1.thanks,
				v.rain
			]),
			tiles("I don't understand", [
				SELF,
				t(a1.no),
				t(v.understand),
				POLITE
			], [t(v.speak), t(a1.yes)]),
			tiles("Where is the hotel?", [
				t(v.hotel),
				t(a1.located),
				t(a1.where),
				POLITE_Q
			], [t(v.station), t(a1.market)]),
			tiles("Less sweet", [t(v.lessSweet), POLITE], [t(a1.many), t(a1.tasty)]),
			choice("th-en", a1.tomorrow, [
				a1.today,
				a1.yesterday,
				a1.now
			]),
			choice("en-th", v.bill, [
				v.full,
				a1.water,
				a1.hundred
			]),
			pairs([
				v.near,
				a1.white,
				v.chicken,
				a1.twenty
			]),
			tiles("Speak slowly", [
				t(v.speak),
				t(v.slowly),
				POLITE
			], [t(v.aLittle), t(v.understand)]),
			choice("listen", v.padThai, [
				v.somtam,
				a1.rice,
				a1.water
			])
		]
	}
];
var levels = [{
	id: "A1",
	title: "A1 · Beginner",
	blurb: "Full CEFR A1 foundation: greetings, numbers, time, food, daily routines, health, grammar, and shopping."
}, {
	id: "A2",
	title: "A2 · Elementary",
	blurb: "Customize meals, navigate transit, introduce yourself, and handle conversations when stuck."
}];
var units = [...a1Units, ...a2Units];
var lessons = [...a1Lessons, ...a2Lessons];
var unitLevelById = new Map(units.map((u) => [u.id, u.level]));
var vocabularyCatalog = (() => {
	const entries = [];
	const seenThai = /* @__PURE__ */ new Set();
	let order = 1;
	for (const lesson of lessons) {
		const level = unitLevelById.get(lesson.unit) ?? "A1";
		for (const word of lesson.words) {
			if (seenThai.has(word.thai)) continue;
			seenThai.add(word.thai);
			entries.push({
				id: word.id ?? `w-${order}`,
				thai: word.thai,
				roman: word.roman,
				en: word.en,
				level: word.level ?? level,
				pos: word.pos ?? "phrase",
				topic: word.topic ?? "General",
				lessonId: lesson.id,
				unitId: lesson.unit,
				sortOrder: order
			});
			order += 1;
		}
	}
	return entries;
})();
var CURRICULUM_VERSION = `cefr-a1-v2-u${units.length}-l${lessons.length}-w${vocabularyCatalog.length}`;
var staticCurriculumCatalog = {
	version: CURRICULUM_VERSION,
	units,
	lessons,
	vocabulary: vocabularyCatalog
};
var courseNote = `Full CEFR A1 (${vocabularyCatalog.filter((v) => v.level === "A1").length} words) + A2 starter track, stored in PostgreSQL.`;
var dailyPhrases = [
	a1Vocab.hello,
	a1Vocab.thanks,
	a1Vocab.np,
	a1Vocab.howru,
	a1Vocab.tasty,
	a1Vocab.howMuch,
	a1Vocab.bathroom,
	a1Vocab.well,
	a1Vocab.left,
	a1Vocab.today,
	a1Vocab.whatTime,
	a2Vocab.understand,
	a2Vocab.padThai,
	a2Vocab.near
];
function lessonById(id, list = lessons) {
	return list.find((lesson) => lesson.id === id) ?? null;
}
function isUnlocked(id, completed, list = lessons, catalogUnits = units) {
	const index = list.findIndex((lesson) => lesson.id === id);
	if (index <= 0) return true;
	if (completed[id]) return true;
	const lesson = list[index];
	if (catalogUnits.find((u) => u.id === lesson.unit)?.level === "A2") {
		if (index === list.findIndex((l) => catalogUnits.find((u) => u.id === l.unit)?.level === "A2")) {
			if (list.some((l) => catalogUnits.find((u) => u.id === l.unit)?.level === "A2" && Boolean(completed[l.id]))) return true;
		}
	}
	return Boolean(completed[list[index - 1].id]);
}
function nextLesson(completed, list = lessons, catalogUnits = units) {
	return list.find((lesson) => !completed[lesson.id] && isUnlocked(lesson.id, completed, list, catalogUnits)) ?? null;
}
function resolveTok(tok, speaker) {
	if (tok.kind === "w") return tok.word;
	if (tok.kind === "self") return speaker === "m" ? a1Vocab.iM : a1Vocab.iF;
	if (tok.kind === "other-self") return speaker === "m" ? a1Vocab.iF : a1Vocab.iM;
	if (speaker === "m") return a1Vocab.khrap;
	if (tok.q) return a1Vocab.khaQ;
	return a1Vocab.kha;
}
function particleLabel(speaker) {
	return speaker === "m" ? "ครับ · khráp" : "ค่ะ · khâ";
}
export { lessonById as a, nextLesson as c, staticCurriculumCatalog as d, units as f, isUnlocked as i, particleLabel as l, courseNote as n, lessons as o, vocabularyCatalog as p, dailyPhrases as r, levels as s, CURRICULUM_VERSION as t, resolveTok as u };
