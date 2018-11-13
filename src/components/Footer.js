import React from 'react';
<<<<<<< HEAD

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
=======
import {Navbar, NavItem, Icon} from 'react-materialize';

const Footer = (props) => (
	<footer class="page-footer">
		<div class="container">
			<div class="row">
				<div class="col l6 s12">
					<h5 class="white-text">A Chikorita Company</h5>
					<p class="grey-text text-lighten-4">Check our company details here.</p>
				</div>
				<div class="col l4 offset-l2 s12">
					<h5 class="white-text">Links</h5>
					<ul>
						<li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
						<li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
						<li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
						<li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
>>>>>>> 7c1d0f17a8b753048d80c3ab8536f6879f391dca
					</ul>
				</div>
			</div>
		</div>
<<<<<<< HEAD
		<div className="footer-copyright">
			<div className="container">
				© 2014 Copyright Text
				<a className="grey-text text-lighten-4 right" href="#!">More Links</a>
=======
		<div class="footer-copyright">
			<div class="container">
				© 2014 Copyright Text
				<a class="grey-text text-lighten-4 right" href="#!">More Links</a>
>>>>>>> 7c1d0f17a8b753048d80c3ab8536f6879f391dca
			</div>
		</div>
	</footer>
)

export default Footer