import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  agencia;
  _cliente;

  // #saldo = 0;(nova proposta)
  _saldo = 0 // atributo não realmente privado
  
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  sacar(valor) {
    if (valor <= 0) {
      return;
    }
    if (valor >= this._saldo) {
      console.log("Saldo insuficiente");
      return 0;
    }
    this._saldo -= valor;
    return valor;
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
    }
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor)
    conta.depositar(valorSacado);
  }
}