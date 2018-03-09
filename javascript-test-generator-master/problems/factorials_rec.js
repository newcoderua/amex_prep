// Write a recursive method that returns the first "num" factorial numbers.
// Note that the 1st factorial number is 0!, which equals 1. The 2nd factorial
// is 1!, the 3rd factorial is 2!, etc.

function factorialsRec(num) {
  if(num === 1) return [1];

  let next = factorialsRec(num - 1);
  next.push(next[next.length - 1] * (num - 1));
  return next;
}

console.log(factorialsRec(5));
