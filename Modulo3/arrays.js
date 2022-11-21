const lista = [];

for (let i = 0; i < 10; i++) {
  lista.push(i);
}
console.log(lista);
const pares = [];
const impares = [];
for (let i in lista) {
  if (i % 2 === 0) {
    pares.push(i);
  } else {
    impares.push(i);
  }
}

console.log(`lista de numeros pares ${pares}`);
console.log(`lista de numeros impares ${impares}`);
