/* exported omit */
function omit(source, keys) {
  var newSource = {};
  for (const property in source) {
    if (!keys.includes(property)) {
      newSource[property] = source[property];
    }
  }
  return newSource;
}
