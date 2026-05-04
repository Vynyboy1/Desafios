class Contabancaria:
    """ 
    
    Classe para Criar uma conta bancaria, com id, nome do titular e saldo. 
    Entrada:

    Variavel = Contabancaria(id, nome, saldo)

    id: numero da conta
    nome: nome do titular da conta
    saldo: valor do saldo da conta
    
    """
    def __init__(self,id, nome, saldo):
        self.id = id
        self.titular = nome
        self.saldo = saldo
    def __str__(self):
        return f"A conta Titular é {self.id} do usuario {self.titular}: Saldo é {self.saldo:,.2f} R$"

    def depositar(self, valor):
        self.saldo += valor

    
    def sacar(self, valor):
        self.saldo -= valor

c1 = Contabancaria('1', 'Gustavo', 3000)

c1.depositar(500)
c1.sacar(1000)
print(c1)