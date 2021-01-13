/* exported getValues */
function getValues(object) {
  var valuesArray = [];
  var i = 0;
  for (var property in object) {
    valuesArray[i] = object[property];
    i++;
  }
  return valuesArray;
}
