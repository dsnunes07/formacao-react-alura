import React, { Component } from "react";
import "./estilo.css";
// importar svg como componente react
import { ReactComponent as DeleteIcon } from "../../assets/images/delete.svg";

class CardNota extends Component {
  delete() {
    let index = this.props.index;
    this.props.deleteCard(index);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.title}</h3>
          <DeleteIcon className="deleteIcon" onClick={this.delete.bind(this)} />
        </header>
        <p className="card-nota_texto">{this.props.content}</p>
      </section>
    );
  }
}

export default CardNota;
