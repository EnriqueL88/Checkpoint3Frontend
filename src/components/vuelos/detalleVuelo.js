import React, { Component } from 'react';
import { Input, Row } from 'react-materialize';
import * as Actions from '../../actions/vuelosActions';

class DetalleVuelo extends Component {
  render() {
    return (
      <Row>
        <Input s={6} label="Origen" />
        <Input s={6} label="Destino" />
        <Input s={6} label="Salida" />
        <Input label="Llegada" s={6} />
        <Input label="Identificador de ruta" s={6} />
        <Input label="Matricula" s={6} />
      </Row>
    );
  }
}

const mapStateToProps = ({ vuelosReducer }) => vuelosReducer;

export default connect(mapStateToProps, Actions)(DetalleVuelo);