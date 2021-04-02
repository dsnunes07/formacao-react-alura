export class ContaCorrente {
  agencia;
  // #saldo = 0;(nova proposta)
  _saldo = 0 // atributo não realmente privado

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
}