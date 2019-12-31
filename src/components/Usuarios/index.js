import React, { Component } from "react";
import { connect } from "react-redux";

import * as usuariosActions from "../../actions/usuariosActions";

import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";
import Table from "../Usuarios/Table";

//Stateless (componentes no funcionales)
/*Diferencias
No Funcionales no manejan estados, solo manejan información o funciones 
const Usuarios =()=>{ }
*/
class Usuarios extends Component {
  componentDidMount() {
    this.props.traerTodos();
  }

  ponerContenido = () => {
    if (this.props.cargando) {
      return <Spinner />;
    }

    if (this.props.error) {
      return <Fatal mensaje={this.props.error} />;
    }

    return <Table />;
  };

  render() {
    return (
      <React.Fragment>
        <h1>Usuarios</h1>
        {this.ponerContenido()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers.usuariosReducer;
};

export default connect(
  mapStateToProps,
  usuariosActions
  // {/*Actions*/}
)(Usuarios);
