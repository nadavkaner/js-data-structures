// Dutch national flag problem
// Given an array A[] consisting 0s, 1s and 2s, write a function that sorts A[].
// The functions should put all 0s first, then all 1s and all 2s in last.
function DNF(arr) {
  const sortedArray = [...arr];

  let L = 0,
    M = 0,
    H = sortedArray.length - 1;

  while (M <= H) {
    switch (sortedArray[M]) {
      case 0: {
        sortedArray[M] = sortedArray[L];
        sortedArray[L] = 0;
        L++;
        M++;
        break;
      }
      case 1: {
        M++;
        break;
      }
      case 2: {
        sortedArray[M] = sortedArray[H];
        sortedArray[H] = 2;
        H--;
        break;
      }
    }
  }

  return sortedArray;
}

/*
const testCase1 = [0, 1, 2, 0, 1, 2];
const testCase2 = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

console.log(DNF(testCase1));
console.log(DNF(testCase2));
*/
