import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Flotillas from '../flotillas'
import * as aerolineasActions from '../../actions/aerolineasActions';
import {Col, Card, Button, Preloader, Row, Modal, Icon} from 'react-materialize';


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
								key={elem.IDAerolinea}
								className='light-green lighten-5 hoverable' 
								textClassName='green lighten-5 black-text' 
								title={elem.nombre} 
								actions={[
									<div>
									<Modal
										header={elem.nombre}
										modalOptions={{
											ready: () => this.props.desplegarFlotillas(elem.IDAerolinea)
										}}
										trigger={
											<Button 
												className='left light-green accent-5 white-text hoverable'>Ver Flota</Button>
											}>
											<Flotillas
												id={elem.IDAerolinea}
											/>
									</Modal>
									<Modal
										header='Eliminar Aerolinea'
										bottomSheet
										actions = {
											<span>
												<Button className='light-green lighten-1 modal-close' waves='light' icon='close' title='NO'/>
												<Button 
													className='light-green lighten-1 modal-close'
													waves='light'
													icon='check_circle'
													title='Sí borrar'
													onClick={()=> {
															this.props.borrarAerolinea(elem.IDAerolinea)
														}
													}
												/>
											</span>
										}
										trigger={<Button className='right teal lighten-3 hoverable' icon='cancel'></Button>}>
										¿Desea eliminar la Aerolínea {elem.nombre}?
									</Modal>
									</div>
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
					<Link to='/a_agregar'>
						<Button floating large className='green lighten-1' waves='light' icon='add'/>
					</Link>
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