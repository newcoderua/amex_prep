// Returns an array of all the subwords of the string that appear in the
// dictionary argument. The method does NOT return any duplicates.

String.prototype.realWordsInString = function (dictionary) {
  let res = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j < this.length + 1; j++) {
      let sub = this.slice(i, j);
      console.log(sub);
      if (dictionary.includes(sub) && !res.includes(sub)){
        res.push(sub);
      }
    }
  }
  return res;
};

var dictionary = ['at', 'cat', 'a', 'dog', 'animals', 'yo'];

console.log("cat".realWordsInString(dictionary));
