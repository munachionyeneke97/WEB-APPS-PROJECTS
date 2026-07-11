// VARIABLES
const easyLevel = document.getElementById("easy-btn");
const mediumLevel = document.getElementById("medium-btn");
const hardLevel = document.getElementById("hard-btn");
const timeMode = document.getElementById("timed-btn");
const passageMode = document.getElementById("passage-btn");
const textContainer = document.querySelector("#text-container");
const typingArea = document.querySelector("#typing-area");
const clickButton = document.querySelector("#button");
const mainContainer = document.getElementById("main-container");
const showTime = document.querySelector(".timer-box");
const showAccuracy = document.querySelector(".accuracy-box");
const showWpm = document.querySelector(".wpm-box");
const wpmResult = document.querySelector(".box-1 .wpm");
const accurateResult = document.querySelector(".box-2 .accurate-box");
const characterResult = document.querySelector(".box-3 .character");
const restartButton = document.getElementById("restart-btn");
const takeMeHome = document.getElementById("home-button");
const currentPath = window.location.pathname;
let sentLength;
let selectedSent;
let wordLength;
let selectedWord;
let letterlength;
let selectedLetter;
let modeSelected = false;
let activeMode = false;
let levelSelected = false;
let activeLevel = false;
let currentTextLength = 0;
let currentText = "";
let activeTimeMode = false;
let currentCount = 0;
let timeLeft = 60;
let timerStart = false;
let timerId;
let currentMode = "";
let correctCount = 0;
let wrongCount = 0;
let totalCharactersTyped;
let accuracy;
let characters;
let startTime;
let endTime;
let timeTaken;
let timeInSeconds;

