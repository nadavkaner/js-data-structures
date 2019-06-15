function* stringSubstrings(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      yield str.substring(i, j + 1);
    }
  }
}

for (let subStr of stringSubstrings("abcd")) {
  console.log(subStr);
}
