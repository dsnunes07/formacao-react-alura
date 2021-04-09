import React, { Component } from "react";
import "./assets/App.css";
import "./assets/index.css";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";

// props: vem pelo construtor e é uma maneira de passar dados aos componentes
// state: propriedade que sempre que é atualizada faz o componente ser atualizado
// para atualizar o state, usar o assessor setState
class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: ["Games", "Música"],
    };
  }

  createCard(title, content, category) {
    console.log(category);
    const newNote = { title, content, category };
    const newNoteArray = [...this.state.notas, newNote];
    const newState = {
      notas: newNoteArray,
    };
    // o state é atualizado por um assessor
    this.setState(newState);
  }

  deleteCard(index) {
    let noteArray = this.state.notas;
    noteArray.splice(index, 1);
    this.setState({ notas: noteArray });
  }

  addCategory(category) {
    const categorias = [...this.state.categorias, category];
    const newState = { ...this.state, categorias: categorias };
    this.setState(newState);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          createCard={this.createCard.bind(this)}
          categorias={this.state.categorias}
        />
        <main className="conteudoPrincipal">
          <ListaDeCategorias
            categorias={this.state.categorias}
            addCategory={this.addCategory.bind(this)}
          />
        </main>
        <ListaDeNotas
          deleteCard={this.deleteCard.bind(this)}
          notas={this.state.notas}
        />
      </section>
    );
  }
}

export default App;
