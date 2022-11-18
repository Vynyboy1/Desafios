// Objetos sao um agrupamento de dados, que armazenam uma chave e um valor.
const Pessoa = {
  nome: "vinicius",
  idade: 26,

  descrever: function () {
    console.log(`Meu nome e ${this.nome} e minha idade e ${this.idade} anos`);
  },
};
/*atribuindo uma chave e valor de forma alternativa.
Pessoa.altura = 1.63;

console.log(Pessoa.nome);
console.log(Pessoa.idade);
console.log(Pessoa);
*/
console.log(Pessoa[`nome`]);
Pessoa.descrever();
