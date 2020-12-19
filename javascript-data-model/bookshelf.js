var bookshelf = [
  {
    isbn: '978-1491929483',
    title: 'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett'
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    isbn: '978-0692232699',
    title: 'Build APIs You Won\'t Hate: Everyone and their dog wants an API, so you should probably learn how to build them',
    author: 'Phil Sturgeon & Laura Bohill'
  }
];

console.log("The author of '" + bookshelf[1].title + "':", bookshelf[1].author);
/* we are calling the log method of the console argument, a string and the
value stored in the author property of bookshelf at [1] */

console.log("The ISBN of '" + bookshelf[0].title + "': ", bookshelf[0].isbn);
console.log('The third book in the bookshelf is: ', "'" + bookshelf[2].title + "'.");
