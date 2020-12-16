var student = {
  firstName: 'Jared',
  lastName: 'Gilleland',
  age: 28
};

/* an object literal is being assigned to the variable named student
string is being assigned to the property firstName etc
*/

student.fullName = student.firstName + ' ' + student.lastName;
/* the value stored in the firstName property of the student object
//LEFT OF THE DOT is an OBJECT RIGHT OF THE DOT IS A PROPERTY
object.property */
console.log('student.fullName: ', student.fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Administration';

console.log('student.livesInIrvine: ', student.livesInIrvine);
/* we are calling the log method of the console object passing two
arguments, string and value stored within the livesInIrvine
property of the student object
*/
console.log('student.previousOccupation ', student.previousOccupation);

var vehicle = {
  make: 'Hyundai',
  model: 'Kona EV',
  year: '2020'
};

vehicle['color'] = 'blue-green??';
// string blue-green?? is being assigned to the color property of the vehicle object
vehicle['isConvertible'] = false;

console.log("vehicle['color']: ", vehicle['color']);
console.log("vehicle['isConvertible']: ", vehicle['isConvertible']);
console.log('variable vehicle: ', vehicle);

var pet = {
  name: 'Lemon God',
  type: 'cat'
};

delete pet.name;
delete pet['type'];
// the delete operator with the 'name' property of the pet object

console.log('variable pet: ', pet);
