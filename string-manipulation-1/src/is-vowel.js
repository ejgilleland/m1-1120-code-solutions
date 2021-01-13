/* exported isVowel */
function isVowel(character) {
  if (character.toLowerCase() === 'a' ||
    character.toLowerCase() === 'e' ||
    character.toLowerCase() === 'i' ||
    character.toLowerCase() === 'o' ||
    character.toLowerCase() === 'u'
  ) {
    return true;
  } else return false;
}
