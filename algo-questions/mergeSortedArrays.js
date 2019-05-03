function mergeSortedArrays(arrFirst, arrSecond) {
  let i = 0,
    j = 0,
    k = 0;
  const result = [];
  while (i < arrFirst.length && j < arrSecond.length) {
    if (arrFirst[i] < arrSecond[j]) {
      result[k++] = arrFirst[i++];
    } else {
      result[k++] = arrSecond[j++];
    }
  }

  if (i < arrFirst.length) {
    result.push(...arrFirst.splice(i));
  } else {
    result.push(...arrSecond.splice(j));
  }

  return result;
}

const result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

console.log(result);
