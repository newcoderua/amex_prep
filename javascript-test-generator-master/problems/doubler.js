// Write a method that doubles each element in an array

function doubler(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

console.log(doubler([1, 2, 3, 4]));
