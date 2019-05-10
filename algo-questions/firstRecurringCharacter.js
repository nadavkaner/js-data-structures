// Google question
// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// It should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
// It should return 1

// Given an array = [2, 3, 4, 5];
// It should return undefined

function firstRecurringChar(arr) {
  const occurens = {};

  for (let i = 0; i < arr.length; i++) {
    if (occurens[arr[i]] !== undefined) {
      return arr[i];
    }

    occurens[arr[i]] = arr[i];
  }

  return undefined;
}

console.log(firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]));
