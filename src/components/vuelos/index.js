import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Preloader, Modal, Table, Icon } from 'react-materialize';
import * as vuelosActions from '../../actions/vuelosActions';
import DetalleVuelo from './detalleVuelo';

 class Vuelos extends Component {
  componentDidMount() {
    if (Object.entries(this.props.estados).length === 0) {
      this.props.listaEstados();
    }
    this.props.traerVuelos();
  }

  desplegarVuelos = () => {
    return (
      <Table hoverable={true}>
          <thead>
          <tr>
            <th>Ruta</th>
            <th className="hide-on-med-and-down">Avión</th>
            <th>Origen</th>
            <th>Destino</th>
            <th>Estado</th>
            <th className="hide-on-med-and-down">Salida</th>
            <th>Llegada</th>
          </tr>
          </thead>

          <tbody>
          {this.props.vuelos.map(elem => (
              <tr key={elem.IDVuelo}>
                <td>{elem.ruta}</td>
                <td className="hide-on-med-and-down">{elem.matriculaID}</td>
                <td>{elem.origen}</td>
                <td>{elem.destino}</td>
                <td>{this.props.estados[elem.idEstado]}</td>
                <td className="hide-on-med-and-down">{new Date(elem.fechaSalida).toLocaleString()}</td>
                <td>{new Date(elem.fechaLlegada).toLocaleString()}</td>
                <td>
                  <Link className="purple-text" to={`/vuelos/${elem.IDVuelo}`}>
                    <Icon>list</Icon>
                  </Link>
                </td>
                <td>
                  <Link className="purple-text text-darken-text-2" to={`/manifiestos/${elem.IDVuelo}`}>
                    <Icon>people</Icon>
                  </Link>
                </td>
              </tr>
            )
          )
          }
          </tbody>
        </Table>
      );
  };

  desplegarError = () => <h1 className="red-text">{ this.props.error }</h1>;

  desplegarCargando = () => <div className="center"><Preloader size='big'/></div>;

	desplegarContenido = () => this.props.error ? this.desplegarError() : this.desplegarVuelos();

  render() {
      return (
          <div>
              <h3 className="valign-wrapper left">Vuelos &nbsp;
                <Link to="/agregarVuelo">
                  <Button floating large
                          className='green lighten-1 valign-wrapper'
                          waves='light' icon='flight_takeoff'/>
                </Link>
              </h3>
              {
                  (this.props.cargando) ? this.desplegarCargando() : this.desplegarContenido()
              }
          </div>
      );
    }
}

const mapStateToProps = ({ vuelosReducer }) => vuelosReducer;

export default connect(mapStateToProps, vuelosActions)(Vuelos);