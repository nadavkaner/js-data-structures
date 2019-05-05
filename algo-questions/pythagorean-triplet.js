// Pythagorean Triplet
// Given an array of integers, write a function that returns true if there is a triplet (a, b, c) that satisfies a2 + b2 = c2.

const mergeSort = require('../sorting-algorithems/merge-sort');

function pythagoreanTriplet(arr) {
  const sorted = mergeSort(arr.map(x => Math.pow(x, 2)));

  for (let i = arr.length - 1; i >= 2; i--) {
    const c = arr[i];

    let a = 0, b = i - 1;
    while (a < b) {
      const sum = arr[a] + arr[b];
      if (sum === c) {
        return true;
      } else {
        sum < c ? a++ : b--;
      }
    }
  }

  return false;
}

console.log(pythagoreanTriplet([3, 2, 4, 6, 5]));