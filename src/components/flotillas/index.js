import React , {Component} from 'react';
import {connect} from 'react-redux';
import * as flotillasActions from '../../actions/flotillasActions';
import {Table, Button} from 'react-materialize' ;

class Flotillas extends Component {

	desplegarFlotillas = () =>
		this.props.flotilla_cargar.matriculas.map((elem) =>
			(
				<tr key={elem.id}>
					<td>{elem.matricula}</td>
					<td>{elem.capacidad}</td>
				</tr>
			));
	render() {
		return (
			<div>
				<Table>
					<thead>
						<tr>
							<th data-field="id">Matricula</th>
							<th data-field="name">Capacidad</th>
						</tr>
					</thead>
					<tbody>
						{this.desplegarFlotillas()}
					</tbody>
				</Table>
			</div>
		);
	}	
}

const mapStateToProps = ({flotillasReducer, aerolineasReducer: {flotilla_cargar}}) => 
{
	return {...flotillasReducer, flotilla_cargar};
};

export default connect(mapStateToProps, flotillasActions)(Flotillas)
