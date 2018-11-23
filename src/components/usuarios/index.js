import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {  Button, Preloader, Modal, Table, Icon, Input, Row } from 'react-materialize';
import * as usuariosActions from '../../actions/usuariosActions';
import {
    NOMBRE,
    APPATERNO,
    APMATERNO,
    FECHA_NAC,
    CORREO,
    PASAPORTE,
    EDITAR_NOMBRE,
    EDITAR_APPATERNO,
    EDITAR_APMATERNO,
    EDITAR_FECHA_NAC,
    EDITAR_CORREO,
    EDITAR_PASAPORTE
} from '../../types/usuariosTypes';

class Usuarios extends Component {

	componentDidMount() {
		this.props.desplegarUsuarios();
	}

    handleChange = (event, type) => this.props.cambiarInput(type, event.target.value);

    enviar = async () => {
        const {
            nombre,
            apellidoPaterno,
            apellidoMaterno,
            fechaNacimiento,
            correo,
            pasaporte
        } = this.props;
        const valores = {
		nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, correo, 
        pasaporte: parseInt(pasaporte)
        };
        this.props.enviarUsuario(valores, this.props.usuarios);
    }

	desplegarUsuarios = () => (
        this.props.usuarios.map((elem, index) => (
            <tr key={ elem.IDUsuario }>
                <td>{ elem.nombre }</td>
                <td>{elem.apellidoPaterno +" "+ elem.apellidoMaterno}</td>
                <td>{ elem.pasaporte }</td>
                <td>{ new Date(elem.fechaNacimiento).toLocaleDateString() }</td>
                <td>{ elem.correo}</td>
                <td className='alignIcons'>
<<<<<<< HEAD
                    <Link to={`/u_editar/${elem.IDUsuario}`}>
                        <Icon className="purple lighten-1 circle white-text">edit</Icon>
                    </Link>
=======
                <Modal
                        header='Editar Usuario'
                        actions={
                            <span>
                                <Button 
                                    className='purple lighten-1 modal-close' 
                                    waves='light' 
                                    icon='close' 
                                    tooltip="No Editar"
                                />
                                <Button
                                    className='green lighten-1 modal-close'
                                    waves='light'
                                    icon='done'
                                    tooltip='Confirmar cambios'
                                    onClick={()=>{
                                        this.props.enviarUsuario(elem.IDUsuario);
                                    }}
                                />
                            </span>
                        }
                        trigger= {
                            <Button
                                    className='green lighten-1 modal-close'
                                    waves='light'
                                    icon='edit'
                                    tooltip='Editar'
                                    onClick={()=>{
                                        this.props.llamarEditable(elem.IDUsuario);
                                    }}
                                />
                                }> 
                            <Row>
                                <Input 
                                    s={12}
                                    m={6}
                                    label="Nombre de Usuario"
                                    type='text'
                                    value={this.props.nombre}
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
                                    value={this.props.apellidoPaterno}
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
                                    value={this.props.apellidoMaterno}
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
                                    value={this.props.fechaNacimiento}
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
                                    value={this.props.correo}
                                    onChange= {
                                        (event) => this.handleChange(event, EDITAR_CORREO)
                                    }
                                    name='Mail'
                                />
                                <Input 
                                    s={12}
                                    m={6}
                                    label="No. Pasaporte"
                                    type='number'
                                    value={this.props.pasaporte}
                                    onChange= {
                                        (event) => this.handleChange(event, EDITAR_PASAPORTE)
                                    }
                                    name='Pasaporte'
                                />
                            </Row> 
                    </Modal>

>>>>>>> 32888e9c9ae7c3059e5a89c5d7f545f51c113820
                    <Modal
                        header='Suprimir Usuario'
                        actions={
                            <span>
                                <Button 
                                    className='purple lighten-1 modal-close' 
                                    waves='light' 
                                    icon='close' 
                                    tooltip="No borrar"
                                />
                                <Button
                                    className='green lighten-1 modal-close'
                                    waves='light'
                                    icon='done'
                                    tooltip='Borrar'
                                    onClick={()=>{
                                        this.props.borrarUsuario(elem.IDUsuario);
                                    }}
                                />
                            </span>
                        }
                        trigger= {
                            <Button
                                    className='green lighten-1 modal-close'
                                    waves='light'
                                    icon='delete_outline'
                                    tooltip='Borrar'
                                /> 
                            }> 
                            <p>¿Está seguro que desea suprimir este usuario?</p>   
                    </Modal>
                </td>
            </tr>
        ))
	);

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

