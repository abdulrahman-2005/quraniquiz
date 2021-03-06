function createNormalSession(
	type="random",
	givenSurah=1,
	surahRange = random(lvlMap[level][0], lvlMap[level][1])
) {
	let sess = {};
	for (let i = 0; i < level * 10; i++) {
		let quiz = {};
		let choosenSurah;
		let randomSurahChoice;
		if (type === "random") {
			randomSurahChoice = random(surahRange, lvlMap[level][1]).toString();
			choosenSurah = ALLSURAH[randomSurahChoice];
		} else {
			choosenSurah = ALLSURAH[givenSurah]
		}
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
		quiz["data"] = {
			surah: SUOR[randomSurahChoice || givenSurah],
			ayah: randomAyahChoice,
		};
		sess[i.toString()] = quiz;
	}
	if (type === "custom") {
		session = new normalSession(sess)
		sessionData = sess
	}
	return sess;
}

let questions;
function createDivSession(
	surahRange = random(lvlMap[level][0], lvlMap[level][1])
) {
	questions = alldata[language].questions
	let sess = {};
	let quiz = {};
	for (let i = 0; i < level * 10; i++) {
		let quiz = {};
		let randomSurahChoice = random(surahRange, 114).toString();
		let choosenSurah = ALLSURAH[randomSurahChoice];
		let choosenSurahName = SUOR[+randomSurahChoice];
		let randomAyahChoice = random(0, choosenSurah.length);
		let choosenAyah = choosenSurah[randomAyahChoice];
		let qType = random(questions.length);
		if (qType === 0) {
			quiz.description = questions[qType];
			quiz.question = choosenAyah;
			quiz.answer = randomAyahChoice + 1;
			quiz.header = { infoos: 1, info: [`${alldata[language].content.surah} (${choosenSurahName})`] };
		} else if (qType === 1) {
			quiz.header = {
				infoos: 2,
				info: [
					`${alldata[language].content.ayah} (${randomAyahChoice + 1})`,
					`${alldata[language].content.surah} (${choosenSurahName})`,
				],
			};
			quiz.description = questions[qType];
			quiz.question = randomAyahChoice+1;
			quiz.answer = choosenAyah;
		} else if (qType === 2) {
			quiz.header = {
				infoos: 1,
				info: [`${alldata[language].content.ayah} (${randomAyahChoice + 1})`],
			};
			quiz.description = questions[qType];
			quiz.question = choosenAyah;
			quiz.answer = choosenSurahName;
		} else if (qType === 3) {
			quiz.header = {
				infoos: 2,
				info: [
					`${alldata[language].content.ayah} (${randomAyahChoice + 1})`,
					`${alldata[language].content.surah} (${choosenSurahName})`,
				],
			};
			quiz.description = questions[qType];
			quiz.question = choosenAyah;
			quiz.answer = choosenSurah[randomAyahChoice + 1];
		} else if (qType === 4) {
			randomAyahChoice +=
				randomAyahChoice < choosenSurah.length - 1 ? 1 : 0;
			choosenAyah = choosenSurah[randomAyahChoice];
			quiz.header = {
				infoos: 2,
				info: [
					`${alldata[language].content.ayah} (${randomAyahChoice + 1})`,
					`${alldata[language].content.surah} (${choosenSurahName})`,
				],
			};
			quiz.description = questions[qType];
			quiz.question = choosenAyah;
			quiz.answer = choosenSurah[randomAyahChoice - 1];
		}
		sess[i.toString()] = quiz;
		quiz = {};
	}
	return sess;
}
