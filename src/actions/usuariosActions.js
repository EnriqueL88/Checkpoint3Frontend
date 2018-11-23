import axios from 'axios';
import { LLAMAR, EXITOSO, FALLO, LLAMAR_USUARIO, ELIMINAR_USUARIO, PRIMER_GET, EXITOSO_USUARIO, FALLO_USUARIO, VACIAR_FORMULARIO_USUARIO, USUARIO_EDITAR} from '../types/usuariosTypes';

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

//Esta acción es para traer o desplegar toda la lista de usuarios.

export const desplegarUsuarios = () => async (dispatch) =>
{
	dispatch({ type: LLAMAR_USUARIO });

	try {
		const response = await axios.get('https://chchikorita.herokuapp.com/api/usuarios');
		response.data.reverse();
		dispatch({ type: EXITOSO_USUARIO, payload: response.data });
		dispatch({type: PRIMER_GET});
	}
	catch(err) {
		dispatch({ type: FALLO_USUARIO, payload: err.message });
	}
};

// Esta acció sirve para eliminar el usuario al dar click en el botón del bote de basura de cada usuario.

export const borrarUsuario = (id) => async (dispatch) => {
	dispatch ({type: ELIMINAR_USUARIO});
	try {
		const response = await axios.delete (`https://chchikorita.herokuapp.com/api/usuarios/${id}`);
		window.Materialize.toast('Usuario eliminado exitosamente.', 5*1000, 'green');
		window.location.reload();
	}
	catch (err) {
		dispatch ({type: FALLO_USUARIO, payload: err.message});
		window.Materialize.toast('Intente más tarde.',  5*1000, 'red');
	}
};

//Esta acción capta cada que en el formulario cambia el input con el teclado.

export const cambiarInput = (type, valor) => async (dispatch) => {
	dispatch({type, payload: valor})
};

//Esta acción enviará lo que se haya registrado en el formulario de nuevo usuario y editar usuario, al dar click en guardar usuario.

export const enviarUsuario = (valores, usuarios) => async (dispatch) => {
	dispatch ({type: LLAMAR_USUARIO});
	try {
		const response = await axios.post ('https://chchikorita.herokuapp.com/api/usuarios', valores);
		usuarios.unshift(response.data);
		dispatch ({ type: EXITOSO_USUARIO, payload: usuarios});
		dispatch ({ type: VACIAR_FORMULARIO_USUARIO});
		window.Materialize.toast('Usuario guardado exitosamente.', 5*1000, 'green');
	}
	catch(err) {
		dispatch ({type: FALLO_USUARIO, payload: err.message});
		window.Materialize.toast('Intente más tarde.', 5*1000, 'red');
	}
}

// Esta acción llama al usuario especìfico que queremos editar al dar click sobre el ícono del lápiz en cada usuario.

export const llamarEditable = (id) => async (dispatch) => {
	dispatch ({type: LLAMAR_USUARIO});
	try {
		const response = await axios.get (`https://chchikorita.herokuapp.com/api/usuarios/${id}`);
		dispatch ({type: USUARIO_EDITAR, payload: response.data[0]})
	}
	catch (err) {
		dispatch ({type: FALLO_USUARIO, payload: err.message});
		window.Materialize.toast ('Intente más tarde.', 5*1000, 'red');
	}
}

// Esta acción sirve para registrar el cambio que se va aplicando en el input dentro del componente Editar Usuario.

export const cambiarEditado = (type, editado) => async (dispatch) => {
	dispatch ({type: type, payload: editado})
};
