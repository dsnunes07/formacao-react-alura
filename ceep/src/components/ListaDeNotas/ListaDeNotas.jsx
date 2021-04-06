import { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {

  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map(({title, content}, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota title={title} content={content} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
