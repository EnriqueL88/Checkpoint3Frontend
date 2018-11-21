import axios from 'axios';
import {
	LLAMAR,
	EXITOSO,
	FALLO,
	PEDIR_FLOTILLA,
	CONSULTAR_FLOTILLA,
	FALLO_CONSULTA,
	ELIMINAR
} from '../types/aerolineasTypes.js';

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

export const borrarAerolinea = (id) => async (dispatch) => {
	dispatch ({type: ELIMINAR});
	try {
		const response = await axios.delete(`https://chchikorita.herokuapp.com/api/aerolineas/${id}`);
		window.Materialize.toast('Aerolinea eliminada.', 5*1000);
		window.location.reload();
	}
	catch(error) {
		dispatch ({type: FALLO, payload: error.message});
		window.Materialize.toast('Eliminación fallida, intente más tarde.', 5*1000, 'red');
	}
}