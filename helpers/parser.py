#parse the jsonfile quraninen.json and make it similar to the qurandata.json
import json
data = {}
with open('E:/body/vsc/projectQuranQuiz/helpers/quraninen.json', "r") as f:
    quran = json.load(f)
for i in quran:
    surah = []
    for j in range(len(quran[i])):
        surah.append(quran[i][j]['text'])
    data[str(i)] = surah
with open('qurandataEN.json', 'w') as f:
    json.dump(data, f, indent=4)