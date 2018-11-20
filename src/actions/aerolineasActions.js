import axios from 'axios';
import {
	LLAMAR,
	EXITOSO,
	FALLO,
	PEDIR_FLOTILLA,
	CONSULTAR_FLOTILLA,
	FALLO_CONSULTA,
	ELIMINAR,
	VACIAR_FORMULARIO_AEROLINEAS
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
};

export const cambiarInput = (type, valor) => async (dispatch) => {
	dispatch({type, payload: valor});
};

export const enviarForma = (valores, aerolineas) => async (dispatch) => {
	dispatch ({type: LLAMAR});
	try{
		const response = await axios.post('https://chchikorita.herokuapp.com/api/aerolineas', valores);
		dispatch({
			type: EXITOSO,
			payload: aerolineas
		});
		dispatch({
			type:VACIAR_FORMULARIO_AEROLINEAS
		});
		window.Materialize.toast('Nueva aerolínea guardada exitosamente.', 5*1000, 'green');
	}
	catch(error) {
		dispatch ({type: FALLO, payload: error.message});
		window.Materialize.toast('Intente más tarde.', 5*1000, 'red')
	};
};