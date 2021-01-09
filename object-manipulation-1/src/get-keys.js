/* exported getKeys */
function getKeys(object) {
  var keyArray = [];
  var i = 0;
  for (var property in object) {
    keyArray[i] = property;
    i++;
  }
  return keyArray;
}
