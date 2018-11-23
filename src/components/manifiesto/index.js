import React , {Component} from 'react';
import {connect} from 'react-redux';
import * as vuelosActions from '../../actions/vuelosActions';
import {Table, Button} from 'react-materialize' ;
import {Link }from 'react-router-dom';

 
class Manifiesto extends Component {
	componentDidMount() {
		this.props.traerManifiesto(this.props.match.params.id);
	};

	desplegarManifiesto = () =>
		this.props.manifiesto.map((elem) =>
			(	
				<tr key={elem.IDUsuario}>
					<td>{elem.nombre}</td>
					<td>{elem.apellidoPaterno}</td>
					<td>{elem.apellidoMaterno||'-'}</td>
				</tr>
			));

	render() {
		return (
			<div>
				<h3> Manifiesto</h3>
                	<Link className="purple-text text-darken-text-2" to={`/vuelos/${this.props.match.params.id}/agregar`}>
                    	<Button floating large className='green lighten-1' waves='light' icon='add'  />
					</Link>

				<Table>
					<thead>
						<tr>
							<th data-field="Nombre">Nombre</th>
							<th data-field="Apellido Paterno">Apellido Paterno</th>
							<th data-field="Apellido Materno">Apellido Materno</th>
						</tr>
					</thead>
					<tbody>
						{this.desplegarManifiesto()}
					</tbody>
				</Table>
			</div>
		);
	}	
}

	
const mapStateToProps = ({vuelosReducer}) => { 
	return vuelosReducer;
};

export default connect(mapStateToProps, vuelosActions)(Manifiesto)
