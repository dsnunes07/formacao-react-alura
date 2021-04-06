import React, { Component } from "react";
import "./assets/App.css";
import "./assets/index.css";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";

// props: vem pelo construtor e é uma maneira de passar dados aos componentes
// state: propriedade que sempre que é atualizada faz o componente ser atualizado
// para atualizar o state, usar o assessor setState
class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: []
    }
  }

  createCard(title, content) {
    const newNote = {title, content};
    const newNoteArray = [...this.state.notas, newNote]
    const newState = {
      notas: newNoteArray
    }
    // o state é atualizado por um assessor
    this.setState(newState);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro createCard={this.createCard.bind(this)}/>
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
