function digitalRoot(num) {
  while (num > 10) {
    num = digitalRootStep(num);
  }

  return num;
}

function digitalRootStep(num) {
  let root = 0;

  while (num > 0) {
    root += num % 10;
    num = Math.floor(num/10);
  }

  return root;
}



function digitalRoot(num){
  if(num < 10) return num;
  return digitalRoot(num % 10 + (num - (num % 10)) / 10);
}

console.log(digitalRoot(123));
