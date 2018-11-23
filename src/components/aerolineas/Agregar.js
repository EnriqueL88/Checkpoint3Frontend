import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Row, Input, Card, CardTitle, Button} from 'react-materialize';
import * as aerolineasActions from '../../actions/aerolineasActions';
import {NOMBRE_AEROLINEA, NACIONALIDAD_AEROLINEA} from '../../types/aerolineasTypes';

class AerolineasAgregar extends Component {

	handleChange = (event, type) => this.props.cambiarInput(type, event.target.value);

	enviar = async () => {
		const {
			nombre,
			nacionalidad
		} = this.props;
		const valores = {nombre, nacionalidad};
		this.props.enviarAerolinea(valores, this.props.aerolineas);
	}

	render() {
		return (
			<div>
				<Row>
					<Card  horizontal header={
						<CardTitle 
							image="http://www.ronkitchens.com/wp-content/uploads/2016/03/Have-Dreams_Wants-to-Be-a-Pilot_Airplane-350x150.jpg">
						</CardTitle>}>
						<h3>Añada una Aerolínea:</h3>
					</Card>
				</Row>
				<Row>
					<Input
						s={12} 
						m={6} 
						label="Nombre de Aerolinea"
						type='text'
						value={this.props.nombre}
						onChange= {
							(event) => this.handleChange(event, NOMBRE_AEROLINEA)
						}
						name='nombre_aerolinea'
					/>
					<Input
						s={12} 
						m={6} 
						label="Origen de Aerolinea"
						type='text'
						value={this.props.nacionalidad}
						onChange={
							(event) => this.handleChange(event, NACIONALIDAD_AEROLINEA)
						}
						name='nacionalidad_aerolinea'
					/>
				</Row>
				<div className='row'>
				<Button
						className= 'purple lighten-1 hoverable modal-close col s6 m4 offset-m1'
						waves='light'
						onClick={this.enviar}
						disabled={this.props.cargando}
					>
						Guardar Aerolinea
					</Button>
					<Link to={'/aerolineas'}>
						<Button
							className='green lighten-1 hoverable modal-close col s6 m4 offset-m2'
							waves='light'
						>
							Regresar
						</Button>
					</Link>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({aerolineasReducer}) => {
	return aerolineasReducer
};

export default connect(mapStateToProps, aerolineasActions) (AerolineasAgregar)

