import React, { Component } from "react";
import { connect } from "react-redux";

import * as usuariosActions from "../../actions/usuariosActions";

//Stateless (componentes no funcionales)
/*Diferencias
No Funcionales no manejan estados, solo manejan información o funciones 
const Usuarios =()=>{ }
*/
class Usuarios extends Component {
  componentDidMount() {
    this.props.traerTodos();
  }

  ponerFilas = () =>
    //Map itera por la cantidad de elementos del arreglo
    this.props.usuarios.map(usuario => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
      </tr>
    ));

  render() {
    return (
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>{this.ponerFilas()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps,usuariosActions
  // {/*Actions*/}
  )(Usuarios);
