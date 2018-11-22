import React from 'react';
import {Icon, Navbar, NavItem} from 'react-materialize';

const Header = (props) => (
		<div>
					<div>
						<Navbar left brand='Volantibus' className='green'>
							<NavItem href='/'><Icon left>home</Icon> Home</NavItem>
							<NavItem href='/usuarios'><Icon left>perm_contact_calendar</Icon>Usuarios</NavItem>
							<NavItem href='/'><Icon left>flight_takeoff</Icon>Vuelos</NavItem>
							<NavItem href='/aerolineas'><Icon left>business</Icon>Aerolíneas</NavItem>
							<NavItem href='/'><Icon left>people</Icon>Quiénes somos?</NavItem>
						</Navbar>
					</div>
		</div>
	);

export default Header
