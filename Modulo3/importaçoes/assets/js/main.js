// a função require só pode importar oque está sendo exportado no arquivo.
console.log("olá mundo");
const funcoes = require("./funcoes-auxiliares.js");
//exercicio
lista = funcoes.geraList();
const maior = funcoes.maior(lista);
console.log(`a lista criada contem os numeros ${lista}`);
console.log(`e o maior numero é ${maior}`);
