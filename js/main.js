class normalSession {
	constructor(sessionData) {
		logs.push("load.type")
		loadNormalSession();
		this.data = {
			right: 0,
			wrong: 0,
		};
		this.questionArea = document.getElementById("question");
		this.submit = document.getElementById("submit");
		this.answerInput = document.getElementById("answer");
		this.sessionData = sessionData;
		this.quizNumber = 0;
		this.quizzesLength = Object.keys(sessionData).length;
		this.userarea = document.getElementById("userarea");
		this.topspan = document.getElementById("topspan");
		this.topspan.innerHTML = `
		${createTopperSpan("question-number")}
		${createTopperSpan("surahname")}
		${createTopperSpan("ayahnumber")}
		`;
		this.ayahnumber = document.getElementById("ayahnumber");
		this.surahname = document.getElementById("surahname");
		this.questionNumber = document.getElementById("question-number");
		this.submit.addEventListener("click", async () => {
			if (
				parseInput(this.answerInput.value) ===
				parseInput(this.sessionData[this.quizNumber].answer)
			) {
				console.log("it is right");
				this.data.right += 1;
				right();
			} else {
				this.questionArea.innerHTML =
					this.sessionData[this.quizNumber].reveal;
				console.log("it is wrong");
				this.data.wrong += 1;
				wrong();
			}
			await sleep(2);
			this.answerInput.value = "";
			this.nextQuestion();
		});
		this.start();
		this.answerInput.addEventListener("keyup", (e) => {
			if (e.code === "Enter") {
				this.submit.click();
			}
		});
	}
	nextQuestion() {
		this.quizNumber++;
		if (this.quizNumber > this.quizzesLength - 1) {
			this.finish();
		} else {
			this.start();
		}
	}
	start() {
		this.answerInput.focus();
		this.questionNumber.innerHTML = `${alldata[language].content.question} (${this.quizNumber + 1})`;
		this.questionArea.innerHTML =
			this.sessionData[this.quizNumber.toString()].question;
		this.surahname.innerHTML = `${alldata[language].content.surah} ${
			this.sessionData[this.quizNumber.toString()].data.surah
		}`;
		this.ayahnumber.innerHTML = `${alldata[language].content.ayah} (${
			this.sessionData[this.quizNumber.toString()].data.ayah + 1
		})`;
	}
	finish() {
		this.topspan.innerHTML = createTopperSpan("finisher", alldata[language].content.scores);
		let percent = percentOfTwo(this.quizzesLength, this.data.right);
		this.questionArea.innerHTML = `{ ${percent}% }
${percent > 50 ? alldata[language].content.welldone : alldata[language].content.tryagain}`;
		this.userarea.innerHTML = `<button class="finish flexy-center" onclick="loadType()"> ${alldata[language].content.finish} </button>`;
	}
}

class diverseSession {
	constructor(sessionData) {
		logs.push("load.type")
		loadDivSession();
		this.data = {
			right: 0,
			wrong: 0,
		};
		this.sessionData = sessionData;
		this.descriptionArea = document.getElementById("description");
		this.questionArea = document.getElementById("question");
		this.submit = document.getElementById("submit");
		this.answerInput = document.getElementById("answerInput");
		this.topspan = document.getElementById("topspan");
		this.quizNumber = 0;
		this.quizzesLength = Object.keys(sessionData).length;
		this.userarea = document.getElementById("userarea");
		this.submit.addEventListener("click", async () => {
			if (
				parseInput(this.answerInput.value) ===
				parseInput(this.sessionData[this.quizNumber].answer)
			) {
				console.log("it is right");
				this.data.right += 1;
				right();
			} else {
				this.questionArea.innerHTML =
					"[[ " + this.sessionData[this.quizNumber].answer + " ]]";
				console.log("it is wrong");
				this.data.wrong += 1;
				wrong();
			}
			await sleep(2);
			this.answerInput.value = "";
			this.nextQuestion();
		});
		this.start();
		this.answerInput.addEventListener("keyup", (e) => {
			if (e.code === "Enter") {
				this.submit.click();
			}
		});
	}

	nextQuestion() {
		this.quizNumber++;
		if (this.quizNumber > this.quizzesLength - 1) {
			this.finish();
		} else {
			this.start();
		}
	}
	start() {
		let sourceData = this.sessionData[this.quizNumber.toString()];
		this.topspan.innerHTML = createTopperSpan(
			"question-number",
			`السؤال (${this.quizNumber + 1})`
		);
		this.answerInput.focus();
		this.questionArea.innerHTML = "(( " + sourceData.question + " ))";
		this.descriptionArea.innerHTML = sourceData.description;
		for (let i = 0; i < sourceData.header.infoos; i++) {
			this.topspan.innerHTML += createTopperSpan(
				`info-${i}`,
				sourceData.header.info[i]
			);
		}
	}
	finish() {
		this.topspan.innerHTML = createTopperSpan("finsisher", alldata[language].content.scores);
		let percent = percentOfTwo(this.quizzesLength, this.data.right);
		this.descriptionArea.innerHTML = `||||| ${alldata[language].content.scores} |||||`;
		this.questionArea.innerHTML = `{ ${percent}% }
${percent > 50 ? alldata[language].content.welldone : alldata[language].content.tryagain}`;
		this.userarea.innerHTML = `<button class="finish flexy-center" onclick="loadType()"> ${alldata[language].content.finish} </button>`;
	}
}

function chooseType(typeNumber) {
	//type 1 => normal
	//type 2 => other
	type = typeNumber;
	loadHome();
}

function chooseLevel(lvl) {
	level = lvl;
	if (type === 1) {
		sessionData = createNormalSession();
		session = new normalSession(sessionData);
	} else if (type === 2) {
		sessionData = createDivSession();
		session = new diverseSession(sessionData);
	}
}

function creator() {
	alertCustom("<p style='font-family: 'Noto Kufi Arabic', sans-serif;'>تم انشاء هذا الموقع من قبل: عبدالرحمن عزمي</p><br>copy right Abdulrahman Azmy Ⓒ  2022");
}