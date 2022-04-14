async function right() {
	style.innerHTML = `
	.quiz-container {
			color: var(--right) !important;
			border:5px solid var(--right) !important;
		}
	#question, .half {
		color: var(--right) !important;
	}
	.top-span-p {
		background-color: var(--right) !important;}
	`;
	await sleep(2);
	reset();
}

async function wrong() {
	style.innerHTML = `
	.quiz-container {
			color: var(--wrong) !important;
			border:5px solid var(--wrong) !important;
		}
	#question, .half {
		color: var(--wrong) !important;
	}
	.top-span-p {
		background-color: var(--wrong) !important;
	}
	
	`;
	await sleep(2);
	reset();
}

function reset() {
	style.innerHTML = `
	.quiz-container {
			color: var(--font-color) !important;
			border:5px solid white !important;
		}
	.top-span-p {
		background-color: var(--borders) !important;
	}
	#question, .half {
		color: var(--font-color) !important;
	}
	`;
}

const Mode = document.getElementById("mode");
const ModeButton = document.getElementById("mode-button");
let mode = 0;
function changeMode() {
	if (mode === 0) {
		Mode.innerHTML = `
		:root {
			--bg-primary: rgb(48, 1, 66);
			--bg-secondary: rgb(56, 0, 88);
			--borders: rgb(90, 0, 149);
			--font-color: white;
			--l-font-color: gray;
			--right: rgb(0, 255, 0);
			--wrong: rgb(255, 0, 0);
		}
		`;
		mode = 1;
	} else {
		Mode.innerHTML = `
		
:root {
    --bg-primary: rgb(0, 166, 255);
    --bg-secondary: rgb(0, 217, 255);
    --borders: rgb(255, 255, 255);
    --font-color: black;
    --l-font-color: gray;
    --right: rgb(0, 255, 0);
    --wrong: rgb(255, 0, 0);
}
		`;
		mode = 0;
	}

	ModeButton.classList.toggle("isdark");
}


async function alertCustom(text) {
	let alerter = document.getElementById("alert");
	alerter.style.display = "block";
	alerter.innerHTML = text;
	await sleep(2)
	alerter.style.display = "none";
	alerter.innerHTML = "";
}