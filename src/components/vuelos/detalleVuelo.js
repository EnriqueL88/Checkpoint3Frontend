import React, { Component } from 'react';
import * as Datetime from 'react-datetime';
import { Button, Col, Input, Row } from 'react-materialize';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as VuelosActions from '../../actions/vuelosActions';
import './react-datetime.css';

class DetalleVuelo extends Component {
  componentDidMount() {
    if (Object.entries(this.props.estados).length === 0) {
      this.props.listaEstados();
    }
    if (this.props.match.params.id) {
      this.props.traerVueloUnico(this.props.match.params.id);
    } else {
      // Limpiar formulario
    }
    if (this.props.aerolineas.length === 0) {
      this.props.obtenerListaAerolineas();
    }
  }

  mostrarListaMatriculas = (event) => {
    this.props.obtenerFlota(event.target.value);
  };

  cambiarRuta = (event) => this.props.cambiarRuta(event.target.value);

  cambiarEstado = (event) => this.props.cambiarEstado(event.target.value);

  cambiarMatricula = (event) => this.props.cambiarMatricula(event.target.value);

  cambiarOrigen = (event) => this.props.cambiarOrigen(event.target.value);

  cambiarDestino = (event) => this.props.cambiarDestino(event.target.value);

  cambiarFechaSalida = (moment) => this.props.cambiarFechaSalida(moment);

  cambiarFechaLlegada = (moment) => this.props.cambiarFechaLlegada(moment);

  guardarVuelo = () => {
    const errores = [];
    const aeropuertoRegex = new RegExp("[A-Z]{3}");
    if (this.props.matriculaID === 0) {
      errores.push('Seleccione un avión.');
    }
    if (!this.props.ruta){
      errores.push('Introduzca una clave de ruta.');
    }
    if (!this.props.idEstado) {
      errores.push('Seleccione un estado de vuelo.');
    }
    if (!aeropuertoRegex.test(this.props.origen)) {
      errores.push('Introduzca una clave válida de aeropuerto de origen.');
    }
    if (!aeropuertoRegex.test(this.props.destino)) {
      errores.push('Introduzca una clave válida de aeropuerto de destino.');
    }
    if (this.props.fechaSalida >= this.props.fechaLlegada) {
      errores.push('La fecha de salida no puede ser posterior a la fecha de llegada.');
    }

    const numErrores = errores.length;
    if (numErrores > 0) {
      errores.forEach(error => window.Materialize.toast(error, 2000 * numErrores));
    }
    else {
      const {
        IDVuelo, matriculaID, fechaSalida, fechaLlegada,
        origen, destino, ruta, idEstado
      } = this.props;
      const vuelo = {
        IDVuelo, matriculaID, fechaSalida, fechaLlegada,
        origen, destino, ruta, idEstado
      };
      if (this.props.match.params.id) {
        // Guarda un vuelo preexistente
        this.props.modificarVuelo(vuelo);
      }
      else {
        // Guarda un vuelo nuevo
        this.props.agregarVuelo(vuelo);
      }
    }
  };

  render() {
    return (
      <div>
        <h3>Agregar nuevo vuelo</h3>
        <Row>
          <Input label="Identificador de ruta" s={6} m={4} offset="m4"
                 value={this.props.ruta} onChange={this.cambiarRuta}/>
          <Input type="select" label="Estado" s={6} m={4}
                 value={this.props.idEstado} onChange={this.cambiarEstado}>
            <option key="select" value={0}>(seleccione estado)</option>
            {Object.entries(this.props.estados).map(estado => {
              console.log(estado);
              return (
              <option key={estado[0]} value={estado[0]}>{estado[1]}</option>
            )})}
          </Input>
        </Row>
        <h5>Avión</h5>
        {
          this.props.matriculaID === 0 ?
          (<Row>
            <Input s={6} m={4} type="select" label="Aerolínea" onChange={this.mostrarListaMatriculas}>
              <option key="select" value={0}>(seleccione aerolínea)</option>
              {this.props.aerolineas.map(aerolinea => (
                <option key={aerolinea.IDAerolinea} value={aerolinea.IDAerolinea}>{aerolinea.nombre}</option>
              ))
              }
            </Input>
            <Input s={6} m={4} type="select" label="Avión"
                   value={this.props.matriculaID} onChange={this.cambiarMatricula}>
              <option key={0} value={0}>(seleccione matrícula)</option>
              {this.props.matriculas.map(matricula => (
                <option key={matricula} value={matricula}>{matricula}</option>
              ))}
            </Input>
          </Row>) :
          (<Row>
            <Col s={6} m={4}>Matrícula: <b>{this.props.matriculaID}</b></Col>
            <Button className="col s6 m4" onClick={() => this.props.cambiarMatricula(0)}>Cambiar</Button>
          </Row>)
        }
        <h5>Detalles</h5>
        <Row>
          <Input s={4} label="Origen" value={this.props.origen} onChange={this.cambiarOrigen} />
          <div className="col s8">
            <span>Fecha de salida</span>
            <Datetime value={this.props.fechaSalida} onChange={this.cambiarFechaSalida} />
          </div>
          <Input s={4} label="Destino" value={this.props.destino} onChange={this.cambiarDestino} />
          <div className="col s8">
            <span>Fecha de llegada</span>
            <Datetime value={this.props.fechaLlegada} onChange={this.cambiarFechaLlegada} />
          </div>
        </Row>
        <Row>
          <Button className="purple col s6 m3 offset-m6" onClick={this.guardarVuelo}>Guardar</Button>
          <Link to="/vuelos">
            <Button className="green darken-2 col s6 m3">Cancelar</Button>
          </Link>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ vuelosReducer }) => vuelosReducer;

export default connect(mapStateToProps, VuelosActions)(DetalleVuelo);