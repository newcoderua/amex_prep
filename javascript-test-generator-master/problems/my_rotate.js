Array.prototype.rotate = function (num) {
  num = num % this.length;
  if (num > 0){
    return this.slice(num).concat(this.slice(0, num));
  } else {
    return this.slice(0, num).concat(this.slice(num));
  }
};

console.log([1, 2, 3, 4].rotate(3));
console.log([1, 2, 3, 4].rotate(6));
console.log([1, 2, 3, 4].rotate(-3));
