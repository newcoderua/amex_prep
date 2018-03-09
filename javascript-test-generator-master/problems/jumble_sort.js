// Jumble sort takes a string and an alphabet. It returns a copy of the string
// with the letters re-ordered according to their positions in the alphabet. If
// no alphabet is passed in, it defaults to normal alphabetical order (a-z).
//
// Example:
// jumble_sort("hello") => "ehllo"
// jumble_sort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'

function jumbleSort(str, alphabet = null) {
  if (alphabet === null){
    alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  }
  let res = '';
  for (var i = 0; i < alphabet.length; i++) {
    if (str.includes(alphabet[i])){
      res += numOccur(str, alphabet[i]);
    }
  }
  return res;
}
function numOccur(str, alphaLet){
  let res = "";
  let num = str.split(alphaLet).length - 1;
  for (var i = 0; i < num; i++) {
    res += alphaLet;
  }
  return res;
}
console.log(jumbleSort("hello")); //=> "ehllo"
console.log(jumbleSort("hello", ['o', 'l', 'h', 'e'])); //=> 'ollhe'
