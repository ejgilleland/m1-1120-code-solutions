/* exported pick */
function pick(source, keys) {
  var newSource = {};
  for (const property in source) {
    if (keys.includes(property) && source[property] !== undefined) {
      newSource[property] = source[property];
    }
  }
  // for(var i = 0; i < keys.length; i++) {
  //   if (source.hasOwnProperty(keys[i]) && source[keys[i]] !== undefined) {
  //   newSource[keys[i]] = source[keys[i]];
  //   }
  // }
  return newSource;
}
