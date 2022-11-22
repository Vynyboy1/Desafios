function gets() {
  return 10;
}

function print(content) {
  console.log(content);
}

function maior(lista) {
  let maior = 0;
  for (i in lista) {
    if (maior < lista[i]) {
      maior = lista[i];
    }
  }
  return maior;
}

function geraNum() {
  const num = Math.random() * 100;
  return num.toFixed(0);
}
function geraList(num = 5) {
  const lista = [];
  for (let i = 0; i < num; i++) {
    lista.push(geraNum());
  }
  return lista;
}

module.exports = { gets, print, maior, geraNum, geraList };
/*
forma 1
module.exports.gets = gets;
module.exports.print = print;

 
forma 2
definindo um objeto
module.exports = {
  gets: gets,
  print: print,
  ...,
};
*/
