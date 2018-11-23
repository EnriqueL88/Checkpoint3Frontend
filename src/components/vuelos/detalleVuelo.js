import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Row } from 'react-materialize';
import * as Datetime from 'react-datetime';
import * as VuelosActions from '../../actions/vuelosActions';
import './react-datetime.css';

class DetalleVuelo extends Component {
  componentDidMount() {
    this.props.obtenerListaAerolineas();
  }

  mostrarListaMatriculas = (event) => {
    this.props.obtenerFlota(event.target.value);
  };

  seleccionarMatricula = (event) => {};

  render() {
    return (
      <div>
        <h3>Agregar nuevo vuelo</h3>
        <Row>
          <span className="s4">Avión:</span>
          <Input s={4} type="select" onChange={this.mostrarListaMatriculas}>
            <option key="select" value={0}>(seleccione aerolínea)</option>
            {this.props.aerolineas.map(aerolinea => (
              <option key={aerolinea.IDAerolinea} value={aerolinea.IDAerolinea}>{aerolinea.nombre}</option>
            ))
            }
          </Input>
          <Input s={4} type="select" onChange={this.seleccionarMatricula}>
            <option key={0} value={0}>(seleccione matrícula)</option>
            {this.props.matriculas.map(matricula => (
              <option key={matricula} value={matricula}>{matricula}</option>
            ))}
          </Input>
        </Row>
        <Row>
          <Input s={6} label="Origen" />
          <Input s={6} label="Destino" />
          <div className="col s6">
            <span>Fecha de salida</span>
            <Datetime defaultValue={new Date()} />
          </div>
          <div className="col s6">
            <span>Fecha de llegada</span>
            <Datetime defaultValue={new Date()} />
          </div>
          <Input label="Llegada" s={6} />
          <Input label="Identificador de ruta" s={6} />
          <Input label="Matricula" s={6} />
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ vuelosReducer }) => vuelosReducer;

export default connect(mapStateToProps, VuelosActions)(DetalleVuelo);