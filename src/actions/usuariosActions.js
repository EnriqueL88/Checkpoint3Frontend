import axios from 'axios';
import { LLAMAR, EXITOSO, FALLO } from '../types/usuariosTypes';

export const traerUsuarios = () => async (dispatch) =>
{
	dispatch({ type: LLAMAR });

	try {
		const response = await axios.get('https://chchikorita.herokuapp.com/api/usuarios');
		dispatch({ type: EXITOSO, payload: response.data });
	}
	catch(error) {
		dispatch({ type: FALLO, payload: error.message });
	}
};  