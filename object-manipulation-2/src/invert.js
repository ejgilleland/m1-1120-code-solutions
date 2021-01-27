/* exported invert */
function invert(source) {
  var invertedObject = {};
  var keyArray = Object.keys(source);
  var valueArray = Object.values(source);
  for (var i = 0; i < keyArray.length; i++) {
    invertedObject[valueArray[i]] = keyArray[i];
  }
  return invertedObject;
}
