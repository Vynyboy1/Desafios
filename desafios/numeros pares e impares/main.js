let num = [[], []];

let arr = "4, 3, 1, 2, 5".split(",");
console.log(arr);

for (let i = 0; i <= arr.length - 1; i++) {
  if (arr[i] % 2 === 0) {
    num[0].push(arr[i]);
  } else {
    num[1].push(arr[i]);
  }
}

let arr1 = [];
let teste = 0;
// console.log(num[0].length);
for (let i = 0; i <= num[0].length - 1; i++) {
  teste = num[0][i] + 1;
  arr1.push(num[0][i]);
}
for (let i = 0; i <= num[1].length - 1; i++) {
  arr1.push(num[1][i]);
}

console.log(arr1.join());
console.log(arr1.join().split());
console.log(arr1.splice());
