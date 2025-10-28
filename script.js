// ===== 路線データ =====
const allStations = {
  nanboku: [
    { no: "N01", name: "目黒" },
    { no: "N02", name: "白金台" },
    { no: "N03", name: "白金高輪" },
    { no: "N04", name: "麻布十番" },
    { no: "N05", name: "六本木一丁目" },
    { no: "N06", name: "溜池山王" },
    { no: "N07", name: "永田町" },
    { no: "N08", name: "四ツ谷" },
    { no: "N09", name: "市ケ谷" },
    { no: "N10", name: "飯田橋" },
    { no: "N11", name: "後楽園" },
    { no: "N12", name: "東大前" },
    { no: "N13", name: "本駒込" },
    { no: "N14", name: "駒込" },
    { no: "N15", name: "西ケ原" },
    { no: "N16", name: "王子" },
    { no: "N17", name: "王子神谷" },
    { no: "N18", name: "志茂" },
    { no: "N19", name: "赤羽岩淵" }
  ],
  marunouchi: [
    { no: "M01", name: "荻窪" },
    { no: "M02", name: "南阿佐ケ谷" },
    { no: "M03", name: "新高円寺" },
    { no: "M04", name: "東高円寺" },
    { no: "M05", name: "新中野" },
    { no: "M06", name: "中野坂上" },
    { no: "M07", name: "西新宿" },
    { no: "M08", name: "新宿" },
    { no: "M09", name: "新宿三丁目" },
    { no: "M10", name: "新宿御苑前" },
    { no: "M11", name: "四ツ谷三丁目" },
    { no: "M12", name: "四ツ谷" },
    { no: "M13", name: "赤坂見附" },
    { no: "M14", name: "国会議事堂前" },
    { no: "M15", name: "霞ケ関" },
    { no: "M16", name: "銀座" },
    { no: "M17", name: "東京" },
    { no: "M18", name: "大手町" },
    { no: "M19", name: "淡路町" },
    { no: "M20", name: "御茶ノ水" },
    { no: "M21", name: "本郷三丁目" },
    { no: "M22", name: "後楽園" },
    { no: "M23", name: "茗荷谷" },
    { no: "M24", name: "新大塚" },
    { no: "M25", name: "池袋" },
  ], 
    // 支線など・方南町支線を含めるなら別キー or同キーに配列追加
  chiyoda: [
    { no: "C01", name: "代々木上原" },
    { no: "C02", name: "代々木公園" },
    { no: "C03", name: "明治神宮前〈原宿〉" },
    { no: "C04", name: "表参道" },
    { no: "C05", name: "乃木坂" },
    { no: "C06", name: "赤坂" },
    { no: "C07", name: "国会議事堂前" },
    { no: "C08", name: "霞ケ関" },
    { no: "C09", name: "日比谷" },
    { no: "C10", name: "二重橋前〈丸の内〉" },
    { no: "C11", name: "大手町" },
    { no: "C12", name: "新御茶ノ水" },
    { no: "C13", name: "湯島" },
    { no: "C14", name: "根津" },
    { no: "C15", name: "千駄木" },
    { no: "C16", name: "西日暮里" },
    { no: "C17", name: "町屋" },
    { no: "C18", name: "北千住" },
    { no: "C19", name: "綾瀬" },
    { no: "C20", name: "北綾瀬" }
  ],
  hanzomon: [
    { no: "Z01", name: "渋谷" },
    { no: "Z02", name: "表参道" },
    { no: "Z03", name: "青山一丁目" },
    { no: "Z04", name: "永田町" },
    { no: "Z05", name: "半蔵門" },
    { no: "Z06", name: "九段下" },
    { no: "Z07", name: "神保町" },
    { no: "Z08", name: "大手町" },
    { no: "Z09", name: "三越前" },
    { no: "Z10", name: "水天宮前" },
    { no: "Z11", name: "清澄白河" },
    { no: "Z12", name: "住吉" },
    { no: "Z13", name: "錦糸町" },
    { no: "Z14", name: "押上〈スカイツリー前〉" }
  ],
  tozai: [
    { no: "T01", name: "中野" },
    { no: "T02", name: "落合" },
    { no: "T03", name: "高田馬場" },
    { no: "T04", name: "早稲田" },
    { no: "T05", name: "神楽坂" },
    { no: "T06", name: "飯田橋" },
    { no: "T07", name: "九段下" },
    { no: "T08", name: "竹橋" },
    { no: "T09", name: "大手町" },
    { no: "T10", name: "日本橋" },
    { no: "T11", name: "茅場町" },
    { no: "T12", name: "門前仲町" },
    { no: "T13", name: "木場" },
    { no: "T14", name: "東陽町" },
    { no: "T15", name: "南砂町" },
    { no: "T16", name: "西葛西" },
    { no: "T17", name: "葛西" },
    { no: "T18", name: "浦安" },
    { no: "T19", name: "南行徳" },
    { no: "T20", name: "行徳" },
    { no: "T21", name: "妙典" },
    { no: "T22", name: "原木中山" },
    { no: "T23", name: "西船橋" }
  ],
  fukutoshin: [
    { no: "F01", name: "和光市" },
    { no: "F02", name: "地下鉄成増" },
    { no: "F03", name: "地下鉄赤塚" },
    { no: "F04", name: "平和台" },
    { no: "F05", name: "氷川台" },
    { no: "F06", name: "小竹向原" },
    { no: "F07", name: "千川" },
    { no: "F08", name: "要町" },
    { no: "F09", name: "池袋" },
    { no: "F10", name: "雑司が谷" },
    { no: "F11", name: "西早稲田" },
    { no: "F12", name: "東新宿" },
    { no: "F13", name: "新宿三丁目" },
    { no: "F14", name: "北参道" },
    { no: "F15", name: "明治神宮前〈原宿〉" },
    { no: "F16", name: "渋谷" }
  ],
  ginza: [
    { no: "G01", name: "渋谷" },
    { no: "G02", name: "表参道" },
    { no: "G03", name: "外苑前" },
    { no: "G04", name: "青山一丁目" },
    { no: "G05", name: "赤坂見附" },
    { no: "G06", name: "溜池山王" },
    { no: "G07", name: "虎ノ門" },
    { no: "G08", name: "新橋" },
    { no: "G09", name: "銀座" },
    { no: "G10", name: "京橋" },
    { no: "G11", name: "日本橋" },
    { no: "G12", name: "三越前" },
    { no: "G13", name: "神田" },
    { no: "G14", name: "末広町" },
    { no: "G15", name: "上野広小路" },
    { no: "G16", name: "上野" },
    { no: "G17", name: "稲荷町" },
    { no: "G18", name: "田原町" },
    { no: "G19", name: "浅草" }
  ],
  hibiya: [
    { no: "H01", name: "中目黒" },
    { no: "H02", name: "恵比寿" },
    { no: "H03", name: "広尾" },
    { no: "H04", name: "六本木" },
    { no: "H05", name: "神谷町" },
    { no: "H06", name: "霞ケ関" },
    { no: "H07", name: "日比谷" },
    { no: "H08", name: "銀座" },
    { no: "H09", name: "東銀座" },
    { no: "H10", name: "築地" },
    { no: "H11", name: "八丁堀" },
    { no: "H12", name: "茅場町" },
    { no: "H13", name: "人形町" },
    { no: "H14", name: "小伝馬町" },
    { no: "H15", name: "秋葉原" },
    { no: "H16", name: "仲御徒町" },
    { no: "H17", name: "上野" },
    { no: "H18", name: "入谷" },
    { no: "H19", name: "三ノ輪" },
    { no: "H20", name: "南千住" },
    { no: "H21", name: "北千住" }
  ],
  yurakucho: [
    { no: "Y01", name: "和光市" },
    { no: "Y02", name: "地下鉄成増" },
    { no: "Y03", name: "地下鉄赤塚" },
    { no: "Y04", name: "平和台" },
    { no: "Y05", name: "氷川台" },
    { no: "Y06", name: "小竹向原" },
    { no: "Y07", name: "千川" },
    { no: "Y08", name: "要町" },
    { no: "Y09", name: "池袋" },
    { no: "Y10", name: "東池袋" },
    { no: "Y11", name: "護国寺" },
    { no: "Y12", name: "江戸川橋" },
    { no: "Y13", name: "飯田橋" },
    { no: "Y14", name: "市ケ谷" },
    { no: "Y15", name: "麹町" },
    { no: "Y16", name: "永田町" },
    { no: "Y17", name: "桜田門" },
    { no: "Y18", name: "有楽町" },
    { no: "Y19", name: "銀座一丁目" },
    { no: "Y20", name: "新富町" },
    { no: "Y21", name: "月島" },
    { no: "Y22", name: "豊洲" },
    { no: "Y23", name: "辰巳" },
    { no: "Y24", name: "新木場" }
  ]
};

