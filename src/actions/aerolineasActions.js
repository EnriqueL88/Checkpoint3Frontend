import axios from 'axios';
import {
	LLAMAR,
	EXITOSO,
	FALLO,
	PEDIR_FLOTILLA,
	CONSULTAR_FLOTILLA,
	FALLO_CONSULTA,
	ELIMINAR,
	VACIAR_FORMULARIO_AEROLINEAS,
	EXITOSO_FLOTILLA,
	LLAMAR_FLOTILLA,
	PRIMER_GET_FLOTILLA,
	FALLO_FLOTILLA
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

export const borrarAerolinea = (id) => async (dispatch) => {
	dispatch ({type: ELIMINAR});
	try {
		const response = await axios.delete(`https://chchikorita.herokuapp.com/api/aerolineas/${id}`); 
		window.Materialize.toast('Aerolinea eliminada.', 5*1000);
		window.location.reload()
	}
	catch(error) {
		dispatch ({type: FALLO, payload: error.message});
		window.Materialize.toast('Eliminación fallida, intente más tarde.', 5*1000, 'red');
	}
};

export const desplegarFlotillas = (IDAerolinea) => async (dispatch) => {
	dispatch ({ type: LLAMAR_FLOTILLA});
	try {
		const response = await axios.get(`https://chchikorita.herokuapp.com/api/flota/${IDAerolinea}`);
		dispatch ({type: EXITOSO_FLOTILLA, payload: response.data});
		dispatch ({type: PRIMER_GET_FLOTILLA});
	}
	catch(err) {
		dispatch ({type: FALLO_FLOTILLA, payload: err.message});
	}
};

export const cambiarInput = (type, valor) => async (dispatch) => {
	dispatch ({type, payload: valor})
};

export const enviarAerolinea = (valores, aerolineas) => async (dispatch) => {
	dispatch({type: LLAMAR});
	try {
		const response = await axios.post('https://chchikorita.herokuapp.com/api/aerolineas', valores);
		dispatch({type:EXITOSO, payload: aerolineas});
		dispatch({type: VACIAR_FORMULARIO_AEROLINEAS})
		window.Materialize.toast('Aerolínea creada exitosamente.', 5*1000);
	}
	catch (error) {
		dispatch ({type: FALLO, payload: error.message})
		window.Materialize.toast('Intente más tarde.', 5*1000, 'red');
	}
};
