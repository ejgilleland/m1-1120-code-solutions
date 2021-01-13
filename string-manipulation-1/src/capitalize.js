/* exported capitalize */
function capitalize(word) {
  const first = word.slice(0, 1);
  const last = word.slice(1, word.length);
  word = first.toUpperCase() + last.toLowerCase();
  return word;
}
