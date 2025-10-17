// 駅データ（南北線19駅）


let currentQuestion;

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
  // 選択肢をランダムに並べ替える
  return options.sort(() => Math.random() - 0.5);
}
const stations = [
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
  ];
  
function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const resultElement = document.getElementById("result");
  const nextButton = document.getElementById("next-btn");

  resultElement.textContent = "";
  nextButton.style.display = "none";

  currentQuestion = getRandomQuestion();
  const options = generateOptions(currentQuestion);

  questionElement.innerHTML = `<p>この駅番号はどの駅？</p><img src="picture/${currentQuestion.no}.png" alt="駅番号" style="max-width: 300px; margin: 20px auto; display: block;">`;
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

// 最初の問題を表示
displayQuestion();
