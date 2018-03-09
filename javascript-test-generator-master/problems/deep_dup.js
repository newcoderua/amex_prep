// Using recursion and the is_a? method,
// write an Array#deep_dup method that will perform a "deep" duplication of the interior arrays.

function deepDup(arr) {
  let res = [];
  for (var i = 0; i < arr.length; i++) {
    if(typeof arr[i] === Array){
      deepDup(arr[i]);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
arr = [1, 2, [3, [4]]];
console.log(deepDup(arr));

console.log((objectId(arr)) === (objectId(deepDup(arr))));
