// Write a recursive method that returns all of the permutations of an array

function permutations(array) {
  if (array.length <= 1) return [array];
  let first = array.shift();
  perms = permutations(array.slice(1));
  let total_permutations = [];
  for (var i = 0; i < perms.length; i++) {
    let perm = perms[i];
    for (var j = 0; j < perm.length; j++) {
      total_permutations.push(perm.slice(0, i).concat([first]).concat(perm.slice(i)));
    }
  }
  return total_permutations;
}

console.log(permutations([1, 2, 3]));
