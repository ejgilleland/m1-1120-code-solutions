function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

/* there is a function definition named convertMinutesToSeconds with
one parameter named minutes. Opening curly brace for the function code block

line 3: value stored within the variable seconds is being returned from
the function
line 4: closing curly brace for the code block
*/
var convertMinutesToSecondsResult = convertMinutesToSeconds(6);
/* function convertMinutesToSeconds is being called
passing in one argument, 6
the return value is being assigned to
the variable named converMinutesToSecondsResult
*/

console.log('convertMinutesToSeconds with an argument of 6: ', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}
var greetJared = greet('Jared');
console.log('greet function with an argument of Jared: ', greetJared);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var getAreaResult = getArea(19, 17);
console.log('getArea with arguments of 19 & 17: ', getAreaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
var firstName = getFirstName({ firstName: 'Bob', lastName: 'Ross' });
console.log('getFirstName Result: ', firstName);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}
var lastArrayElement = getLastElement(['Do', 'you', 'believe', 'in', 'life', 'after', 'love?']);
console.log('getLastElement result: ', lastArrayElement);
