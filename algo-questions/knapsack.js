function knapsack(w, wt, val, n) {
  if (n === 0 || w === 0) {
    return 0;
  }

  if (wt[n - 1] > w) {
    return knapsack(w, wt, val, n - 1);
  }

  return Math.max(
    knapsack(w, wt, val, n - 1),
    val[n - 1] + knapsack(w - wt[n - 1], wt, val, n - 1)
  );
}

const val = [60, 100, 120];
const wt = [10, 20, 30];
const w = 50;
const n = val.length;

console.log(knapsack(w, wt, val, n));
