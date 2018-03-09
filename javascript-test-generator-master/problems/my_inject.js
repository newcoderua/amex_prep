// Monkey patch the Array class and add a my_inject method. If my_inject receives
// no argument, then use the first element of the array as the default accumulator.

Array.prototype.myReduce = function (func, acc) {
  let i = 0;
  if (acc === undefined){
    i = 1;
    acc = this[0];
  }
  while(i < this.length){
    sum = func(sum, this[i]);
    i++;
  }
  return sum;
};
