import React , {Component} from 'react';
import {connect} from 'react-redux';
import * as flotillasActions from '../../actions/flotillasActions';
import {Table, Button} from 'react-materialize' ;

class Flotillas extends Component {

	componentDidMount() {
		if(!this.props.primer_get)
		this.props.desplegarFlotillas();
		console.log(this.props.id)
	}

	desplegarFlotillas = () =>
		this.props.matriculas.map((elem) =>
			(
				<tr key={elem.id}>
					<td>{elem.matricula}</td>
					<td>{elem.capacidad}</td>
					<td className='alignIcons'>
						<Button className='green accent-1' waves='light' icon='visibility'/>
						<Button className='green accent-1' waves='light' icon='edit'/>
					</td>
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
						{this.desplegarFlotillas}
					</tbody>
				</Table>
			</div>
		);
	}	
}

const mapStateToProps = ({flotillasReducer}) => 
{
	return flotillasReducer;
};

export default connect(mapStateToProps, flotillasActions)(Flotillas)
