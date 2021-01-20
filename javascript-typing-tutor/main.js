var i = 0;
var textList = document.querySelectorAll('span');
var results = document.querySelector('.results');
var accuracyResults = document.getElementById('accuracy');
var resetButton = document.querySelector('.reset');
var keypresses = 0;

addEventListener('keydown',
  function (event) {
    if (textList[textList.length - 1].className !== 'correct') {
      keypresses++;
    }
    if (i < textList.length) {
      if (textList[i].textContent === event.key) {
        textList[i].className = 'correct';
        i++;
        if (i < textList.length) {
          textList[i].className = 'active';
        }
      } else textList[i].className = 'incorrect';
    }
    if (i === textList.length && results.className !== 'results') {
      results.className = 'results';
      accuracyResults.textContent += Math.floor(textList.length / keypresses * 10000) / 100 + '%';
    }
  }
);

resetButton.addEventListener('click',
  function (element) {
    i = 0;
    keypresses = 0;
    results.className = 'results hidden';
    accuracyResults.textContent = 'Your accuracy: ';
    textList[0].className = 'active';
    for (let reset = 1; reset < textList.length; reset++) {
      textList[reset].className = '';
    }
  }
);