	desplegarContenido = () => ( (this.props.error) ? this.desplegarError() : this.desplegarUsuarios() );

	render() {
        return (
            <div>
                <h3 className="valign-wrapper">
                    Usuarios
                    &nbsp;
                        <Modal
                        header='Agregue nuevo usuario.'
                        actions={
                            <span>
                                <Button 
                                    className='purple lighten-1 modal-close' 
                                    waves='light'
                                    icon='close'
                                    title='Cancelar'
                                />
                                <Button
                                    className='green lighten-1 modal-close'
                                    waves='light'
                                    icon='person_add'
                                    title='Guardar'
                                    onClick={this.enviar}
                                    disabled={this.props.cargando}
                                />
                            </span>
                        }
                        trigger={<Button floating large className='green lighten-1' waves='light' icon='add'/>}>
                            <Row>
                                <Input 
                                    s={12}
                                    m={6}
                                    label="Nombre de Usuario"
                                    type='text'
                                    value={this.props.nombre}
                                    onChange= {
                                        (event) => this.handleChange(event, NOMBRE)
                                    }
                                    name='Nombre'
                                />
                                <Input 
                                    s={12}
                                    m={6}
                                    label="Apellido Paterno"
                                    type='text'
                                    value={this.props.apellidoPaterno}
                                    onChange= {
                                        (event) => this.handleChange(event, APPATERNO)
                                    }
                                    name='APPAterno'
                                />
                                <Input 
                                    s={12}
                                    m={6}
                                    label="Apellido Materno"
                                    type='text'
                                    value={this.props.apellidoMaterno}
                                    onChange= {
                                        (event) => this.handleChange(event, APMATERNO)
                                    }
                                    name='APMaterno'
                                />
                                <Input 
                                    s={12}
                                    m={6}
                                    label="Fecha Nacimiento DD/MM/AAAA"
                                    type='text'
                                    value={this.props.fechaNacimiento}
                                    onChange= {
                                        (event) => this.handleChange(event, FECHA_NAC)
                                    }
                                    name='FechaNac'
                                />
                                <Input 
                                    s={12}
                                    m={6}
                                    type="email" 
                                    label="Email"
                                    value={this.props.correo}
                                    onChange= {
                                        (event) => this.handleChange(event, CORREO)
                                    }
                                    name='Mail'
                                />
                                <Input 
                                    s={12}
                                    m={6}
                                    label="No. Pasaporte"
                                    type='number'
                                    value={this.props.pasaporte}
                                    onChange= {
                                        (event) => this.handleChange(event, PASAPORTE)
                                    }
                                    name='Pasaporte'
                                />
                            </Row>
                        </Modal>
                    </h3>
                <br/>
                <Table>
                    <thead>
                        <tr>
                            <th data-field='nombre'>Nombre</th>
                            <th data-field='apellidos'>Apellidos</th>
                            <th data-field='pasaporte'>Pasaporte</th>
                            <th data-field='fechaNacimiento'>Fecha Nacimiento</th>
                            <th data-field='correo'> E-Mail </th>
                            <th data-field='actions'> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {(this.props.cargando)? this.desplegarCargando(): this.desplegarContenido()}
                    </tbody>
                </Table>
            </div>
        )
    }
};

const mapStateToProps = ({ usuariosReducer }) => {
	return usuariosReducer;
}

export default connect(mapStateToProps, usuariosActions)(Usuarios);
