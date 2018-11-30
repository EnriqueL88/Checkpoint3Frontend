import React from 'react';
import {Icon, Navbar, NavItem} from 'react-materialize';
import { Link } from 'react-router-dom';

const Header = (props) => (
	<div>
		<div>
			<Navbar left brand='Volantibus' className='green'>
				<NavItem href='/'><Icon left>home</Icon> Home</NavItem>
				<NavItem><Link to='/usuarios'><Icon left>perm_contact_calendar</Icon>Usuarios</Link></NavItem>
				<NavItem><Link to='/vuelos'><Icon left>flight_takeoff</Icon>Vuelos</Link></NavItem>
				<NavItem><Link to='/aerolineas'><Icon left>business</Icon>Aerolíneas</Link></NavItem>
				<NavItem><Link to='/about'><Icon left>people</Icon>Quiénes somos?</Link></NavItem>
			</Navbar>
		</div>
	</div>
);

export default Header
