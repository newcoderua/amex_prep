Array.prototype.myReverse = function () {
  let reversed = [];
  for(let i = this.length - 1; i >= 0; i--){
    reversed.push(this[i]);
  }
  return reversed;
};

console.log([1, 2, 3, 4].myReverse());
