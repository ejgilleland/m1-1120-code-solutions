/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  return number < 5;
}

function isEven(number) {
  return (number % 2) === 0;
}

function startsWithJ(string) {
  return string[0] === 'J';
}

function isOldEnoughToDrink(person) {
  return person.age >= 21;
}

function isOldEnoughToDrive(person) {
  return person.age >= 16;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'This substance is neutral';
  } else if ((pH < 7) && (pH >= 0)) {
    return 'This substance is an acid';
  } else if ((pH > 7) && (pH <= 14)) {
    return 'This substance is a base';
  } else {
    return 'Invalid pH level';
  }
}

/*
Made this for fun because I read ahead by accident!!
Commenting out because of linter

function switchAcidity(pH) {
  switch (true) {
    case pH === 7:
      return "neutral";
    case ((pH >= 0) && pH < 7):
      return "acid";
    case ((pH > 7) && (pH <= 14)):
      return "base";
  }
  return "not a valid pH";
}
*/

function introduceWarnerBro(name) {
  if (typeof name === 'string') {
    if ((name.toLowerCase() === 'yakko') || (name.toLowerCase() === 'wakko')) {
      return "We're the warner brothers!";
    } else if (name.toLowerCase() === 'dot') {
      return "I'm cute~";
    }
  }
  return 'Goodnight everybody!';
}
