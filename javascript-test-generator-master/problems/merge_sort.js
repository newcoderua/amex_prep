// Write an Array#merge_sort method; it should not modify the original array.

Array.prototype.mergeSort = function (func) {
  if (this.length === 1) return this;
  if (typeof func != "function"){
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
  let mid = Math.floor(this.length / 2);
  let left = this.slice(0, mid).mergeSort(func);
  let right = this.slice(mid).mergeSort(func);

  return left.merge(right, func);
};

Array.prototype.merge = function (right, func) {
  let merged = [];
  while ((this.length != 0) && (right.length != 0)){
    if (func(this[0], right[0]) === 1){
      merged.push(right.shift());
    } else {
      merged.push(this.shift());
    }
  }
  return merged.concat(this).concat(right);
};

console.log([2, 5, 1, 3, 2, 3, 2, 8].mergeSort());
