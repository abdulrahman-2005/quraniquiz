function random(range) {
	let rand = Math.floor(Math.random() * range);
	return rand === 0 ? 1 : rand;
}

function goTo(URL) {
	const CONTAINER = document.getElementById("NAVNAVGO");
	CONTAINER.innerHTML = `<a href="${URL}" id="NAVREDIRECT"></a>`;
	const lnk = document.getElementById("NAVREDIRECT");
	lnk.click();
}

function dotsInRange(loops) {
	let output = "";
	for (let i = 0; i < loops; i++) {
		output += ".";
	}
	return output;
}

function sleep(seconds) {
	return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}