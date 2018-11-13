import React from 'react';

const Footer = (props) => (
	<footer className="page-footer purple darken-1">
		<div className="container">
			<div className="row">
				<div className="col l6 s12">
					<h5 className="white-text">A Chikorita Company</h5>
					<p className="grey-text text-lighten-4">Check our company details here.</p>
				</div>
				<div className="col l4 offset-l2 s12">
					<h5 className="white-text">Dirección</h5>
					<ul>
						<li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
						<li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
						<li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
						<li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div className="footer-copyright">
			<div className="container">
				© 2014 Copyright Text
				<a className="grey-text text-lighten-4 right" href="#!">More Links</a>
			</div>
		</div>
	</footer>
)

export default Footer