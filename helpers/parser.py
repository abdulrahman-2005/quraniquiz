import json

with open('E:/body/vsc/projectQuranQuiz/helpers/qurandata.json', "r") as f:
    data = json.load(f)

newdata = {}

for i in data:
    data[i][0] = data[i][0].replace("\u0628\u0633\u0645 \u0627\u0644\u0644\u0647 \u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0631\u062d\u064a\u0645", "")
    newdata[i] = data[i]

with open("newdata.json", "w") as f:
    json.dump(newdata, f, indent=4)