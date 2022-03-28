async function right() {
	style.innerHTML = `
	.quiz-container,
	.top-span-p {
			color: green;
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
			color: red;
			border:5px solid red !important;
		}
	#question, .half {
		color: red;
	}
	
	`;
	await sleep(2);
	reset();
}

function reset() {
	style.innerHTML = `
	.quiz-container,
	.top-span-p {
			color: black;
			border:5px solid white !important;
		}
	.top-span-p {
		color: gray;
		border: none !important;
	}
	#question, .half {
		color: black;
	}
	`;
}