function createSession(surahRange) {
	let sess = {};
	for (let i = 0; i < level * 10; i++) {
		let quiz = {};
		let choosenSurah = ALLSURAH[random(surahRange).toString()];
		let choosenAyah = choosenSurah[random(choosenSurah.length)].split(" ");
		let randomWordChoice = random(choosenAyah.length);
		let choosenWord = choosenAyah[randomWordChoice];
		quiz["answer"] = choosenWord;
		quiz["reveal"] = choosenAyah.join(" ");
		choosenAyah[randomWordChoice] = ` [${dotsInRange(
			choosenWord.length
		)}] `;
		quiz["question"] = choosenAyah.join(" ");
		sess[i.toString()] = quiz;
	}
	return sess;
}

function loadSession() {
	document.body.innerHTML = `
	<div id="container" class="flexy-center">
			<div id="conty" class="quiz-container flexy-center wrap">
				<div id="question-number"></div>
				<textarea  id="question" class="flexy-center" readonly></textarea>
				<span id="userarea">
					<input type="text" id="answer" class="answer">
					<button class="answer" id="submit">استمر</button>
				</span>
			</div>
		</div>`;
	session = new Session(sessionData);
}

function loadHome() {
	document.body.innerHTML = `
	<div id="container" class = "flexy-center">
        <div class="choose flexy-center dir-col" id="sessionArea">
            <h1 class="title flexy-center">اختر المستوى</h1>
            <button class="choice flexy-center" onclick="chooseLevel(5)">دارس</button>
            <button class="choice flexy-center" onclick="chooseLevel(4)">متقدم</button>
            <button class="choice flexy-center" onclick="chooseLevel(3)">متعلم</button>
            <button class="choice flexy-center" onclick="chooseLevel(2)">حافظ</button>
            <button class="choice flexy-center" onclick="chooseLevel(1)">طفل</button>
        </div>
    </div>
    <div id="NAVNAVGO"></div>`;
}

const style = document.getElementById("mainStyle");
async function right() {
	style.innerHTML = `
	.quiz-container,
	#question-number {
			color: green;
			border:5px solid green;
		}
		#question {
			color: green;
		}
	`;
	await sleep(2);
	reset();
}

async function wrong() {
	style.innerHTML = `
	.quiz-container,
	#question-number {
			color: red;
			border:5px solid red;
		}
	#question {
		color: red;
	}
	`;
	await sleep(2);
	reset();
}

function reset() {
	style.innerHTML = `
	.quiz-container,
	#question-number {
			color: black;
			border:5px solid white;
		}
	#question-number {
		color: gray;
	}
	#question {
		color: black;
	}
	`;
}

function parseInput(text) {
	let output = "";
	for (let i = 0; i < text.length; i++) {
		if (cases.includes(text[i])) {
			output += trans[text[i]];
		} else {
			output += text[i];
		}
	}
	return output;
}

class Session {
	constructor(sessionData) {
		this.questionNumber = document.getElementById("question-number");
		this.questionArea = document.getElementById("question");
		this.submit = document.getElementById("submit");
		this.answerInput = document.getElementById("answer");
		this.sessionData = sessionData;
		this.quizNumber = 0;
		this.quizzesLength = Object.keys(sessionData).length;
		this.userarea = document.getElementById("userarea");
		this.data = {
			right: 0,
			wrong: 0,
		};
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
		})
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
		this.questionNumber.innerHTML = `السؤال رقم ${this.quizNumber + 1}`;
		this.questionArea.innerHTML =
			this.sessionData[this.quizNumber.toString()].question;
	}
	finish() {
		this.questionNumber.innerHTML = "النتائج";
		this.questionArea.innerHTML = `
الاجابات الصحيحة: ${this.data.right}
الاجابات الخاطئة: ${this.data.wrong}
		`;
		this.userarea.innerHTML = `<button class="finish" onclick="loadHome()"> انهاء </button>`;
	}
}

function chooseLevel(lvl) {
	level = lvl;
	sessionData = createSession(lvlMap[lvl.toString()]);
	loadSession();
}