let currentLine = null;
let stations = [];
let currentQuestion;

// 路線ボタンにクリックイベント
document.querySelectorAll(".line-buttons button").forEach(button => {
  button.addEventListener("click", () => {
    const selected = button.dataset.line;
    currentLine = selected;

    if (selected === "random") {
      stations = Object.values(allStations).flat();
    } else {
      stations = allStations[selected];
    }

    if (!stations || stations.length === 0) {
      alert("この路線のデータはまだ登録されていません。");
      return;
    }

    // 遷移
    document.getElementById("select-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("lineTitle").textContent =
      `メトロ駅名クイズ ‑ ${getLineName(selected)}`;

    displayQuestion();
  });
});

// ===== 駅データ関連 =====
function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * stations.length);
  return stations[randomIndex];
}

function generateOptions(correctStation) {
  let options = [correctStation.name];
  while (options.length < 4) {
    const randomStation = stations[Math.floor(Math.random() * stations.length)];
    if (!options.includes(randomStation.name)) {
      options.push(randomStation.name);
    }
  }
  return options.sort(() => Math.random() - 0.5);
}

// ===== クイズ処理 =====
function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const resultElement = document.getElementById("result");
  const nextButton = document.getElementById("next-btn");

  resultElement.textContent = "";
  nextButton.style.display = "none";

  currentQuestion = getRandomQuestion();
  const options = generateOptions(currentQuestion);

  questionElement.innerHTML = `
    <p>正解はどの駅？</p>
    <img src="picture/${currentQuestion.no}.png" alt="駅番号" style="max-width: 200px; margin: 20px auto; display: block;">
  `;
  optionsElement.innerHTML = "";

  options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selected) {
  const resultElement = document.getElementById("result");
  const nextButton = document.getElementById("next-btn");

  if (selected === currentQuestion.name) {
    resultElement.textContent = "◯ 正解！";
    resultElement.style.color = "green";
  } else {
    resultElement.textContent = `× 不正解！正解は ${currentQuestion.name}`;
    resultElement.style.color = "red";
  }

  nextButton.style.display = "inline-block";
}

