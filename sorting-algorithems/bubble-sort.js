function bubbleSortWithWhile(array) {
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

function bubbleSortWithSimpleFor(array) {
  const copy = [...array];
  let swapped;
  let length = array.length;
  for (let i = 0; i < length; i++) {
    swapped = false;
    
    for (let j = 0; j < length - i - 1; j++) {
      if (copy[j] > copy[j + 1]) {
        [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }

  return copy;
}

exports.bubbleSort = bubbleSortWithWhile;


// USAGE:

const arr = [7,3,1,5,10,4]

console.log(bubbleSortWithSimpleFor(arr));