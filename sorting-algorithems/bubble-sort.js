function bubbleSort(array) {
  let swapped = false;

  do {
    swapped = false;
    
    array.forEach((item, index) => {
      if (item > array[index + 1]) {
        [array[index], array[index + 1]] = [array[index + 1], array[index]]

        swapped = true;
      }
    })
  } while(swapped)

  return array;
}

exports.bubbleSort = bubbleSort;

/*
USAGE:

const arr = [7,3,1,5,10,4]

bubbleSort(arr);
*/