// Write a recursive method that takes in a string to search and a key string.
// Return true if the string contains all of the characters in the key
// in the same order that they appear in the key.
//
// string_include_key?("cadbpc", "abc") => true
// string_include_key("cba", "abc") => false

function stringIncludeKey(string, key) {
  if (key.length === 0) return true;
  let nextKeyChar = key[0];
  let keyIndex = string.indexOf(nextKeyChar);
  if (keyIndex < 0) return false;
  return stringIncludeKey(string.slice(keyIndex + 1), key.slice(1));
}



console.log(stringIncludeKey("cadbpc", "abc"));    // => true
console.log(stringIncludeKey("cba", "abc"));    // => false
