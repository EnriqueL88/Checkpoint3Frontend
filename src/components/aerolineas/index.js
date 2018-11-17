import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as aerolineasActions from '../../actions/aerolineasActions';
import {Col, Card, Button, Preloader, Row, Modal, Table} from 'react-materialize';


class Aerolineas extends Component {

		componentDidMount() {
			if(!this.props.primer_get)
			this.props.desplegarAerolineas();
		}

		desplegarAerolineas = () => (
			<div className="row">
					<Row>
						{this.props.aerolineas.map((elem, index)=> (
							<Col s={12} m={6} l={4}>
							<Card
								className='light-green lighten-5' 
								textClassName='green lighten-5 black-text' 
								title={elem.nombre} 
								actions={[
									<Modal
									header={elem.nombre}
									trigger={<Button>Ver flotilla</Button>}>
									<p>Traer componente flotilla</p>
								</Modal>
									]}>
									Origen: {elem.nacionalidad}.
							</Card>
							</Col>
						))}
					</Row>
			</div>
		);

		desplegarError = () => (
			<h1 className='red-text'>
				{this.props.error}
			</h1>
		);

		desplegarCargando = () => (
			<div className='center'>
				<Preloader size='big'/>
			</div>
		);

		desplegarContenido = () => ( (this.props.error) ? this.desplegarError() : this.desplegarAerolineas() );

	render() {
		return (
			<div>
				<h3 className="valign-wrapper">
					Aerolíneas
					&nbsp;
					<Button floating large className='green lighten-1' waves='light' icon='add'/>
				</h3>
				{
					(this.props.cargando) ? this.desplegarCargando() : this.desplegarContenido()
				}
			</div>
		);
	}
}

const mapStateToProps = ({aerolineasReducer}) => 
{
	return aerolineasReducer;
};

export default connect(mapStateToProps, aerolineasActions)(Aerolineas)