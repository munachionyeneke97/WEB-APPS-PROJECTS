const onButtonClick = document.querySelector('#button');

onButtonClick.addEventListener("click", (e) => {
  e.preventDefault();
  const image = document.getElementById('image-1');
  const inputList = document.getElementById('first-text');
  const firstDiv = document.getElementById('target-1');
  const wordFirst = document.getElementById('first-para');

  if(inputList.value === "") {
    image.style.display = 'block';
    firstDiv.style.borderColor = 'hsl(0, 100%, 74%)';
    wordFirst.style.display = 'block';
    wordFirst.style.color = 'hsl(0, 100%, 74%)';
  } else {
    image.style.display = 'none';
    firstDiv.style.borderColor = 'green';
    wordFirst.style.display = 'none';
  }

  const img = document.getElementById('image-2');
  const barList = document.getElementById('last-text');
  const secondDiv = document.getElementById('target-2');
  const wordSecond = document.getElementById('second-para');

  if(barList.value === "") {
    img.style.display = 'block';
    secondDiv.style.borderColor = 'hsl(0, 100%, 74%)';
    wordSecond.style.display = 'block';    
    wordSecond.style.color = 'hsl(0, 100%, 74%)';
  } else {
    img.style.display = 'none';
    secondDiv.style.borderColor = 'green';
    wordSecond.style.display = 'none';
  }

  const pic = document.getElementById('image-3');
  const input = document.getElementById('email');
  const thirdDiv = document.getElementById('target-3');
  const wordThird = document.getElementById('third-para');
  const emailVerify = input.checkValidity();

  if(input.value === "" || !emailVerify) {
    pic.style.visibility = 'visible';
    thirdDiv.style.borderColor = 'hsl(0, 100%, 74%)';
    wordThird.style.visibility = 'visible';
    wordThird.style.color = 'hsl(0, 100%, 74%)';
  } else {
    pic.style.visibility = 'hidden';
    thirdDiv.style.borderColor = 'green';
    wordThird.style.visibility = 'hidden';
  }

  const pics = document.getElementById('image-4');
  const list = document.getElementById('password');
  const fourthDiv = document.getElementById('target-4');
  const wordFour = document.getElementById('fourth-para');

  // console.log(wordFour);

  if(list.value === "") {
    pics.style.visibility = 'visible';
    fourthDiv.style.borderColor = 'hsl(0, 100%, 74%)';
    wordFour.style.visibility = 'visible';
    wordFour.style.color = 'hsl(0, 100%, 74%)';
  } else {
    pics.style.visibility = 'hidden';
    fourthDiv.style.borderColor = 'green';
    wordFour.style.visibility = 'hidden';
  }
});