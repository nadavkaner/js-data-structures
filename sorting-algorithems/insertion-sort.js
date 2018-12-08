function insertionSort(array) {
  let i, j;

  for (i = 1; i < array.length; i++) {
    for (j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }

  return array;
}

exports.insertionSort = insertionSort;


// USAGE:

// const arr = [7,3,1,5,10,4]

// insertionSort(arr);
