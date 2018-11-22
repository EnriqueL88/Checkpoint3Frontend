import React from 'react';

const Footer = (props) => (
	<footer className="page-footer footer-fixed green darken-4">
		<div className="container">
			<div className="row">
				<div className="col l6 s12">
					<h5 className="white-text">Dirección</h5>
					<ul>
						<li><a className="grey-text text-lighten-3" href="#!">Av. Adolfo López Mateos Sur 90</a></li>
						<li><a className="grey-text text-lighten-3" href="#!">Vallarta Poniente, 44110</a></li>
						<li><a className="grey-text text-lighten-3" href="#!">Guadalajara, Jal.</a></li>
					</ul>
				</div>
				<div className="col l6 s12">
					<h5 className="white-text">A Volantis Company</h5>
				</div>
			</div>
		</div>
		<div className="footer-copyright">
			<div className="container">
				© 2018 Copyright Text
			</div>
		</div>
	</footer>
)

export default Footer