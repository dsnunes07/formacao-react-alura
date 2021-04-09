import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.content = "";
    this.category = "Sem categoria";
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._createCard.bind(this)}>
        <select
          className="form-cadastro_input"
          onChange={this._handleCategoryChange.bind(this)}
        >
          <option>Sem categoria</option>
          {this.props.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>;
          })}
        </select>
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
  }

  _handleNoteChange(event) {
    event.stopPropagation();
    this.note = event.target.value;
  }

  _handleCategoryChange(event) {
    event.stopPropagation();
    this.category = event.target.value;
  }

  _createCard(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createCard(this.title, this.note, this.category);
  }
}

export default FormularioCadastro;
