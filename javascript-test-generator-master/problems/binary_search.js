// # Write a monkey patch of binary search:
// # E.g. [1, 2, 3, 4, 5, 7].my_bsearch(5) => 4

Array.prototype.myBsearch = function (target, func) {
  if (this.length === 0) return null;
  if(typeof func != "function"){
    func = (x, y) => {
      if(x === y){
        return 0;
      } else if (x > y){
        return 1;
      } else if (x < y){
        return -1;
      }
    };
  }
  let mid = Math.floor(this.length / 2);
  if (this[mid] === target){
    return mid;
  } else if (func(this[mid], target) === 1){
    return this.slice(0, mid).myBsearch(target, func);
  } else {
    let result = this.slice(mid + 1).myBsearch(target, func);
    return result === null ? null : mid + 1 + result;
  }
};

console.log([1, 2, 3, 4, 5, 7].myBsearch(5));
