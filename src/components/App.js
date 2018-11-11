import React, { Component } from 'react';
//import { Route, BrowserRouter } from 'react-router-dom';
//<BrowserRouter>
//</BrowserRouter>
import Header from './Header'
import Footer from './Footer'

class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<div class="row">
					<div class="col s12 m12">
						<div class="card-panel teal large">
							<span class="white-text">
								Seleccione la opción según la información que necesita consultar:
							</span>
						</div>
					</div>
				</div>
				<ul class="collapsible">
					<li>
						<div class="collapsible-header"><i class="material-icons">perm_contact_calendar</i>Usuarios</div>
						<div class="collapsible-body"><span>Consulte si necesita detalles de los pasajeros.</span></div>
					</li>
					<li>
						<div class="collapsible-header"><i class="material-icons">flight_takeoff</i>Vuelos</div>
						<div class="collapsible-body"><span>Consulte si requiere revisar vuelos y su estado.</span></div>
					</li>
					<li>
						<div class="collapsible-header"><i class="material-icons">business</i>Aerolineas</div>
						<div class="collapsible-body"><span>Consulte si requiere conocer detalles de las empresas.</span></div>
					</li>
				</ul>
				<Footer/>
			</div>
		)
	}
}

export default App;
