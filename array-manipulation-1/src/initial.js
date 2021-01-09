/* exported initial */
function initial(array) {
  var initialArray = [];
  for (var i = 0; (i < array.length - 1); i++) {
    initialArray[i] = array[i];
  }
  return initialArray;
}
