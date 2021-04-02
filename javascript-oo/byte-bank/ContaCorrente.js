export class ContaCorrente {
  agencia;
  cliente;

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

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor)
    conta.depositar(valorSacado);
  }
}