import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {  Button, Preloader, Modal, Table, Icon } from 'react-materialize';
import * as usuariosActions from '../../actions/usuariosActions';

class Usuarios extends Component {

	componentDidMount() {
		this.props.traerUsuarios();
	}

	desplegarUsuarios = () => (
<Table hoverable={true}>
<thead>
    <tr>
        <th>Nombre</th>
        <th>Id de Pasaporte</th>
        <th>Nacionalidad</th>   
    </tr>
</thead>

<tbody>
    {
        this.props.usuarios.map((elem, index) => (
            <tr key={ elem.passaporte }>
                <td>{ elem.nombre }</td>
                <td>{ elem.pasaporte }</td>
                <td>{ elem.nacionalidad }</td>
                <td>
                    <Link to={`/./${elem.id}`}>
                        <Icon>add</Icon>
                    </Link>
                </td>
                <td>
                    <Link to={`/./${elem.id}`}>
                        <Icon>edit</Icon>
                    </Link>
                </td>
                <td>
                    <Link to={`/./${elem.id}`}>
                        <Icon>delete</Icon>
                    </Link>
                </td>
            </tr>
        ))
    }
</tbody>
</Table>
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
                            header='Agregue la informacion necesaria'
                            trigger={<Button floating medium className='green' waves='light' icon='add_circle'>.</Button>}>
                                    <input></input>
                                    <Button>Submit</Button>
                        </Modal>
                    </h3>
				{
					(this.props.cargando) ? this.desplegarCargando() : this.desplegarContenido()
				}
			</div>
		);
	}
}

const mapStateToProps = ({ usuariosReducer }) => {
	// usuariosReducer = { usuarios, cargando, error }
	// Como se quieren usar los 3 atributos, se manda tal cual el objeto
	return usuariosReducer;
}

export default connect(mapStateToProps, usuariosActions)(Usuarios);
