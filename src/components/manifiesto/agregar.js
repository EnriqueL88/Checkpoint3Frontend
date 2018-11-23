import React , {Component} from 'react';
import {connect} from 'react-redux';
import * as vuelosActions from '../../actions/vuelosActions';
import {Button, Row, Input, Icon, Table} from 'react-materialize' ;
import {PASAPORTE} from './../../types/vuelosTypes'


class Manifiesto extends Component {
	
	handleChange = (event, type) => this.props.cambiarInput(type, event.target.value);

	traerDatos= () =>{
		this.props.usuarioPasaporte(this.props.pasaporte);
		console.log(this.props.usuario)
	}
	enviar = () => {
		this.props.enviarUsuario(this.props.match.params.pasaporte,this.props.usuario[0])
	}
	botonenviar = () => {
		return(
		<Row>
		    <Button floating onClick={this.enviar} waves='light'><Icon right>add</Icon></Button>
		</Row>
		)
	};

	desplegarUsuarios = () => {
				
		return(
			<Table>
				<thead>
					<tr>
					 	<th>Pasaporte</th>
					 	<th>Nombre</th>
					 	<th>apellidoPaterno</th>
					 	<th>apellidoMaterno</th>
					</tr>
				</thead>
				<tbody>					
				{this.props.usuario.map(elem =>(
					<tr key={elem.pasaporte}>
				      <td>{elem.pasaporte}</td>
				      <td>{elem.nombre}</td>
				      <td>{elem.apellidoPaterno}</td>
				      <td>{elem.apellidoMaterno}</td>
				    </tr>
				))
				}
				</tbody>
			</Table>
		 );
	}

	render() {
		return (
			<div>
				<Row>
				  <Input s={2} label="Pasaporte" onChange= {(event) => this.handleChange(event, PASAPORTE)}/>
				</Row>
				<Row>
				      <Button onClick={this.traerDatos} waves='light'>button<Icon right>input</Icon></Button>
				</Row>
				{this.props.usuario.length == 1 ? this.desplegarUsuarios(): ''}
				{this.props.usuario.length == 1 ? this.botonenviar(): ''}
				
				
			</div>
		);
	}	
}

	
const mapStateToProps = ({vuelosReducer}) => { 
	return vuelosReducer;
};

export default connect(mapStateToProps, vuelosActions)(Manifiesto)
