/* exported reverse */
function reverse(array) {
  var reverseArray = [];
  for (var i = 0, d = (array.length - 1); i < array.length; i++, d--) {
    reverseArray[i] = array[d];
  }
  return reverseArray;
}
