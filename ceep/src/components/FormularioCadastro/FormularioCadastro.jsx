import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.content = "";
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._createCard.bind(this)}>
        {/*o this no javascript é dinâmico, então é preciso 
        explicitar para a chamada da função a qual instância nos referimos*/}
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleTitleChange.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleNoteChange.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }

  _handleTitleChange(event) {
    event.stopPropagation();
    this.title = event.target.value;
    console.log(this.title)
  }

  _handleNoteChange(event) {
    event.stopPropagation();
    this.note = event.target.value
    console.log(this.note);
  }

  _createCard(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createCard(this.title, this.note);
  }
}

export default FormularioCadastro;
