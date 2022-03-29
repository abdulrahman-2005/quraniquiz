const holder = document.getElementById("container")

function loadNormalSession() {
	holder.innerHTML = `
			<div id="conty" class="quiz-container flexy-center wrap">
				<span id="topspan" class="toptop flexy-center"></span>
				<textarea  id="question" class="flexy-center" readonly></textarea>
				<span id="userarea" class="flexy-center">
					<input type="text" id="answer" class="answer">
					<button class="answer" id="submit">استمر</button>
				</span>
		</div>`;
}

function loadDivSession() {
	holder.innerHTML = `
		<div class="quiz-container flexy-center wrap">
			<span id="topspan" class="flexy-center"></span>
			<textarea id="description" class="flexy-center half" readonly>
				{" "}
			</textarea>
			<textarea id="question" class="flexy-center half kinda" readonly>
				{" "}
			</textarea>
			<span class="flexy-center" id="userarea">
				<button class="answer" id="submit">
					استمر
				</button>
				<input type="text" id="answerInput" class="answer" />
			</span>
	</div>;`;
}

function loadHome() {
	holder.innerHTML = `
        <div class="choose flexy-center dir-col" id="sessionArea">
            <h1 class="title flexy-center">اختر المستوى</h1>
            <button class="choice flexy-center" onclick="chooseLevel(5)">المستوى الاعلى</button>
            <button class="choice flexy-center" onclick="chooseLevel(4)">المستوى الرابع</button>
            <button class="choice flexy-center" onclick="chooseLevel(3)">المستوى الثالث</button>
            <button class="choice flexy-center" onclick="chooseLevel(2)">المستوى الثاني</button>
            <button class="choice flexy-center" onclick="chooseLevel(1)">المستوى الاول</button>
        </div>
`;
}

function loadType() {
	holder.innerHTML = `
			<div class="choose flexy-center dir-col" id="sessionArea">
				<h1 class="title flexy-center">اختر النوع</h1>
				<button class="choice flexy-center" onclick="chooseType(1)">
					اسئلة اكمال
				</button>
				<button class="choice flexy-center" onclick="chooseType(2)">
					اسئلة متنوعة
				</button>
		</div>`;
}

function loadSignUp() {
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

function loadLogIN() {
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