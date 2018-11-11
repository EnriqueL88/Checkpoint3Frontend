import React from 'react';

const Body = (props) => (
	<div>
		<div class="row">
			<div class="col s12 m12">
				<div class="card-panel teal large">
					<span class="white-text">
					<h5>Seleccione la opción según la información que necesita consultar:</h5>
					</span>
				</div>
			</div>
		</div>
		<div className="container">
			<ul class="collapsible">
				<li>
					<div class="collapsible-header"><i class="material-icons">perm_contact_calendar</i><h4>Usuarios</h4></div>
					<blockquote>
						Consulte si necesita detalles de los pasajeros.
					</blockquote>
				</li>
				<li>
					<div class="collapsible-header"><i class="material-icons">flight_takeoff</i><h4>Vuelos</h4></div>
					<blockquote>
						Consulte si requiere revisar vuelos y su estatus.
					</blockquote>
				</li>
				<li>
					<div class="collapsible-header"><i class="material-icons">business</i><h4>Aerolineas</h4></div>
					<blockquote>
						Consulte si requiere saber sobre las aerolíneas.
					</blockquote>
				</li>
			</ul>
		</div>
	</div>
	);

export default Body



