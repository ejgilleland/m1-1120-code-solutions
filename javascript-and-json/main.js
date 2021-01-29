var books = [
  {
    isbn: '978-1-4557-7451-7',
    title: 'Modern Dental Assisting, 11th Ed',
    author: 'Doni L. Bird, Debbie S. Robinson'
  },
  {
    isbn: '978-0-321-99247-5',
    title: 'SQL Queries For Mere Mortals, 3rd Ed',
    author: 'John L Viescas, Michael J. Hernandez'
  },
  {
    isbn: '978-1-63236-727-3',
    title: 'Land of the Lustrous vol 8',
    author: 'Haruko Ichikawa'
  }
];

console.log('Book list: ', books);
console.log('typeof books: ', typeof books);

var stringifyBooks = JSON.stringify(books);
console.log('JSON.stringify(books): ', stringifyBooks);
console.log('typeof JSON.stringify(books): ', typeof stringifyBooks);

var student = '{"name": "Jared Gilleland","student-id": 2}';
console.log('JSON string for student: ', student);
console.log('typeof JSON string for student: ', typeof student);

var studentObject = JSON.parse(student);
console.log('studentObject: ', studentObject);
console.log('typeof studentObject: ', typeof studentObject);
