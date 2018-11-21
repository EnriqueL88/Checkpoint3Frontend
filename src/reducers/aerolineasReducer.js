import {LLAMAR,
	EXITOSO,
	FALLO,
	EDITAEROLINEA,
	PRIMER_GET,
	ELIMINAR,
	VACIAR_FORMULARIO_AEROLINEAS,
	EXITOSO_FLOTILLA,
	LLAMAR_FLOTILLA,
	PRIMER_GET_FLOTILLA,
	FALLO_FLOTILLA
} from '../types/aerolineasTypes.js';

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
		data: [1]
	},
	flotilla_cargar: {
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
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type)
	{
		case LLAMAR: return {...state, error: '', cargando: true};
		case ELIMINAR: return {...state, error:'', cargando: false};
		case PRIMER_GET: return {...state, primer_get:true};
		case EXITOSO: return {...state, aerolineas: action.payload, cargando: false, error: ''};
		case FALLO: return {...state, error: action.payload, cargando: false};

		case EDITAEROLINEA: return {...state, nombre: action.payload, nacionalidad: action.payload, activo: action.payload};
		case VACIAR_FORMULARIO_AEROLINEAS: return {...state, error:'', cargando: true, nombre: '', nacionalidad:''}

		case LLAMAR_FLOTILLA: return {...state, flotilla_cargar:{...state.flotilla_cargar, error:'', cargando: true}};
		case PRIMER_GET_FLOTILLA: return {...state, flotilla_cargar: {...state.flotilla_cargar, primer_get:true}};
		case EXITOSO_FLOTILLA: return {...state, flotilla_cargar:{...state.flotilla_cargar, matriculas: action.payload }};
		case FALLO_FLOTILLA: return {...state, flotilla_cargar:{...state.flotilla_cargar, error: action.payload, cargando: false}};
		default: return state;
	}
}