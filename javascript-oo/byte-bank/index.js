import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js' 

const cliente1 = new Cliente();
cliente1.nome = "Daniel";
cliente1.cpf = 11122233300;

const cliente2 = new Cliente();
cliente2.nome = "Mayara";
cliente2.cpf = 11212232200

const contaCorrente1 = new ContaCorrente();
contaCorrente1.cliente = cliente1;
contaCorrente1.agencia = 1001;
contaCorrente1.depositar(300);

const contaCorrente2 = new ContaCorrente();
contaCorrente2.agencia = 102;
contaCorrente2.cliente = cliente2;
let valorTransferencia = 115;
contaCorrente1.transferir(valorTransferencia, contaCorrente2);
console.log(valorTransferencia)
console.log(contaCorrente1, contaCorrente2)