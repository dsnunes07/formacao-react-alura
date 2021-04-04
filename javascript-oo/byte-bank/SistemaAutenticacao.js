/* Ser autenticável significa ter a propriedade senha */
export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }

    return false;
  }

  static ehAutenticavel(autenticavel) {
    // verifica se a chave "autenticar" existe dentro do objeto e se ela é uma função
    return "autenticar" in autenticavel &&
      autenticavel.autenticar instanceof Function;
  }
}
