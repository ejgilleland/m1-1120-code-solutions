var width = 7;
var height = 5;
var area = width * height;

console.log('area: ', area);
console.log('Data type for area: ', typeof area);

var bill = 5.25;
var payment = 6.00;
var change = payment - bill;

console.log('change: $', change);
console.log('Data type for change: ', typeof change);

var quizzes = 88;
var midterm = 85;
var final = 97;
var grade = (quizzes + midterm + final) / 3;

console.log('grade: ', grade);
console.log('Data type for grade: ', typeof grade);

var firstName = 'Jared';
var lastName = 'Gilleland';
var fullName = firstName + ' ' + lastName;

console.log('fullName: ', fullName);
console.log('Data type for fullName: ', typeof fullName);

var pH = 5;
var isAcidic = pH < 7;

console.log('isAcidic: ', isAcidic);
console.log('Data type for isAcidic: ', typeof isAcidic);

var headCount = 299;
var isSparta = headCount === 300;

console.log('isSparta: ', isSparta);
console.log('Data type for isSparta: ', typeof isSparta);

var motto = fullName;
motto = motto + ' is the GOAT';

console.log('motto: ', motto);
console.log('Data type for motto', typeof motto);
