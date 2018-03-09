// primes(num) returns an array of the first "num" primes.
// You may wish to use an is_prime helper method.

function primes(num) {
  let facs = [];
  let i = 2;
  while (facs.length < num){
    if (isPrime(i)) facs.push(i);
    i++;
  }
  return facs;
}

function isPrime(num){
  if(num < 2) return false;

  for(let i = 2; i < num; i++){
    if (num % i === 0) return false;
  }
  return true;
}


console.log(primes(5));
