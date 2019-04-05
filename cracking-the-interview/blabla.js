function hourglassSum(arr) {
  const steps = [[-1, -1], [-1, 0], [-1, 1], [1, -1], [1, 0], [1, 1]];
  let maxSum = -9999999;
  for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
      let startInt = arr[i][j];
      const sum = steps.reduce(
        (cur, s) => (cur += arr[i + s[0]][j + s[1]]),
        startInt
      );
      console.log("i ", i);
      console.log("j ", j);
      console.log("sum ", sum);
      if (sum > maxSum) {
        maxSum = sum;
        console.log("maxSum ", sum);
      }
    }
  }
  return maxSum;
}

const arr = [
  [-1, 1, -1, 0, 0, 0],
  [0, -1, 0, 0, 0, 0],
  [-1, -1, -1, 0, 0, 0],
  [0, -9, 2, -4, -4, 0],
  [-7, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]
];

console.log(hourglassSum(arr));
