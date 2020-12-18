
var colors = [
  'red',
  'white',
  'blue'
];

/* array literal with the strings red, white, and blue being
assigned to the variable colors
*/
console.log('value of colors[0]', colors[0]);
console.log('value of colors[1]', colors[1]);
console.log('value of colors[2]', colors[2]);

// we are calling the log method of the console object with the arguments
// [string] and colors at 2

var america = 'America is ' + colors[0] + ', ' + colors[1] + ', and ' +
              colors[2] + '.';
console.log(america);

colors[2] = 'green';

var mexico = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' +
  colors[2] + '.';
console.log(mexico);
console.log('colors array: ', colors);

var students = [
  'Jar Jar',
  'Obi Wan',
  'Anakin',
  'Yoda'
];

var numberOfStudents = students.length;
// the value stored in the length property of the students object
// is being assigned to the variable named numberOfStudents

console.log('There are ' + numberOfStudents + ' students in the class.');
// we are calling the log method of the console object with one argument
// string is being concatenated with the value stored within the variable
// numberOfStudents which is being concatenated with a string
// & the result of that expression is being passed as the argument
var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
// students at lastIndex is being assigned to the variable named lastStudent
console.log('The last student in the array is ' + lastStudent + '.');

console.log('students array: ', students);
