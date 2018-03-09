// Write an Array#dups method that will return a hash containing the indices of all
// duplicate elements. The keys are the duplicate elements; the values are
// arrays of their indices in ascending order, e.g.
// [1, 3, 4, 3, 0, 3, 0].dups => { 3 => [1, 3, 5], 0 => [4, 6] }

Array.prototype.dups = function() {
  let res = {};
  for (let i = 0; i < this.length; i++) {
    if (res[this[i]] === undefined){
      res[this[i]] = [i];
    } else {
      res[this[i]].push(i);
    }
  }
  let filtred = {};
  for(let key in res){
    if(res[key].length > 1){
      filtred[key] = res[key];
    }
  }
  return filtred;
};

console.log([1, 3, 4, 3, 0, 3, 0].dups());
