// return b^n recursively. Your solution should accept negative values
// for n

function exponent(b, n) {
  if(n === 1) return b;

  if (n > 0){
    return b * exponent(b, n - 1);
  } else {
    return 1 / b * exponent(b, n + 1);
  }
}

console.log(exponent(2, -3));
