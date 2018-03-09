Array.prototype.myFilter = function (func) {
  let selected = [];
  for(let i = 0; i < this.length; i++){
    if(func(this[i])){
      selected.push(this[i]);
    }
  }
  return selected;
};


Array.prototype.myFilter = function (func) {
  let selected = [];
  this.forEach((el) => {
    if(func(el)) selected.push(el);
  });
  return selected;
}

console.log([1, 2, 3, 4, 5, 6].myFilter(function(el){
  if (el % 2 === 0) return true;
  return false;
}));
