import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input, Row } from 'react-materialize';
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
          <Input label="Identificador de ruta" s={6} m={4} offset="m4" />
          <Input type="select" label="Estado" s={6} m={4} onChange={() => {}}>
            <option key="select" value={0}>(seleccione estado)</option>
            {Object.entries(this.props.estados).map(estado => {
              console.log(estado);
              return (
              <option key={estado[0]} value={estado[0]}>{estado[1]}</option>
            )})}
          </Input>
        </Row>
        <h5>Avión</h5>
        <Row>
          <Input s={6} m={4} type="select" label="Aerolínea" onChange={this.mostrarListaMatriculas}>
            <option key="select" value={0}>(seleccione aerolínea)</option>
            {this.props.aerolineas.map(aerolinea => (
              <option key={aerolinea.IDAerolinea} value={aerolinea.IDAerolinea}>{aerolinea.nombre}</option>
            ))
            }
          </Input>
          <Input s={6} m={4} type="select" label="Avión" onChange={this.seleccionarMatricula}>
            <option key={0} value={0}>(seleccione matrícula)</option>
            {this.props.matriculas.map(matricula => (
              <option key={matricula} value={matricula}>{matricula}</option>
            ))}
          </Input>
        </Row>
        <h5>Detalles</h5>
        <Row>
          <Input s={4} label="Origen" />
          <div className="col s8">
            <span>Fecha de salida</span>
            <Datetime defaultValue={new Date()} />
          </div>
          <Input s={4} label="Destino" />
          <div className="col s8">
            <span>Fecha de llegada</span>
            <Datetime defaultValue={new Date()} />
          </div>
        </Row>
        <Row>
        </Row>
        <Row>
          <Button className="purple col s6 m3 offset-m6">Guardar</Button>
          <Button className="green darken-2 col s6 m3">Cancelar</Button>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ vuelosReducer }) => vuelosReducer;

export default connect(mapStateToProps, VuelosActions)(DetalleVuelo);