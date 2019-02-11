function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);

  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sorted = [];

  while(left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return [...sorted, ...right, ...left];
}

exports.mergeSort = mergeSort;

// USAGE:
// 
// const arr = [7,3,1,5,10,4,20,6,13]

// mergeSort(arr);