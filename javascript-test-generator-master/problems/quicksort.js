// Write a monkey patch of quick sort that accepts a callback

Array.prototype.quickSort = function (func) {
  if (this.length <= 1) return this;
  if(typeof func != "function"){
    func = (x, y) => {
      if (x === y){
        return 0;
      } else if (x > y){
        return 1;
      } else if (x < y){
        return -1;
      }
    };
  }
  let pivot = this[0];
  let left = [];
  let right = [];
  for (var i = 1; i < this.length; i++) {
    if (func(this[i], pivot) === 1){
      right.push(this[i]);
    } else {
      left.push(this[i]);
    }
  }

  return left.quickSort(func).concat([pivot]).concat(right.quickSort(func));
};


console.log([3, 2, 6, 1, 5, 3, 24, 23, 23 ,5, 3, 54].quickSort());
