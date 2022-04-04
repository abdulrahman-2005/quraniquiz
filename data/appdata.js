let level = 1;
let type = 1;
let sessionData = {};
let session;
let cases = ["أ", "إ", "ئ", "ء", "ؤ", "آ"];
let users = [];
let userCount = 0;
let language = "Ar"
const lvlMap = {
	1: [76, 114],
	2: [39, 67],
	3: [25, 39],
	4: [18, 25],
	5: [1, 18],
};
// const lvlMap = {
// 	1: 114,
// 	2: 67,
// 	3: 39,
// 	4: 25,
// 	5: 18
// };

const trans = {
	أ: "ا",
	آ: "ا",
	ى: "ي",
	ء: "ا",
	إ: "ا",
	" ": "",
};

let logs = ["load.type"];

const alldata = {
	Ar: {
		settings: {
			direction: "rtl",
		},
		questions: [
			"اكتب رقم الاية",
			"اكتب الاية",
			"اكتب اسم السورة",
			"اكتب الاية التي تلي",
			"اكتب الاية السابقة",
		],
		allsurahs: ALLSURAHARABIC,
		content: {
			type: {
				chooseType: "اختر نوع الاسئلة",
				continuosQuestions: "اسئلة اكمال",
				diversiveQuestions: "اسئلة متنوعة",
			},
			chooseLevel: "اختر المستوى",
			levels: [
				"المستوى الاعلى",
				"المستوى الرابع",
				"المستوى الثالث",
				"المستوى الثاني",
				"المستوى الاول",
			],
			submit: "استمر",
			juz: "جزء",
			surah: "سورة",
			ayah: "اية رقم",
			scores: "النتائج",
			finsih: "انهاء",
			question: "السؤال",
		},
	},
	En: {
		settings: {
			direction: "ltr",
		},
		questions: [
			"Enter the number of the verse",
			"Enter the verse",
			"Enter the name of the surah",
			"Enter the next verse",
			"Enter the previous verse",
		],
		allsurahs: ALLSURAHARABIC,
		content: {
			type: {
				chooseType: "Choose the type",
				continuosQuestions: "Continuous questions",
				diversiveQuestions: "Diversive questions",
			},
			chooseLevel: "Choose the level",
			levels: [
				"Highest level",
				"Fourth level",
				"Third level",
				"Second level",
				"First level",
			],
			submit: "Submit",
			juz: "Juz",
			surah: "Surah",
			ayah: "Ayah",
			scores: "Scores",
			finsih: "Finish",
			question: "Question",
		},
	},
};

let ALLSURAH = alldata[language].allsurahs;
