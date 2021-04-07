import { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map(({ title, content }, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                index={index}
                title={title}
                content={content}
                deleteCard={this.props.deleteCard}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
