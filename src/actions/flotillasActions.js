import axios from 'axios';
import {LLAMAR_FLOTILLA, EXITOSO, FALLO, PRIMER_GET} from '../types/flotillasTypes.js';

export const desplegarFlotillas = (IDAerolinea) => async (dispatch) => {
	dispatch ({ type: LLAMAR_FLOTILLA});
	try {
		const response = await axios.get(`https://chchikorita.herokuapp.com/api/flota/${IDAerolinea}`);
		dispatch ({type: EXITOSO, payload: response.data});
		dispatch ({type: PRIMER_GET});
	}
	catch(err) {
		dispatch ({type: FALLO, payload: err.message});
	}
};