function random(start, end) {
	if (end === undefined) {
		end = start;
		start = 0;
	}
	return Math.floor(Math.random() * (end - start) + start);
}

function goTo(URL) {
	const CONTAINER = document.getElementById("NAVNAVGO");
	CONTAINER.innerHTML = `<a href="${URL}" id="NAVREDIRECT"></a>`;
	const lnk = document.getElementById("NAVREDIRECT");
	lnk.click();
}

function dotsInRange(loops) {
	let output = "";
	for (let i = 0; i < loops; i++) {
		output += ".";
	}
	return output;
}

function sleep(seconds) {
	return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

function parseInput(text) {
	let output = "";
	text = text.toString().split(" ").join("");
	for (let i = 0; i < text.length; i++) {
		if (cases.includes(text[i])) {
			output += trans[text[i]];
		} else {
			output += text[i];
		}
	}
	return output;
}

function createTopperSpan(id, data = "") {
	return `<p id="${id}" class="top-span-p flexy-center">${data}</p>`;
}

function percentOfTwo(all, wins) {
	return Math.round((wins / all) * 100);
}

function back() {
	session = "";
	sessionData = {};
	if (logs.length < 2) return;
	actions[logs[logs.length - 2]].call(this, "NOLOGS");
	logs.pop();
}

const changeLangButton = document.getElementById("lang-button");
function changeLanguage() {
	changeLangButton.innerHTML = language;
	language = language === "Ar" ? "En" : "Ar";
	actions[logs[logs.length - 1]].call(this, "NOLOGS");
	ALLSURAH = ALLSURAHARABIC;
	SUOR = language === "Ar" ? SUORAR : SUOREN;
}
