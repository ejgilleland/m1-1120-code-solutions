/* exported compact */
function compact(array) {
  var compactArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      compactArray[compactArray.length] = array[i];
    }
  }
  return compactArray;
}
