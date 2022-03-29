const holder = document.getElementById("sessionArea")

function loadNormalSession() {
	document.body.innerHTML = `
	<button class="flexy-center mode islight" id="mode-button" onclick="changeMode()"></button>
	<div id="container" class="flexy-center">
			<div id="conty" class="quiz-container flexy-center wrap">
				<span id="topspan" class="toptop flexy-center"></span>
				<textarea  id="question" class="flexy-center" readonly></textarea>
				<span id="userarea" class="flexy-center">
					<input type="text" id="answer" class="answer">
					<button class="answer" id="submit">استمر</button>
				</span>
			</div>
		</div>`;
}

function loadDivSession() {
	document.body.innerHTML = `
	<button class="flexy-center mode islight" id="mode-button" onclick="changeMode()"></button>
	<div id="container" class="flexy-center">
		<div class="quiz-container flexy-center wrap">
			<span id="topspan" class="flexy-center"></span>
			<textarea id="description" class="flexy-center half" readonly>
				{" "}
			</textarea>
			<textarea id="question" class="flexy-center half kinda" readonly>
				{" "}
			</textarea>
			<span class="flexy-center">
				<button class="answer" id="submit">
					استمر
				</button>
				<input type="text" id="answerInput" class="answer" />
			</span>
		</div>
	</div>;`;
}

function loadHome() {
	document.body.innerHTML = `
	<button class="flexy-center mode islight" id="mode-button" onclick="changeMode()"></button>
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

function loadType() {
	document.body.innerHTML = `
	<button class="flexy-center mode islight" id="mode-button" onclick="changeMode()"></button>
	<div id="container" class="flexy-center">
			<div class="choose flexy-center dir-col" id="sessionArea">
				<h1 class="title flexy-center">اختر النوع</h1>
				<button class="choice flexy-center" onclick="chooseType(1)">
					اسئلة اكمال
				</button>
				<button class="choice flexy-center" onclick="chooseType(2)">
					اسئلة متنوعة
				</button>
			</div>
		</div>`;
}
