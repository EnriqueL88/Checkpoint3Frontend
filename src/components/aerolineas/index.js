import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as aerolineasActions from '../../actions/aerolineasActions';
import {Col, Card, Button} from 'react-materialize';


class Aerolineas extends Component {
	render() {
		return (
			<div>
				<h3 className="valign-wrapper">
				Aerolíneas
				&nbsp;
					<Button floating large className='green' waves='light' icon='add'/>
				</h3>
				<div className="row">
					<div className="col s12 offset-s1">
						<Col>
							<Card className='blue-grey darken-1' textClassName='white-text' title='Aviacsa' actions={[<a href='#'>Visita Aviacsa</a>]}>
							Detalles de Aviacsa.
							</Card>
						</Col>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({aerolineasReducer}) => 
{
	return aerolineasReducer
};

export default connect(mapStateToProps, aerolineasActions)(Aerolineas)