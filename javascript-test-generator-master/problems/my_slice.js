// write String.prototype.mySlice. It should take a start index and an
// (optional) end index.

String.prototype.mySlice = function (start, end) {
  let sliced = [];
  if(end === undefined || end > this.length) end = this.length - 1;
  for(let i = start; i < end; i++){
    sliced.push(this[i]);
  }
  return sliced;
};


console.log([1, 2, 3, 4, 5].slice(0, 3));
console.log([1, 2, 3, 4, 5].slice(0));
console.log([1, 2, 3, 4, 5].slice(2, 6));
