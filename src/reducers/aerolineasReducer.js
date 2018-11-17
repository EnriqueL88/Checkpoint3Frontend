import {LLAMAR, EXITOSO, FALLO, EDITAEROLINEA, PRIMER_GET} from '../types/aerolineasTypes.js';

const INITIAL_STATE = {
	aerolineas: [],
	cargando: false,
	primer_get: false,
	error: '',
	IDAerolinea: 0,
	nombre: '',
	nacionalidad: '',
	activo: {
	type: Buffer,
	data: [
			1
		]
	}
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type)
	{
		case LLAMAR: return {...state, error: '', cargando: true};
		case PRIMER_GET: return {...state, primer_get:true};
		case EXITOSO: return {...state, aerolineas: action.payload, cargando: false, error: ''};
		case FALLO: return {...state, error: action.payload, cargando: false};
		case EDITAEROLINEA: return {...state, nombre: action.payload, nacionalidad: action.payload, activo: action.payload};
		default: return state;
	}
}