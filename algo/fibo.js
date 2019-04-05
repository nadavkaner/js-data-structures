// Return the n-th fibo number
function fiboRecursion(n) {
  if (n <= 1) {
    return n;
  }

  return fiboRecursion(n - 1) + fiboRecursion(n - 2);
}

// Return the n-th fibo number using memoization
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
