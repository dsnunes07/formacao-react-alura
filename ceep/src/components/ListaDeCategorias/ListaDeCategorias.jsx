import { Component } from "react";
import "./estilo.css"

class ListaDeCategorias extends Component {
  _handleEventoInput(event) {
    if (event.key === "Enter") {
      let category = event.target.value;
      this.props.addCategory(category);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((categoria, index) => {
            return (
              <li className="lista-categorias_item" key={index}>
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="add categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;