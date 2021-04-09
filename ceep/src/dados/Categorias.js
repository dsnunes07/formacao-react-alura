class Categorias {
  constructor() {
    this.categorias = [];
    this._inscritos = [];
  }

  inscrever(func) {
    this._inscritos.push(func)
  }

  notificar() {
    this._inscritos.forEach((inscrito) => {
      inscrito(this.categorias);
    })
  }

  addCategory(category) {
    this.categorias.categorias.push(category)
    this.notificar();
  }
}

export default Categorias;
