Array.prototype.bubbleSort = function (func) {
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
  for(let i = 0; i < this.length; i++){
    for (var j = 0; j < this.length - 1; j++) {
      if(j + 1 > this.length -1) continue;
      if (func(this[j], this[j + 1]) === 1){
        let temp = this[j + 1];
        this[j + 1] = this[j];
        this[j] = temp;
      }
    }
  }
  return this;
};

console.log([2, 1, 5, 3, 4, 7, 2].bubbleSort());
