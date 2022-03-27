let level = 1;
let sessionData = {}
let session;
let cases = ["أ", "إ","ئ", "ء", "ؤ", "آ"];

// const lvlMap = {
// 	1: (67, 114),
// 	2: (39, 67),
// 	3: (25, 39),
// 	4: (18, 25),
// 	5: (1, 18),
// };
const lvlMap = {
	1: 114,
	2: 67,
	3: 39,
	4: 25,
	5: 18
};

const trans = {
	"أ": "ا",
	"آ": "ا",
	"ى" : "ي",
	"ء": "ا"
}