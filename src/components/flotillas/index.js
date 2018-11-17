import React , {Component} from 'react';
import {connect} from 'react-redux';
import * as flotillasActions from '../../actions/flotillasActions';
import {Table} from 'react-materialize' ;

class index extends Component {
	render() {
		return (
			<div>
				<Modal
				header={elem.nombre}
				trigger={<Button>Ver flotilla</Button>}>
				<Table>
					<thead>
						<tr>
							<th data-field="id">Matricula</th>
							<th data-field="name">Capacidad</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>39847</td>
							<td>320</td>
						</tr>
							<tr>
							<td>93844</td>
							<td>270</td>
						</tr>
							<tr>
							<td>93845</td>
							<td>180</td>
						</tr>
					</tbody>
				</Table>
			</Modal>
			</div>
		);
	}
}

const mapStateToProps = ({flotillasReducer}) => 
{
	return flotillasReducer;
};

export default connect(mapStateToProps, flotillasActions)(Flotillas)
