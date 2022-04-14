const holder = document.getElementById("container")

function loadNormalSession() {
	holder.innerHTML = `
			<div id="conty" class="quiz-container flexy-center wrap">
				<span id="topspan" class="toptop flexy-center"></span>
				<textarea  id="question" class="flexy-center" readonly></textarea>
				<span id="userarea" class="flexy-center">
					<input type="text" id="answer" class="answer">
					<button class="answer" id="submit"> ${alldata[language].content.submit} </button>
				</span>
		</div>`;
}

function loadDivSession() {
	holder.innerHTML = `
		<div class="quiz-container flexy-center wrap">
			<span id="topspan" class="flexy-center"></span>
			<textarea id="description" class="flexy-center half" readonly>
			</textarea>
			<textarea id="question" class="flexy-center half kinda" readonly>
			</textarea>
			<span class="flexy-center" id="userarea">
				<button class="answer" id="submit">
				${alldata[language].content.submit}
				</button>
				<input type="text" id="answerInput" class="answer" />
			</span>
	</div>`;
}

function loadHome(opt="YLOGS") {
	if (opt === "YLOGS") {
		logs.push("load.home")
	}
	holder.innerHTML = `
        <div class="choose flexy-center dir-col" id="sessionArea">
            <h1 class="title flexy-center">${alldata[language].content.chooseLevel}</h1>
            <button class="choice flexy-center" onclick="chooseLevel(5)"> ${alldata[language].content.levels[0]} </button>
            <button class="choice flexy-center" onclick="chooseLevel(4)">${alldata[language].content.levels[1]}</button>
            <button class="choice flexy-center" onclick="chooseLevel(3)">${alldata[language].content.levels[2]}</button>
            <button class="choice flexy-center" onclick="chooseLevel(2)">${alldata[language].content.levels[3]}</button>
            <button class="choice flexy-center" onclick="chooseLevel(1)">${alldata[language].content.levels[4]}</button>
        </div>
`;
}

function loadType(opt="YLOGS") {
	if (opt === "YLOGS") {
		logs.push("load.type")
	}
	holder.innerHTML = `
			<div class="choose flexy-center dir-col" id="sessionArea">
				<h1 class="title flexy-center">${alldata[language].content.type.chooseType} </h1>
				<button class="choice flexy-center" onclick="chooseType(1)">
					${alldata[language].content.type.continuosQuestions}
				</button>
				<button class="choice flexy-center" onclick="chooseType(2)">
				${alldata[language].content.type.diversiveQuestions}
				</button>
				<button class="choice flexy-center" onclick="loadCustomQuiz()">
				${alldata[language].content.type.customQuestions}
				</button>
				
		</div>`;
}

function loadCustomQuiz(opt="YLOGS") {
	let surahList = language === "Ar" ? SUORAR : SUOREN
	let HTMLSHOW = `<div class="choose flexy-center dir-col" id="sessionArea">
	<div class="surahsChoice">`
	for (let surah = 1; surah<surahList.length; surah++) {
		HTMLSHOW += `<button class="choice chooseSurah" onclick="createNormalSession(type='custom', surah=${surah})">${surahList[surah]}</button>`
	}
	HTMLSHOW += "</div><div>"
	holder.innerHTML = HTMLSHOW
}

const actions = {
	"load.home"   : loadHome,
	"load.type"   : loadType,
}
