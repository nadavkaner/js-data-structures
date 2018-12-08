function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  const pivotIndex = array.length - 1;
  const pivot = array[pivotIndex];
  const left = [];
  const right = [];
  let i;

  for (i = 0; i < pivotIndex; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

exports.quickSort = quickSort;

// USAGE:

// const arr = [7,3,1,5,10,4,20,6,13]

// console.log(quickSort(arr));