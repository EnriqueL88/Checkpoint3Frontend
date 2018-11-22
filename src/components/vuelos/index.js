import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {  Button, Preloader, Modal, Table, Icon, Input, Row } from 'react-materialize';
import * as vuelosActions from '../../actions/vuelosActions';


 class Vuelos extends Component {

    desplegarVuelos = () => (
        <Table hoverable={true}>
        <thead>
            <tr>
                <th>Origen</th>
                <th>Destino</th>
                <th>estado</th>
                <th>IDRuta</th>  
                <th>Salida</th> 
                <th>Llegada</th>
                <th>Matricula</th>
            </tr>
        </thead>

        <tbody>
    {   
        this.props.usuarios.map((elem, index) => (
            <tr key={ elem.IDVuelo }>
                <td>{ elem.origen }</td>
                <td>{ elem.destino }</td>
                <td>{ elem.estado }</td>
                <td>{ elem.IDVuelo }</td>
                <td>{ elem.fechaSalida }</td>
                <td>{ elem.fechaLlegada }</td>
                <td>{ elem.matricula }</td>
                
               
                <td>
                    <Link to={`/./${elem.id}`}>
                        <Icon>delete</Icon>
                    </Link>
                </td>
            </tr>
            ) 
        )
    }
    </tbody>
 </Table>
 )
desplegarError = () => (
    <h1 className="red-text">
        { this.props.error }
    </h1>
);

desplegarCargando = () => (
    <div className="center">
        <Preloader size='big'/>
    </div>
);

	desplegarContenido = () => ( (this.props.error) ? this.desplegarError() : this.desplegarVuelos() );
    
    
  render() {
        return (
            <div>
                <h3 className="valign-wrapper">
                        Vuelos
                        &nbsp;
                        <Modal
                            header='Agregue la informacion necesaria'
                            trigger={<Button floating large className='green lighen-1' waves='light' icon='flight_takeoff'/>}>
                                <Row>
                                    <Input  s={6} label="Origen" />
                                    <Input  s={6} label="Destino" />
                                    <Input  s={6} label="Salida" />
                                    <Input  label="Llegada" s={6} />
                                    <Input  label="IDRuta" s={6} />
                                    <Input  label="Matricula" s={6} />
                                    <Input  label="Manifiesto" s={6} />
                                </Row>
                        </Modal>
                </h3>
                {
                    (this.props.cargando) ? this.desplegarCargando() : this.desplegarContenido()
                }
            </div>
        );
    }
}

const mapStateToProps = ({ vuelosReducer }) => {
	return vuelosReducer;
}

export default connect(mapStateToProps, vuelosActions)(Vuelos);


