import {Route, BrowserRouter} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Aerolineas from './aerolineas';
import Body from './Body';

const App =() => (
		<div>
			<BrowserRouter>
				<div>
					<Header/>
						<div className="container">
							<Route exact path="/aerolineas" component={Aerolineas}/>
							<Route exact path="/" component={Body}/>
						</div>
					<Footer/>
				</div>
			</BrowserRouter>
		</div>
	)

export default App;
