// Write a method that returns the median of elements in an array
// If the length is even, return the average of the middle two elements

Array.prototype.median = function () {
  let mid = this.length / 2;
  if (this.length % 2 === 0){
    return (this[mid] + this[mid - 1]) / 2;
  } else {
    return this[Math.floor(mid)];
  }
};

console.log([1, 2, 3].median());
console.log([1, 2, 3, 4].median());
