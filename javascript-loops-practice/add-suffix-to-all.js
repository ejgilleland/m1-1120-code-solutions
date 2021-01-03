/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var withSuffixes = [];
  for (var i = 0; i < words.length; i++) {
    withSuffixes.push((words[i] + suffix));
  }
  return withSuffixes;
}
