// Write a recursive method that returns the sum of all elements in an array

function recSum(nums) {
  if (nums.length === 1) return nums[0];

  return nums[0] + recSum(nums.slice(1));
}

console.log(recSum([1, 2, 3, 4]));
