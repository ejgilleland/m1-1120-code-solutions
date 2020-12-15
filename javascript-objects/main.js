var student = {
  firstName: 'Jared',
  lastName: 'Gilleland',
  age: 28
};

student.fullName = student.firstName + ' ' + student.lastName;
console.log('student.fullName: ', student.fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Administration';

console.log('student.livesInIrvine: ', student.livesInIrvine);
console.log('student.previousOccupation ', student.previousOccupation);

var vehicle = {
  make: 'Hyundai',
  model: 'Kona EV',
  year: '2020'
};

vehicle['color'] = 'blue-green??';
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

console.log('variable pet: ', pet);
