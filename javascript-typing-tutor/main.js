var i = 0;
var textList = document.querySelectorAll('span');

addEventListener('keydown',
  function (event) {
    if (i < textList.length) {
      if (textList[i].textContent === event.key) {
        textList[i].className = 'correct';
        i++;
        if (i < textList.length) {
          textList[i].className = 'active';
        }
      } else textList[i].className = 'incorrect';
    }
  }
);
