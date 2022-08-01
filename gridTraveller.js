#!/home/devi/.bun/bin/bun
"use strict";

const gridTraveller = (m, n, memo = {}) => {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
  return memo[key];
};

console.log(gridTraveller(2, 3));
console.log(gridTraveller(2, 2));
console.log(gridTraveller(3, 3));
console.log(gridTraveller(10, 10));
console.log(gridTraveller(20, 10));
console.log(gridTraveller(200, 100));
