// Return the n-th fibo number O(2^n)(exponential big o)
function fiboRecursion(n) {
  if (n <= 1) {
    return n;
  }

  return fiboRecursion(n - 1) + fiboRecursion(n - 2);
}

// Return the n-th fibo number using memoization (Top-Down)
function fiboMemo(n, memo = {}) {
  if (memo[n]) {
    return memo[n];
  }

  if (n <= 1) {
    memo[n] = n;
    return n;
  }

  memo[n] = fiboMemo(n - 1) + fiboMemo(n - 2);
  return memo[n];
}

// Return the n-th fibo number using tabulation (Bottom-Up)
function fiboTabulation(n) {
  const fibo = {};
  fibo[0] = 0;
  fibo[1] = 1;

  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo[n];
}