if (!currentPath.includes("result.html")) {
  showTime.textContent = " :-:";
  showAccuracy.textContent = " :-:";
  showWpm.textContent = " :-:";
  // Fetching Data into the UI

  // Typing Modes
  // Timed Mode
  timeMode.addEventListener("click", myTimer);
  function myTimer(e) {
    activeTimeMode = true;
    activeMode = true;
    modeSelected = true;
    currentMode = "timed";

    const timerColor = (timeMode.style.cssText =
      "border-color: hsl(214,100%,55%);");

    if (activeMode === true) {
      showTime.textContent = `${timeLeft}s`;
      timeMode.style.cssText =
        "border-color: hsl(214,100%,55%);pointer-events: none;color:hsl(214,100%,55%);";
      passageMode.style.cssText = "pointer-events: none";
    }
  }
  // Passage Mode
  passageMode.addEventListener("click", getPassage);
  function getPassage(e) {
    activeMode = true;
    modeSelected = true;
    currentMode = "passage";
    const passageColor = (passageMode.style.cssText =
      "border-color: hsl(214,100%,55%);");

    if (activeMode === true) {
      passageMode.style.cssText =
        "border-color: hsl(214,100%,55%);pointer-events: none;color:hsl(214,100%,55%);";
      timeMode.style.cssText = "pointer-events: none;";
    }
  }

  // Level of Difficulty
  // Easy Button
  easyLevel.addEventListener("click", getEasyLevel);
  function getEasyLevel(e) {
    const firstLevel = "easy";
    const easyColor = (easyLevel.style.cssText =
      "border-color: hsl(214, 100%, 55%);");
    const mediumColor = (mediumLevel.style.cssText =
      "border-color: hsl(0, 0%, 15%);");
    const hardColor = (hardLevel.style.cssText =
      "border-color: hsl(0, 0%, 15%);");

    activeLevel = true;
    if (activeMode === false) {
      alert("Select Mode of Choice");
      activeLevel = false;
      typingArea.innerHTML = "";
      easyLevel.style.cssText = "border-color: hsl(0, 0%, 15%);";
      mediumLevel.style.cssText = "border-color: hsl(0,0%,15%);";
      hardLevel.style.cssText = "border-color: hsl(0,0%,15%);";
    }
    if (activeMode === true) {
      levelSelected = true;
      fetch("data.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const easyArray = data[firstLevel];
          const randomIndex = Math.round(Math.random() * 10);
          const easyPara = easyArray[randomIndex].text;
          sentLength = easyPara.length;
          const letters = easyPara.split("");
          selectedSent = letters;
          currentTextLength = sentLength;
          currentText = selectedSent;

          const spannedLetters = [];
          letters.forEach(function (character) {
            const value = `<span class="letter">${character}</span>`;
            spannedLetters.push(value);
          });
          typingArea.innerHTML = spannedLetters.join("");
          if (activeLevel === true) {
            easyLevel.style.cssText =
              "pointer-events: none; border-color: hsl(214,100%,55%);color: hsl(214,100%,55%);";
            mediumLevel.style.cssText = "pointer-events: none";
            hardLevel.style.cssText = "pointer-events: none";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  // Medium Button
  mediumLevel.addEventListener("click", getMediumLevel);

  function getMediumLevel(e) {
    const secondLevel = "medium";
    const mediumColor = (mediumLevel.style.cssText =
      "border-color: hsl(214, 100%, 55%)");
    const easyColor = (easyLevel.style.cssText =
      "border-color: hsl(0, 0%, 15%)");
    const hardColor = (hardLevel.style.cssText =
      "border-color: hsl(0, 0%, 15%)");
    activeLevel = true;
    if (activeMode === false) {
      alert("Select Mode of Choice");
      activeLevel = false;
      typingArea.innerHTML = "";
      easyLevel.style.cssText = "border-color: hsl(0, 0%, 15%);";
      mediumLevel.style.cssText = "border-color: hsl(0,0%,15%);";
      hardLevel.style.cssText = "border-color: hsl(0,0%,15%);";
    }

    if (activeMode === true) {
      levelSelected = true;
      fetch("data.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const mediumArray = data[secondLevel];
          const randomIndex = Math.round(Math.random() * 10);
          const mediumPara = mediumArray[randomIndex].text;
          wordLength = mediumPara.length;
          const letters = mediumPara.split("");
          selectedWord = letters;
          currentTextLength = wordLength;
          currentText = selectedWord;

          const spannedLetters = [];
          letters.forEach(function (character) {
            const value = `<span class="letter">${character}</span>`;
            spannedLetters.push(value);
          });
          typingArea.innerHTML = spannedLetters.join("");
          if (activeLevel === true) {
            easyLevel.style.cssText = "pointer-events: none";
            mediumLevel.style.cssText =
              "pointer-events: none; border-color: hsl(214,100%,55%);color:hsl(214,100%,55%);";
            hardLevel.style.cssText = "pointer-events: none";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  // Hard Button
  hardLevel.addEventListener("click", getHardLevel);
  function getHardLevel(e) {
    const thirdLevel = "hard";
    const hardColor = (hardLevel.style.cssText =
      "border-color: hsl(214, 100%, 55%);");
    const easyColor = (easyLevel.style.cssText =
      "border-color: hsl(0, 0%, 15%)");
    const mediumColor = (mediumLevel.style.cssText =
      "border-color: hsl(0, 0%, 15%)");
    activeLevel = true;
    if (activeMode === false) {
      alert("Select Mode of Choice");
      // activeLevel = false;
      typingArea.innerHTML = "";
      easyLevel.style.cssText = "border-color: hsl(0, 0%, 15%);";
      mediumLevel.style.cssText = "border-color: hsl(0,0%,15%);";
      hardLevel.style.cssText = "border-color: hsl(0,0%,15%);";
    }

    if (activeMode === true) {
      levelSelected = true;
      fetch("data.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const hardArray = data[thirdLevel];
          const randomIndex = Math.round(Math.random() * 10);
          const hardpara = hardArray[randomIndex].text;
          letterlength = hardpara.length;
          const letters = hardpara.split("");
          selectedLetter = letters;
          currentTextLength = letterlength;
          currentText = selectedLetter;

          const spannedLetters = [];
          letters.forEach(function (character) {
            const value = `<span class="letter">${character}</span>`;
            spannedLetters.push(value);
          });
          typingArea.innerHTML = spannedLetters.join("");
          if (activeLevel === true) {
            easyLevel.style.cssText = "pointer-events: none";
            mediumLevel.style.cssText = "pointer-events: none";
            hardLevel.style.cssText =
              "pointer-events: none; border-color: hsl(214,100%,55%);color:hsl(214,100%,55%);";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  // Start Button Event / Function
  clickButton.addEventListener("click", clickMe);

  function clickMe(e) {
    e.preventDefault();
    const blurContent = document.querySelector(".content");

    if (modeSelected && levelSelected) {
      mainContainer.classList.add("no-blur");
      blurContent.style.cssText = "display: none";
    } else if (!modeSelected && !levelSelected) {
      alert("Select Mode of Choice and Level of Difficulty");
      mainContainer.classList.add("blur");
      blurContent.style.cssText = "display: flex";
    } else if (!modeSelected) {
      alert("Select Mode of Choice");
      easyLevel.style.cssText = "border-color: hsl(0, 0%, 15%);";
      mediumLevel.style.cssText = "border-color: hsl(0,0%,15%);";
      hardLevel.style.cssText = "border-color: hsl(0,0%,15%);";
    } else if (!levelSelected) {
      alert("Select Level of Difficulty");
      mainContainer.classList.add("blur");
      blurContent.style.cssText = "display: flex";
    }
  }

  // Typing Area Event / Function
  typingArea.addEventListener("keydown", (e) => {
    const key = e.key;

    if (currentMode === "timed" && !timerStart && key.length === 1) {
      timerStart = true;

      timerId = setInterval(() => {
        showTime.textContent = `${timeLeft}s`;

        timeLeft--;

        if (timeLeft === 0) {
          clearInterval(timerId);
          window.location.href = "result.html";
          console.log("Time's up!!");
        }
      }, 1000);
    }

    if (currentMode === "passage" && !timerStart && key.length === 1) {
      timerStart = true;

      timerId = setInterval(() => {
        showTime.textContent = " :-:";

        timeLeft--;

        // timerId = setTimeout(() => {
        //   timeLeft;
        //   console.log(timeLeft);
        // }, 100000000);

        if (timeLeft === 0) {
          clearInterval(timerId);
        }
      }, 1000);
    }

    if (key.length !== 1) {
      return;
    }

    const currentSpan = document.querySelector(
      `#typing-area span:nth-of-type(${currentCount + 1})`,
    );

    if (currentText[currentCount] === key) {
      currentSpan.className = "correct";
      correctCount += 1;
    } else {
      currentSpan.className = "incorrect";
      wrongCount += 1;
    }

    if (currentText[currentCount] === " ") {
      currentSpan.className = "incorrect-1";
    }

    currentCount++;
    const timeRemaining = timeLeft;
    const timeUsed = 60 - timeRemaining;
    const timeInMinutes = timeUsed / 60;

    totalCharactersTyped = correctCount + wrongCount;
    characters = correctCount + "/" + wrongCount;

    const wordsTyped = correctCount / 5;
    const wordPerMinute = Math.round(wordsTyped / timeInMinutes);

    accuracy = Math.round((correctCount / totalCharactersTyped) * 100);

    showAccuracy.textContent = `${accuracy}%`;
    showWpm.textContent = wordPerMinute;

    sessionStorage.setItem("accuracy", accuracy);
    sessionStorage.setItem("wordPerMinute", wordPerMinute);
    sessionStorage.setItem("characters", characters);
    if (currentTextLength === currentCount) {
      window.location.href = "result.html";
      return;
    }
  });

  restartButton.addEventListener("click", (e) => {
    location.reload();
  });
} else if (currentPath.includes("result.html")) {
  const accuracy = sessionStorage.getItem("accuracy");
  const wpm = sessionStorage.getItem("wordPerMinute");
  const characters = sessionStorage.getItem("characters");

  accurateResult.textContent = `${accuracy}%`;
  characterResult.textContent = `${characters}`;
  wpmResult.textContent = `${wpm}`;

  if (takeMeHome) {
    takeMeHome.addEventListener("click", (e) => {
      window.location.href = "index.html";
    });
  } else {
    console.log("I no dey work oo");
  }
}
