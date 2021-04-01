class Cliente {
  nome;
  cpf;
  agencia;
  saldo;
  rg;
}

const cliente1 = new Cliente();
cliente1.nome = "Daniel";
cliente1.cpf = 11122233300;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 112223334

const cliente2 = new Cliente();
cliente2.nome = "Eliana";
cliente2.cpf = 22233344400;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2)
