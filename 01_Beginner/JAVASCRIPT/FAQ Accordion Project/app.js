const firstPlus = document.getElementById("plus-1");
const firstMinus = document.getElementById("minus-1");
const firstPara = document.querySelector(".line-2");
const secondPara = document.querySelector(".line-3");
const onButtonClick = document.querySelector("#plus-1");
const secondPlus = document.getElementById("plus-2");
const secondMinus = document.getElementById("minus-2");

onButtonClick.addEventListener("click", (e) => {
  e.preventDefault();

  firstPara.style.display = "block";
  firstPlus.style.display = "none";
  firstMinus.style.display = "block";
  firstPara.style.transition = "all 3s ease-in-out";

  console.log("I dey work oo :)");
});

const clickMe = firstMinus.addEventListener("click", (e) => {
  e.preventDefault();

  firstPara.style.display = "none";
  firstPlus.style.display = "block";
  firstMinus.style.display = "none";
});

const onClick = secondPlus.addEventListener("click", (e) => {
  e.preventDefault();

  secondPara.style.display = "block";
  secondPlus.style.display = "none";
  secondMinus.style.display = "block";
});

const minusClick = secondMinus.addEventListener("click", (e) => {
  e.preventDefault();

  secondPara.style.display = "none";
  secondPlus.style.display = "block";
  secondMinus.style.display = "none";
});
