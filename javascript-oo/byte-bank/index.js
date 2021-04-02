import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js' 

const cliente1 = new Cliente();
cliente1.nome = "Daniel";
cliente1.cpf = 11122233300;


const contaCorrente1 = new ContaCorrente();
cliente1.contaCorrente = contaCorrente1;
contaCorrente1.agencia = 1001;
contaCorrente1.depositar(300)
const valorSacado = contaCorrente1.sacar(50);
console.log(valorSacado)
console.log(cliente1);
