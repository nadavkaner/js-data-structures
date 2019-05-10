// Find the length of largest subarray with 0 sum
// Given an array of integers, find length of the largest subarray with sum equals to 0.

// Input: arr[] = {15, -2, 2, -8, 1, 7, 10, 23};
// Output: 5
// The largest subarray with 0 sum is -2, 2, -8, 1, 7

// Input: arr[] = {1, 2, 3}
// Output: 0
// There is no subarray with 0 sum

// Input: arr[] = {1, 0, 3}
// Output: 1

function longestSumWithZero(arr) {
  let sum = 0;
  let longest = 0;
  const sumKeeper = {};
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === 0) {
      longest = i + 1;
    }

    if (sumKeeper.hasOwnProperty(sum)) {
      if (longest < i - sumKeeper[sum]) {
        longest = i - sumKeeper[sum];
      }
    } else {
      sumKeeper[sum] = i;
    }
  }

  return longest;
}

const arr = [15, -2, 2, -8, 1, 7, 10, 23];
const arr2 = [1, 2, 3];
const arr3 = [1, 0, -1];

console.log(longestSumWithZero(arr3));
