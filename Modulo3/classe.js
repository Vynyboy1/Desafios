/* a Classe define um modelo de como um determinado objeto deve ser
no caso da Classe pessoas, do exemplo a baixo esta definindo quais os 
atributos que um objeto deve ter para ser da classe Pessoa.
*/
class Pessoa {
  nome;
  idade;
  ano_nascimento;

  // tornando uma chave obrigatoria
  constructor(nome, idade) {
    const data = new Date();
    this.nome = nome;
    this.idade = idade;
    this.ano_nascimento = data.getFullYear() - idade;
  }
  descrever() {
    console.log(
      `Meu nome e ${this.nome} e minha idade e ${this.idade} anos, nasceu em ${this.ano_nascimento}`
    );
  }
}
const Vincius = new Pessoa(`Vinicius`, 26);

Vincius.descrever();
