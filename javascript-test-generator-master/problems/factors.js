// Write a method that returns the factors of a number in ascending order.

function factors(num) {
  let res = [];
  for (var i = 0; i <= num; i++) {
    if(num % i === 0){
      res.push(i);
    }
  }
  return res;
}

console.log(factors(10));
