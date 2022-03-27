function createSession(surahRange) {
	let sess = {};
	for (let i = 0; i < level * 10; i++) {
		let quiz = {};
		let randomSurahChoice = random(surahRange).toString()
		let choosenSurah = ALLSURAH[randomSurahChoice];
		let randomAyahChoice = random(choosenSurah.length);
		let choosenAyah = choosenSurah[randomAyahChoice].split(" ");
		let randomWordChoice = random(choosenAyah.length);
		let choosenAyahCopy = [...choosenAyah];
		let choosenWord = choosenAyah[randomWordChoice];
		quiz["answer"] = choosenWord;
		choosenAyah[randomWordChoice] = ` [${dotsInRange(
			choosenWord.length
		)}] `;
		choosenAyahCopy[randomWordChoice] = `  [ ${choosenWord} ]  `;
		quiz["reveal"] = choosenAyahCopy.join(" ");
		quiz["question"] = choosenAyah.join(" ");
		quiz["data"] = {surah: SUOR[randomSurahChoice], ayah: randomAyahChoice};
		sess[i.toString()] = quiz;
	}
	return sess;
}

function loadSession() {
	document.body.innerHTML = `
	<div id="container" class="flexy-center">
			<div id="conty" class="quiz-container flexy-center wrap">
			<span id="top-span" class="flexy-center">
			<p id="question-number" class="flexy-center top-span-p"></p>
			<p id="surahname" class="flexy-center top-span-p"></p>
			<p id="ayahnumber" class="flexy-center top-span-p"></p>
			</span>
				<textarea  id="question" class="flexy-center" readonly></textarea>
				<span id="userarea" class="flexy-center">
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
            <button class="choice flexy-center" onclick="chooseLevel(5)">المستوى الاعلى</button>
            <button class="choice flexy-center" onclick="chooseLevel(4)">المستوى الرابع</button>
            <button class="choice flexy-center" onclick="chooseLevel(3)">المستوى الثالث</button>
            <button class="choice flexy-center" onclick="chooseLevel(2)">المستوى الثاني</button>
            <button class="choice flexy-center" onclick="chooseLevel(1)">المستوى الاول</button>
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
			border:5px solid green !important;
		}
		#question {
			color: green !important;
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
			border:5px solid red !important;
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
			border:5px solid white !important;
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

function createTopperSpan(id, data) {
	return `<p id="${id}" class="top-span-p flexy-center">${data}</p>`;
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
		this.ayahnumber = document.getElementById("ayahnumber");
		this.data = {
			right: 0,
			wrong: 0,
		};
		this.surahname = document.getElementById("surahname");
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
		this.questionArea.innerHTML =this.sessionData[this.quizNumber.toString()].question;
		this.surahname.innerHTML = `سورة ${this.sessionData[this.quizNumber.toString()].data.surah}`
		this.ayahnumber.innerHTML =`الاية (${this.sessionData[this.quizNumber.toString()].data.ayah})`;
	}
	finish() {
		this.questionNumber.innerHTML = "النتائج";
		this.questionArea.innerHTML = `
الاجابات الصحيحة: ${this.data.right}
الاجابات الخاطئة: ${this.data.wrong}
		`;
		this.userarea.innerHTML = `<button class="finish flexy-center" onclick="loadHome()"> انهاء </button>`;
	}
}

function chooseLevel(lvl) {
	level = lvl;
	sessionData = createSession(lvlMap[lvl.toString()]);
	loadSession();
}
