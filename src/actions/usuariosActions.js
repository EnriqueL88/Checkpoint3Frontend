import axios from 'axios';
import { LLAMAR, EXITOSO, FALLO } from '../types/usuariosTypes';

export const traerUsuarios = () => async (dispatch) =>
{
	dispatch({ type: LLAMAR });

	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		dispatch({ type: EXITOSO, payload: response.data });
	}
	catch(error) {
		dispatch({ type: FALLO, payload: error.message });
	}
};  