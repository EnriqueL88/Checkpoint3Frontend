import axios from 'axios';
import {LLAMAR, EXITOSO, FALLO, PEDIR_FLOTILLA, CONSULTAR_FLOTILLA, FALLO_CONSULTA} from '../types/aerolineasTypes.js';

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

export const consultarFlotilla = (id) => async (dispatch) => {

    dispatch ({type: PEDIR_FLOTILLA});
    try {
        const response = await axios.get(`https://chchikorita.herokuapp.com/api/flota/${id}`);
        dispatch ({ type: CONSULTAR_FLOTILLA, payload: response.data[0] })
    }
    catch(error) {
        dispatch({type: FALLO_CONSULTA, payload: error.message});
    }
};