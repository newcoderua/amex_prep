Array.prototype.flatten = function () {
  let flatten = [];
  for (let i = 0; i < this.length; i++) {
    console.log(this[i] instanceof Array);
    if (this[i] instanceof Array){
      flatten = flatten.concat(this[i].flatten());
    } else {
      flatten.push(this[i]);
    }
  }
  return flatten;
};

console.log([1, 2, [3, [4]]].flatten());
