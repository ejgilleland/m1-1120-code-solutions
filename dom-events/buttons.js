function handleClick(event) {
  console.log('button clicked');
  console.log('click event object:', '\n', event);
  console.log('target property of click event object: ', '\n', event.target);
}

var $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('mouseover event object: ', '\n', event);
  console.log('target property of mouseover event object: ', '\n', event.target);
}

var $mouseover = document.querySelector('.hover-button');
$mouseover.addEventListener('mouseover', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('double click event object: ', '\n', event);
  console.log('target property of double click event object: ', '\n', event.target);
}

var $doubleClick = document.querySelector('.double-click-button');
$doubleClick.addEventListener('dblclick', handleDoubleClick, false);
