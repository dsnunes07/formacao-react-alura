import { Cliente } from './Cliente.js';
import { Conta } from './Conta.js';
import { ContaCorrente } from './ContaCorrente.js' ;
import { ContaPoupanca } from './ContaPoupanca.js';

const cliente1 = new Cliente("Daniel", 11122233300);
const cliente2 = new Cliente("Mayara", 11112232200);

const contaCorrente = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(100, cliente1, 1001);
// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaCorrente.sacar(10);
contaPoupanca.sacar(10);
console.log(contaCorrente, contaPoupanca);

const conta = new Conta(100, cliente1, 1001);