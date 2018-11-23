import {
	LLAMAR_FLOTILLA,
	EXITOSO,
	FALLO,
	PRIMER_GET,
	LLAMAR_AEROLINEA,
	CONSULTAR_AEROLINEA,
	FALLO_CONSULTA} from '../types/flotillasTypes.js';

const INITIAL_STATE = {
	matriculas: [],
	cargando: false,
	primer_get: false,
	error: '',
	IDFlota: 0,
	matricula: 0,
	capacidad: 0,
	activo: {
		type: Buffer,
		data: [0]
	}
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type)
	{
		case LLAMAR_FLOTILLA: return {...state, error: '', cargando: true};
		case PRIMER_GET: return {...state, primer_get: true};
		case EXITOSO: return {...state, matriculas: action.payload, cargando: false, error: ''};
		case FALLO: return {...state, error: action.payload, cargando: false};
		default: return state;
	}
}