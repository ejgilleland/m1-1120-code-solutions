// The Math Object
var firstNumber = 3;
var secondNumber = 7;
var thirdNumber = 5;

var maximumValue = Math.max(firstNumber, secondNumber, thirdNumber);
console.log('variable maximumValue: ', maximumValue);

var heroes = ['The Muffin Man', 'Dr. Eggman', 'Shrek', 'Bob Ross'];
var randomNumber = Math.random();

randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('variable randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('variable randomHero: ', randomHero);

// Array Methods
var library = [
  {
    title: 'Houseki no Kuni',
    author: 'Haruko Ichikawa'
  },
  {
    title: 'Mobile Suit Gundam Wing Endless Waltz: Glory of the Losers',
    author: 'Katsuyuki Sumizawa'
  },
  {
    title: 'Fullmetal Alchemist',
    author: 'Makoto Inoue'
  }
];

var lastBook = library.pop();
console.log('variable lastBook: ', lastBook);

var firstBook = library.shift();
console.log('variable firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('variable library: ', library);

// String Methods
var fullName = 'Jared Gilleland';
var firstAndLastName = fullName.split(' ');
console.log('variable firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('variable sayMyName: ', sayMyName);
