import { LLAMAR, EXITOSO, FALLO, EDITU } from '../types/usuariosTypes';

const INITIAL_STATE = {
	usuarios: [],

	cargando: false,
	error: '',

	nombre: '',
	nombreCompleto: [],
	apellidoPaterno: '',
	apellidoMaterno: '',
	fechaNacimiento: '',
	correo: '',
	pasaporte: ''
};

export default (state = INITIAL_STATE, action) =>
{
	switch (action.type)
	{
		case LLAMAR: return { ...state, error: '', cargando: true };
		case EXITOSO: return { ...state, error: '', cargando: false, usuarios: action.payload };
		case FALLO: return { ...state, error: action.payload, cargando: false };
		case EDITU: return { ...state, nombre: action.payload, apellidoMaterno: action.payload };
		default: return state;
	}
}