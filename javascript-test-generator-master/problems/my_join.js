Array.prototype.myJoin = function (separator) {
  let res = '';
  for(let i = 0; i < this.length; i++){
    if (i != this.lenght - 1){
      res += this[i] + separator;
    } else {
      res += this[i];
    }
  }
  return res;
};


console.log([1, 2, 3, 4].myJoin(","));
