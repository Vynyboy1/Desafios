function clumsy(n) {
  if (n == 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  }
  if (n == 3) {
    return 6;
  }
  let sum = 0;
  let isFirstTime = true;
  let addThemUp = 0;
  while (n - 3 > 0) {
    if (isFirstTime) {
      sum = sum + (n * (n - 1)) / (n - 2);
      isFirstTime = false;
      addThemUp = addThemUp + (n - 3);
    } else {
      sum = sum - (n * (n - 1)) / (n - 2);
      sum = Number(sum.toFixed(0));
      addThemUp = addThemUp + (n - 3);
    }
    n = n - 4;
  }
  sum = sum + addThemUp;
  if (n == 1) {
    sum = sum - 1;
  } else if (n == 2) {
    sum = sum - 2;
  } else if (n == 3) {
    sum = sum - 6;
  }
  return sum;
}

console.log(clumsy(10));
