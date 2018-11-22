import React, { Component } from 'react';
import { Table } from 'react-materialize';
import { connect } from 'react-redux';
import * as Actions from '../../actions/vuelosActions';

class Vuelos extends Component {
  componentDidMount() {
    this.props.traerVuelos();
  }

  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Vuelo</th>
              <th>Origen</th>
              <th>Salida</th>
              <th>Destino</th>
              <th>Llegada</th>
            </tr>
          </thead>
          <tbody>
          {this.props.vuelos.map((vuelo) => (
            <tr>
              <td>{vuelo.IDVuelo}</td>
              <td>{vuelo.origen}</td>
              <td>{vuelo.fechaSalida}</td>
              <td>{vuelo.destino}</td>
              <td>{vuelo.fechaLlegada}</td>
            </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = ({ vuelosReducer }) => vuelosReducer;

export default connect(mapStateToProps, Actions)(Vuelos);