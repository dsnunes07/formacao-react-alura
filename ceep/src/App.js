import React, { Component } from "react";
import "./assets/App.css";
import "./assets/index.css";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

// props: vem pelo construtor e é uma maneira de passar dados aos componentes
// state: propriedade que sempre que é atualizada faz o componente ser atualizado
// para atualizar o state, usar o assessor setState
class App extends Component {
  
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
        categorias={this.categorias.categorias}
          createCard={this.notas.criarNota}
        />
        <main className="conteudoPrincipal">
          <ListaDeCategorias
            addCategory={this.categorias.addCategory}
            categorias={this.categorias}
          />
        </main>
        <ListaDeNotas
          deleteCard={this.notas.apagarNota}
          notas={this.notas.notas}
        />
      </section>
    );
  }
}

export default App;
