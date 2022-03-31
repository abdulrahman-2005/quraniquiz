const holder = document.getElementById("container")

function loadNormalSession() {
	holder.innerHTML = `
			<div id="conty" class="quiz-container flexy-center wrap">
				<span id="topspan" class="toptop flexy-center"></span>
				<textarea  id="question" class="flexy-center" readonly></textarea>
				<span id="userarea" class="flexy-center">
					<input type="text" id="answer" class="answer">
					<button class="answer" id="submit"> ${alldata[language].submit} </button>
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
				${alldata[language].submit}
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
		</div>`;
}

function loadSignUp(opt="YLOGS") {
	if (opt === "YLOGS") {
		logs.push("load.signup")
	}
	holder.innerHTML = `
	<div class="choose flexy-center dir-col" id="sessionArea">
	<style>
		.ll {
			margin: 0.5vw !important;
			width: calc(80% - 1vw);
			padding: 1vw !important;
		}
	</style>
	<input
		type="text"
		class="answer ll"
		placeholder="اسم المستخدم"
		id="username"
	/>
	<input
		type="text"
		class="answer ll"
		placeholder="أنشى كلمة مرور"
		id="password"
	/>
	<button class="flexy-center choice ll" onclick="signUp()">انشاء حساب</button>
</div>
`;
} 

function loadLogIN(opt="YLOGS") {
	if (opt === "YLOGS") {
		logs.push("load.login")
	}
	holder.innerHTML = `
	<div class="choose flexy-center dir-col" id="sessionArea">
	<style>
		.ll {
			margin: 0.5vw !important;
			width: calc(80% - 1vw);
			padding: 1vw !important;
		}
	</style>
	<input
		type="text"
		class="answer ll"
		placeholder="اسم المستخدم"
		id="username"
	/>
	<input
		type="text"
		class="answer ll"
		placeholder="كلمة المرور"
		id="password"
	/>
	<button class="flexy-center choice ll" onclick="login()">تسجيل الدخول</button>
</div>
`;
}

const actions = {
	"load.home"   : loadHome,
	"load.signup" : loadSignUp,
	"load.login"  : loadLogIN,
	"load.type"   : loadType
}