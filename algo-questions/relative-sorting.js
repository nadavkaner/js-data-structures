// Sort an array according to the order defined by another array
// Given two arrays A1[] and A2[], sort A1 in such a way that the relative order among the elements will be same as those are in A2. 
// For the elements not present in A2, append them at last in sorted order.

const mergeSort = require('../sorting-algorithems/merge-sort');

// Binary search for first occurence and return index - recursive approach
function findFirstOccurence(arr, low, high, value) {
  let mid = Math.floor((low + high) / 2);
  
  if (low <= high) {
    if (arr[mid] === value && (mid === 0 || arr[mid] > arr[mid - 1])) {
      return mid;
    }

    if (arr[mid] < value) {
      return findFirstOccurence(arr, mid + 1, high, value);
    } else {
      return findFirstOccurence(arr, low, mid - 1, value);
    }
  }

  return -1;
}

function relativeSorting(arr1, arr2) {
  const temp = mergeSort([...arr1]);
  const visited = [...arr1].map(x => 0);
  let idx = 0;

  for (let i = 0; i < arr2.length; i++) {
    const firstIdx = findFirstOccurence(temp, 0, temp.length - 1, arr2[i]);

    console.log(arr2[i], firstIdx);
    if (firstIdx === -1) {
      continue;
    }
    
    for (let j = firstIdx; j < temp.length && temp[j] === arr2[i]; j++) {
      arr1[idx] = arr2[i];
      visited[j] = 1;
      idx++;
    }
  }

  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
      arr1[idx++] = temp[i];
    }
  }
  
  return arr1;
}

console.log(relativeSorting([2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8], [2, 1, 8, 3]));