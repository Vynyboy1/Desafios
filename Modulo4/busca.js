let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];

let valor = 30;
const lista = [];

for (i in elementos) {
  if (valor === elementos[i]) {
    console.log(`encontrei o valor ${valor} na posição ${Number(i) + 1}`);
    lista.push(elementos[i]);
  }
}
if (lista.length === 0) {
  console.log("Numero nao encontrado!");
}
