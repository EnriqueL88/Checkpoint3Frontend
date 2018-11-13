<<<<<<< HEAD
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
=======
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
>>>>>>> 7c1d0f17a8b753048d80c3ab8536f6879f391dca
};  