var a = 3;
var N = 18;
let soma = 0;

for (let i = 1; i <= N; i++) {
  if (i % a === 0) {
    soma = soma + i;
  }
}
console.log(soma);
