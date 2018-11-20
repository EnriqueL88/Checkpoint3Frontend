import axios from 'axios';
import {LLAMAR_FLOTILLA, EXITOSO, FALLO, EDITAFLOTILLA, PRIMER_GET, LLAMAR_AEROLINEA, CONSULTAR_AEROLINEA, FALLO_CONSULTA} from '../types/flotillasTypes.js';

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