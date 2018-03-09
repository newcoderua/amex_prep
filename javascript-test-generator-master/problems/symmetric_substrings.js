// Write a String#symmetric_substrings method that returns an array of substrings
// that are palindromes, e.g. "cool".symmetric_substrings => ["oo"]
// Only include substrings of length > 1.

String.prototype.symmetricSubstrings = function () {
  let res = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j < this.length + 1; j++) {
      let sub = this.slice(i, j);
      if (sub.length > 1 && !res.includes(sub) && sub === sub.split('').reverse().join('')){
        res.push(sub);
      }
    }
  }
  return res;
};

console.log("caramba".symmetricSubstrings());
