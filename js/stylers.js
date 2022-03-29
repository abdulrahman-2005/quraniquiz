async function right() {
	style.innerHTML = `
	.quiz-container,
	.top-span-p {
			color: green !important;
			border:5px solid green !important;
		}
	#question, .half {
			color: green !important;
		}
	`;
	await sleep(2);
	reset();
}

async function wrong() {
	style.innerHTML = `
	.quiz-container,
	.top-span-p {
			color: red !important;
			border:5px solid red !important;
		}
	#question, .half {
		color: red !important;
	}
	
	`;
	await sleep(2);
	reset();
}

function reset() {
	style.innerHTML = `
	.quiz-container,
	.top-span-p {
			color: var(--font-color) !important;
			border:5px solid white !important;
		}
	.top-span-p {
		color: var(--l-font-color);
		border: none !important;
	}
	#question, .half {
		color: var(--font-color) !important;
	}
	`;
}


const Mode = document.getElementById("mode");
const ModeButton = document.getElementById("mode-button");
let mode = 0
function changeMode() {
	if (mode === 0) {
		Mode.innerHTML = `
		:root {
			--bg-primary: rgb(48, 1, 66);
			--bg-secondary: rgb(56, 0, 88);
			--borders: rgb(90, 0, 149);
			--font-color: white;
			--l-font-color: gray;
		}
		`
		mode = 1
	} else {
		Mode.innerHTML = `
		:root {
			--bg-primary: orange;
			--bg-secondary: gold;
			--borders: white;
			--font-color: black;
			--l-font-color: gray;
		}
		`
		mode = 0
	}

	
	ModeButton.classList.toggle("isdark")
}