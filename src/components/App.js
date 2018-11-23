import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Aerolineas from './aerolineas';
import Body from './Body';
import Usuarios from './usuarios';
import About from './About.js'
import AerolineasAgregar from './aerolineas/Agregar'
import Vuelos from './vuelos';
import DetalleVuelo from './vuelos/detalleVuelo';
import Manifiesto from './manifiesto';
import AgregarManifiesto from './manifiesto/agregar'

const App =() => (
		<div>
			<BrowserRouter>
				<div id='Footer'>
					<Header/>
						<main className="container">
							<Route exact path="/aerolineas" component={Aerolineas}/>
							<Route exact path='/usuarios' component={Usuarios} />
							<Route exact path='/vuelos' component={Vuelos} />
							<Route exact path="/" component={Body}/>
							<Route exact path="/about" component={About}/>
							<Route exact path="/vuelos/:id" component={DetalleVuelo}/>
							<Route exact path="/agregarVuelo" component={DetalleVuelo}/>
							<Route exact path='/a_agregar' component={AerolineasAgregar}/>
							<Route exact path='/vuelos/:id/manifiesto' component={Manifiesto}/>
							<Route exact path='/vuelos/:pasaporte/agregar' component={AgregarManifiesto}/>
							<Route exact path='/manifiestos/:id' component={Manifiesto}/>
						</main>
					<Footer/>
				</div>
			</BrowserRouter>
		</div>
	)

export default App;
