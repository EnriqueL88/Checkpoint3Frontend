import React from 'react';
<<<<<<< HEAD

const Header = (props) => (
		<div>
			<nav>
				<div className="nav-wrapper green darken-1">
					<a href="/" className="brand-logo right">ChikoriAir</a>
						<ul className="left hide-on-med-and-down">
							<li>
								<a href="/"><i className="material-icons left">home</i>Home</a>
							</li>
							<li>
								<a href="/usuarios"><i className="material-icons left">perm_contact_calendar</i>Usuarios</a>
							</li>
							<li>
								<a href="/"><i className="material-icons left">flight_takeoff</i>Vuelos</a>
							</li>
							<li>
								<a href="/aerolineas"><i className="material-icons left">business</i>Aerolíneas</a>
							</li>
							<li>
								<a className="waves-effect waves-light btn pulse green darken-3">About Us<i className="material-icons left">people</i></a>
							</li>
						</ul>
					</div>
=======
import {Navbar, NavItem, Icon} from 'react-materialize';

const Header = (props) => (
		<div className='navbar-fixed'>
			<nav>
				<div className="nav-wrapper green darken-1">
					<ul className="left hide-on-med-and-down">
						<li>
							<a href="sass.html"><i className="material-icons left">home</i>Home</a>
						</li>
						<li>
							<a href="badges.html"><i className="material-icons left">perm_contact_calendar</i>Usuarios</a>
						</li>
						<li>
							<a href="badges.html"><i className="material-icons left">flight_takeoff</i>Vuelos</a>
						</li>
						<li>
							<a href="badges.html"><i className="material-icons left">business</i>Aerolíneas</a>
						</li>
						<li>
							<a className="waves-effect waves-light btn pulse green darken-3">About Us<i className="material-icons left">people</i></a>
						</li>
					</ul>
				<a href="#!" className="brand-logo right">ChikoriAir</a>
				</div>
>>>>>>> 7c1d0f17a8b753048d80c3ab8536f6879f391dca
			</nav>
		</div>
	);

export default Header
