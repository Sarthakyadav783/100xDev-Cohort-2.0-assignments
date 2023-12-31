/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Remove spaces and convert to lowercase for case-insensitive comparison
  const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

  // Check if the lengths are different, if so, they can't be anagrams
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Sort the characters in both strings and compare
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

// Example usage:
const result1 = isAnagram('listen', 'silent'); // true
const result2 = isAnagram('hello', 'world');   // false

console.log(result1);
console.log(result2);


module.exports = isAnagram;
