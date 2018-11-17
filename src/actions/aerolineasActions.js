import axios from 'axios';
import {LLAMAR, EXITOSO, FALLO} from '../types/aerolineasTypes.js';

export const desplegarAerolineas = () => async (dispatch) => {
	dispatch ({ type: LLAMAR});
	try {
		const response = await axios.get('https://chchikorita.herokuapp.com/api/aerolineas');
		dispatch ({type: EXITOSO, payload: response.data});
	}
	catch(err) {
		dispatch ({type: FALLO, payload: err.message});
	}
};