document.getElementById("next-btn").addEventListener("click", displayQuestion);

// ===== 路線名の日本語表示 =====
function getLineName(key) {
  const names = {
    nanboku: "南北線",
    marunouchi: "丸ノ内線",
    chiyoda: "千代田線",
    hanzomon: "半蔵門線",
    tozai: "東西線",
    fukutoshin: "副都心線",
    ginza: "銀座線",
    hibiya: "日比谷線",
    yurakucho: "有楽町線",
    random: "ランダム"
  };
  return names[key] || "不明";
}

// 既存のクイズ処理の下に追加
const backButton = document.getElementById("back-btn");

backButton.addEventListener("click", () => {
  // クイズ画面を非表示
  document.getElementById("quiz-container").style.display = "none";
  // 路線選択画面を表示
  document.getElementById("select-container").style.display = "block";
  // 戻るボタンを非表示
  backButton.style.display = "none";
});

// displayQuestion() 内で戻るボタンを表示
function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const resultElement = document.getElementById("result");
  const nextButton = document.getElementById("next-btn");

  resultElement.textContent = "";
  nextButton.style.display = "none";

  // 戻るボタンを常に表示
  backButton.style.display = "inline-block";

  currentQuestion = getRandomQuestion();
  const options = generateOptions(currentQuestion);

  questionElement.innerHTML = `
    <p>正解はどの駅？</p>
    <img src="picture/${currentQuestion.no}.png" alt="駅番号" style="max-width: 200px; margin: 20px auto; display: block;">
  `;
  optionsElement.innerHTML = "";

  options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsElement.appendChild(button);
  });
}
