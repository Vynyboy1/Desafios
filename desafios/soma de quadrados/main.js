let num = 50;
let sum;

function CreateSquare(num) {
  let square = [];
  for (let i = 1; i <= 10; i++) {
    if (i * i <= num) {
      square.push(i * i);
    }
  }
  return square;
}
function twonumber(num) {
  let square = CreateSquare(num);
  for (i = square.length - 1; i >= 0; i--) {
    for (j = square.length - 1; j >= 0; j--) {
      sum = square[i] + square[j];
      if (sum === num) {
        return 2;
      }
    }
  }
}

function threenumber(num) {
  let square = CreateSquare(num);
  for (i = square.length - 1; i >= 0; i--) {
    for (j = square.length - 1; j >= 0; j--) {
      for (k = square.length - 1; k >= 0; k--) {
        sum = square[i] + square[j] + square[k];
        if (sum === num) {
          return 3;
        }
      }
    }
  }
}

// console.log(threenumber(num));

console.log(twonumber(num) ? twonumber(num) : threenumber(num));
