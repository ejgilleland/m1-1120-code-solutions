function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name: ', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('Value of ' + event.target.name + ': ', event.target.value);
}

var $nameInput = document.querySelector('input');
var $emailInput = document.querySelector('input:last-of-type');
var $textInput = document.querySelector('textarea');

$nameInput.addEventListener('focus', handleFocus);
$nameInput.addEventListener('blur', handleBlur);
$nameInput.addEventListener('input', handleInput);

$emailInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('input', handleInput);

$textInput.addEventListener('focus', handleFocus);
$textInput.addEventListener('blur', handleBlur);
$textInput.addEventListener('input', handleInput);
