var clicks = 0;
var room = document.querySelector('body');
var lightbulb = document.querySelector('.lightbulb');

lightbulb.addEventListener('click',
  function () {
    clicks++;
    if (clicks % 2 === 0) {
      lightbulb.className = 'lightbulb bulb-off';
      room.className = 'room-off';
    } else if (clicks % 2 === 1) {
      lightbulb.className = 'lightbulb bulb-on';
      room.className = 'room-on';
    }
  });
