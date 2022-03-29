class normalSession {
	constructor(sessionData) {
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
		this.questionNumber.innerHTML = `السؤال (${this.quizNumber + 1})`;
		this.questionArea.innerHTML =
			this.sessionData[this.quizNumber.toString()].question;
		this.surahname.innerHTML = `سورة ${
			this.sessionData[this.quizNumber.toString()].data.surah
		}`;
		this.ayahnumber.innerHTML = `الاية (${
			this.sessionData[this.quizNumber.toString()].data.ayah + 1
		})`;
	}
	finish() {
		this.topspan.innerHTML = createTopperSpan("finisher", "النتائج");
		let percent = percentOfTwo(this.quizzesLength, this.data.right);
		this.questionArea.innerHTML = `{ ${percent}% }
${percent > 50 ? "أحسنت" : "لعلك تحاول مرة أخرى"}`;
		this.userarea.innerHTML = `<button class="finish flexy-center" onclick="loadType()"> انهاء </button>`;
	}
}

class diverseSession {
	constructor(sessionData) {
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
		this.topspan.innerHTML = createTopperSpan("finsisher", "النتائج");
		let percent = percentOfTwo(this.quizzesLength, this.data.right);
		this.descriptionArea.innerHTML = "||||| النتيجة |||||";
		this.questionArea.innerHTML = `{ ${percent}% }
${percent > 50 ? "أحسنت" : "لعلك تحاول مرة أخرى"}`;
		this.userarea.innerHTML = `<button class="finish flexy-center" onclick="loadType()"> انهاء </button>`;
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
