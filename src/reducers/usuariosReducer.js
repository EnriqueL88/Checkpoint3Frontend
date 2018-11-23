import { 
	LLAMAR_USUARIO, 
	ELIMINAR_USUARIO, 
	PRIMER_GET, 
	EXITOSO_USUARIO, 
	FALLO_USUARIO,
	VACIAR_FORMULARIO_USUARIO,
	USUARIO_EDITAR,
	EDITAR_NOMBRE,
	EDITAR_APPATERNO,
	EDITAR_APMATERNO,
	EDITAR_FECHA_NAC,
	EDITAR_CORREO,
	EDITAR_PASAPORTE
} from '../types/usuariosTypes';

const INITIAL_STATE = {
	usuarios: [],
	cargando: false,
	error: '',
	primer_get: false,
	IDUsuario: 0,
	nombre: '',
	apellidoPaterno: '',
	apellidoMaterno: '',
	fechaNacimiento: '',
	correo: '',
	pasaporte: 0,
	activo: {
		type: Buffer,
		data: [0]
	},
	usuario_editar: {
		nombre: '',
		apellidoPaterno: '',
		apellidoMaterno: '',
		fechaNacimiento: '',
		correo: '',
		pasaporte: 0
	}
};

export default (state = INITIAL_STATE, action) =>
{
	switch (action.type)
	{
		case LLAMAR_USUARIO: return { ...state, error: '', cargando: true };
		case ELIMINAR_USUARIO: return {...state, error:'', cargando: false};
		case PRIMER_GET: return {...state, primer_get:true};
		case EXITOSO_USUARIO: return { ...state, usuarios: action.payload, cargando: false, error:''};
		case FALLO_USUARIO: return { ...state, error: action.payload, cargando: false };
		case VACIAR_FORMULARIO_USUARIO: return {...state, error:'', cargando: true, nombre: '', apellidoPaterno:'', apellidoMaterno:'', fechaNacimiento:'', correo:'', pasaporte:''}

		case USUARIO_EDITAR: return {...state, usuario_editar: action.payload, cargando: false, error: ''};
		case EDITAR_NOMBRE: return {...state, usuario_editar: {...state.usuario_editar, nombre: action.payload}}
		case EDITAR_APPATERNO: return {...state, usuario_editar: {...state.usuario_editar, apellidoPaterno: action.payload}}
		case EDITAR_APMATERNO: return {...state, usuario_editar: {...state.usuario_editar, apellidoMaterno: action.payload}}
		case EDITAR_FECHA_NAC: return {...state, usuario_editar: {...state.usuario_editar, fechaNacimiento: action.payload}}
		case EDITAR_CORREO: return {...state, usuario_editar: {...state.usuario_editar, correo: action.payload}}
		case EDITAR_PASAPORTE: return {...state, usuario_editar: {...state.usuario_editar, pasaporte: action.payload}}

		default: return state;
	}
}