import React from 'react';
import {Collection, CollectionItem} from 'react-materialize';
import './Body.css';

const Body = (props) => (
	<div>
		<div className="row">
			<div className="col s12 m12">
				<div className="card-panel teal large">
					<span className="white-text">
					<h5>Seleccione la opción según la información que necesita consultar:</h5>
					</span>
				</div>
			</div>
		</div>
		<div className="container">
			<Collection>
				<CollectionItem>
					<h4><i className="material-icons">perm_contact_calendar</i> Usuarios</h4>
					<p>Consulte si necesita detalles de los pasajeros.</p>
				</CollectionItem>
				<CollectionItem>
					<h4><i className="material-icons">flight_takeoff</i> Vuelos</h4>
					<p>Consulte si requiere revisar vuelos y su estatus.</p>
				</CollectionItem>
				<CollectionItem>
					<h4><i className="material-icons">business</i> Aerolineas</h4>
					<p>Consulte si requiere saber sobre las aerolíneas.</p>
				</CollectionItem>
			</Collection>
		</div>
	</div>
	);

export default Body



