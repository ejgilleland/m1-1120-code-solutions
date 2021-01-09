
console.log('hello, world');

console.log('DOM querySelector method returning the first element of type h1: ', '\n', document.querySelector('h1'));
console.dir(document.querySelector('h1'));

console.log("DOM querySelector method returning the element with an id of 'explanation': ", '\n', document.querySelector('#explanation'));
console.dir(document.querySelector('#explanation'));

console.log("DOM querySelector method returning the first element with a class of 'hint': ", '\n', document.querySelector('.hint'));
console.dir(document.querySelector('.hint'));

console.log('DOM querySelectorAll method returning a nodelist for all elements of type p: ', '\n', document.querySelectorAll('p'));

console.log("DOM querySelectorAll method returning a nodelist for all elements of class 'example-link': ", '\n', document.querySelectorAll('.example-link'));
