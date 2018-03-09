Array.prototype.myEach = function (func) {
  for(let i = 0; i < this.length; i++){
    func(i);
  }
  return this;
};
