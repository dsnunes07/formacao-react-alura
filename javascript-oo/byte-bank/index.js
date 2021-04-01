class Cliente {
  nome;
  cpf;
  contaCorrente;
}

class ContaCorrente {
  agencia;
  saldo;

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente");
    }
  }
}

const cliente1 = new Cliente();
cliente1.nome = "Daniel";
cliente1.cpf = 11122233300;


const contaCorrente1 = new ContaCorrente();
cliente1.contaCorrente = contaCorrente1;
contaCorrente1.agencia = 1001;
contaCorrente1.saldo = 1000;
contaCorrente1.sacar(1)
console.log(contaCorrente1.saldo)
console.log(cliente1);
