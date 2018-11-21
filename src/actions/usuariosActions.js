import axios from 'axios';
import { LLAMAR, EXITOSO, FALLO, PRIMER_GET, FORMA_EXITOSA } from '../types/usuariosTypes';

export const traerUsuarios = () => async (dispatch) =>
{
	dispatch({ type: LLAMAR });

	try {
		const response = await axios.get('https://chchikorita.herokuapp.com/api/usuarios');
		dispatch({ type: EXITOSO, payload: response.data });
		dispatch({	type: PRIMER_GET	});
	}
	catch(error) {
		dispatch({ type: FALLO, payload: error.message });
	}
};  


export const llamarEditado = (id) => async (dispatch) => {
	const response = await axios.get(`
	https://chchikorita.herokuapp.com/api/usuarios/${id}`
	);
}

export const cambiarInput = (type, valor) => async (dispatch) => {
	dispatch({ type, payload: valor });
};
