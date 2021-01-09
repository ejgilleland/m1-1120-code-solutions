
var clicks = 0;
var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

function hotButtonClicker() {
  clicks++;
  clickCount.textContent = 'Clicks: ' + clicks;
  switch (true) {
    case clicks < 4:
      hotButton.className = 'hot-button cold';
      break;
    case clicks < 7:
      hotButton.className = 'hot-button cool';
      break;
    case clicks < 10:
      hotButton.className = 'hot-button tepid';
      break;
    case clicks < 13:
      hotButton.className = 'hot-button warm';
      break;
    case clicks < 16:
      hotButton.className = 'hot-button hot';
      break;
    case clicks < 25:
      hotButton.className = 'hot-button nuclear';
      break;
    case clicks > 25:
      document.querySelector('main').className = 'apocalypse';
      break;
  }
}

hotButton.addEventListener('click', hotButtonClicker, false);
