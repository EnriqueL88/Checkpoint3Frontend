import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button, Preloader, Input, Row} from 'react-materialize';
import * as usuariosActions from '../../actions/usuariosActions';
import {
	EDITAR_NOMBRE,
	EDITAR_APPATERNO,
	EDITAR_APMATERNO,
	EDITAR_FECHA_NAC,
	EDITAR_CORREO,
	EDITAR_PASAPORTE
} from '../../types/usuariosTypes';

class UsuariosEditar extends Component {

	componentDidMount () {
		this.props.llamarEditable(this.props.match.params.id);
	};

	handleChange = (event, propiedad) => {
		this.props.cambiarEditado(
			propiedad, event.target.value
		);
	};

	mostrarPreloader = () => (
		<div className="center-align">
			<Preloader/>
		</div>
	);

	enviar = async () => {
		const {
			nombre,
			apellidoPaterno,
			apellidoMaterno,
			fechaNacimiento,
			correo,
			pasaporte
		} = this.props.usuario_editar;
		const valores = {nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, correo, pasaporte};
		this.props.enviarUsuario(this.props.usuario_editar.IDUsuario, valores, this.props.usuarios);
	}

	render() {
		return (
			<div>
				<br/>
				<br/>
				<h4 className="valign-wrapper">
					Editar Usuario:
				</h4>
				<Row>
					<Input 
					    s={12}
					    m={6}
					    label="Nombre de Usuario"
					    type='text'
					    placeholder = ' '
					    value={this.props.usuario_editar.nombre}
					    onChange= {
					        (event) => this.handleChange(event, EDITAR_NOMBRE)
					    }
					    name='Nombre'
					/>
					<Input 
					    s={12}
					    m={6}
					    label="Apellido Paterno"
					    type='text'
					    placeholder = ' '
					    value={this.props.usuario_editar.apellidoPaterno}
					    onChange= {
					        (event) => this.handleChange(event, EDITAR_APPATERNO)
					    }
					    name='APPAterno'
					/>
					<Input 
					    s={12}
					    m={6}
					    label="Apellido Materno"
					    type='text'
					    placeholder = ' '
					    value={this.props.usuario_editar.apellidoMaterno}
					    onChange= {
					        (event) => this.handleChange(event, EDITAR_APMATERNO)
					    }
					    name='APMaterno'
					/>
					<Input 
					    s={12}
					    m={6}
					    label="Fecha Nacimiento DD/MM/AAAA"
					    type='text'
					    placeholder = ' '
					    value={this.props.usuario_editar.fechaNacimiento}
					    onChange= {
					        (event) => this.handleChange(event, EDITAR_FECHA_NAC)
					    }
					    name='FechaNac'
					/>
					<Input 
						s={12}
						m={6}
						type="email" 
						label="Email"
						placeholder = ' '
						value={this.props.usuario_editar.correo}
						onChange= {
							(event) => this.handleChange(event, EDITAR_CORREO)
						}
						name='Mail'
					/>
					<Input 
						s={12}
						m={6}
						label="Pasaporte"
						type='number'
						placeholder = ' '
						value={this.props.usuario_editar.pasaporte}
						onChange= {
						    (event) => this.handleChange(event, EDITAR_PASAPORTE)
						}
						name='Pasaporte'
					/>
					</Row>
					<div className='row'>
						<Button 
							className='green lighten-1 col s6 m4 offset-m2'
							waves='light'
							onClick={this.enviar}
							disabled={this.props.cargando}
						>
						Guardar
						</Button>
						<Link to={'/usuarios'}>
							<Button 
								className='purple lighten-1 col s6 m4 offset-m2'
								waves = 'light'
							>
							Regresar
							</Button>
						</Link>
					</div>
			</div>
		);
	}
}

const mapStateToProps = ({usuariosReducer}) => {
	return usuariosReducer;
}

export default connect(mapStateToProps, usuariosActions)(UsuariosEditar)
