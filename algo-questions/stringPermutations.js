function permutations(str) {
  return permutationsImp(str, 0, str.length);
}

function permutationsImp(str, start, end) {
  if (start === end) {
    console.log(str);
  }

  for (let i = start; i < end; i++) {
    const swapedStr = swap(str, start, i);
    permutationsImp(swapedStr, start + 1, end);
  }
}

function swap(str, i, j) {
  const newStr = [...str];
  [newStr[i], newStr[j]] = [newStr[j], newStr[i]];
  return newStr.join('');
}

permutations('ABC');