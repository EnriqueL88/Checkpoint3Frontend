import React from 'react';
import './miguel.css'
import {Card, Col} from 'react-materialize'
const About = (props) =>(
	<div>
		<div className="companeros">
			<h3>El Equipo</h3>
			<div className="flexbox front">
				<div className="tarjeta">
				    <Card className='blue-grey darken-1' textClassName='white-text' title='Joshua Medina' actions={[<a href='https://www.linkedin.com/in/joshua-medina-corona-46b436173/'>Linkedin</a>,<a href='https://github.com/JoshuaMedinaCorona'>GitHub</a> ]}>
					    <img src="https://avatars0.githubusercontent.com/u/41455742?s=400&v=4"/>
						<div className="name">Front End</div>
				    </Card>
				</div>
				<div className="tarjeta">
				    <Card className='blue-grey darken-1' textClassName='white-text' title='Enrique Lopez' actions={[<a href='https://www.linkedin.com/in/linenriquelopez/'>Linkedin</a>,<a href='https://github.com/EnriqueL88'>GitHub</a> ]}>
					    <img src="https://avatars0.githubusercontent.com/u/41455742?s=400&v=4"/>
						<div className="name">Front End</div>
				    </Card>
				</div>
				<div className="tarjeta">
				    <Card className='blue-grey darken-1' textClassName='white-text' title='Jose Ramos' actions={[<a href='https://github.com/JoshuaMedinaCorona'>Linkedin</a>,<a href='https://github.com/JoshuaMedinaCorona'>GitHub</a> ]}>
					    <img src="https://avatars0.githubusercontent.com/u/41455742?s=400&v=4"/>
						<div className="name">Front End</div>
				    </Card>
				</div>
			</div>{/*front*/}
			<div className="flexbox back">
				<div className="tarjeta">
				    <Card className='blue-grey darken-1' textClassName='white-text' title='Miguel Moran' actions={[<a href='https://www.linkedin.com/in/miguel-angel-moran-gomez-9792b8156/'>Linkedin</a>,<a href='https://github.com/MGMike0'>GitHub</a> ]}>
					    <img src="https://lh3.googleusercontent.com/-1rcT48JpHbM/WypsmmAdqXI/AAAAAAAAMrs/H_Tpt8GcNjE3XafrySXzOYGsX_W606hVgCEwYBhgL/w140-h140-p/FotoBienGuapeton.jpg"/>
						<div className="name">Back End</div>
				    </Card>
				</div>
				<div className="tarjeta">
				    <Card className='blue-grey darken-1' textClassName='white-text' title='Martin Pereyra' actions={[<a href='https://www.linkedin.com/in/mart%C3%ADn-pereyra-gamboa-335014173/'>Linkedin</a>,<a href='https://github.com/pereyragamboa'>GitHub</a> ]}>
					    <img src="https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.15752-9/46449188_1291614244313095_2122849124339417088_n.jpg?_nc_cat=109&_nc_ht=scontent.fgdl3-1.fna&oh=00f871ff0e106148f5e91df3753d62bd&oe=5C75445B"/>
						<div className="name">Back End</div>
				    </Card>
				</div>
			</div>{/*back*/}
		</div>{/*Compañeros*/}
		<div className="mentores">
			<h3>Nuestos Mentores</h3>
			<br/>
			<div className="flexbox Mentores">
				<div className="Rodo tarjeta">
					<img src="https://avatars2.githubusercontent.com/u/33875215?s=400&v=4"/>
					<div className="name">Rodolfo Saldivar</div>
				</div>{/*Rodo*/}
				<div className="Dave tarjeta">
					<img src="https://dyn.web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.11540-24%2F43755721_2252514108338750_9114838543997337600_n.jpg%3Foe%3D5BF8376B%26oh%3D05d165ff81287f0e87b4f586b47e7af7&t=l&u=5217228680436%40c.us&i=1540529896"/>
					<div className="name">David Colin</div>
				</div>{/*Dave*/}
			</div>
		</div>{/*Mentores*/}
		<div className="tecnologia d">
			<h3>Tecnologia aplicada</h3>
			<div className="der">
				<h4> Front End</h4>
				<div className="lista">
					<li> React	</li>
					<li> react-materialize	</li>
					<li> Axios	</li>
				</div>
			</div>
			<div className="izq">
				<h4>
					Back end
				</h4>
				<div className="lista">
					<li> Express	</li>
					<li> MySQL	</li>
					<li> HEROKU	</li>
					<li>ClearDB</li>
				</div>
			</div>
		</div>
	</div>
	
);

export default About;