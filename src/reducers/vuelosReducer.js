import * as Types from '../types/vuelosTypes';

const INITIAL_STATE = {
  cargando: false,
  error: null,
  vuelos: [],
  IDVuelo: 0,
  matriculaID: 0,
  fechaSalida: new Date(),
  fechaLlegada: new Date(),
  origen: '',
  destino: '',
  ruta: '',
  idEstado: 0,
  estados: {},
  aerolineas: [],
  matriculas: [],
  manifiesto: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LLAMAR: return { ...state, error: null, cargando: true };
    case Types.EXITOSO: return { ...state, error: null, cargando: false };
    case Types.FALLO: return { ...state, cargando: false, error: action.payload };

    case Types.TRAER_MANIF:console.log(action.payload, 's') ;
    return {
      ...state, manifiesto: action.payload
    };
    case Types.CONSULTA_TODOS_VUELOS:
      return {
      ...state, vuelos: action.payload
    };
    case Types.CONSULTA_VUELOS: return {
      ...state,
        IDVuelo: action.payload.IDVuelo,
      matriculaID: action.payload.matriculaID,
      fechaSalida: Date.parse(action.payload.fechaSalida),
      fechaLlegada: Date.parse(action.payload.fechaLlegada),
      origen: action.payload.origen,
      destino: action.payload.destino,
      ruta: action.payload.ruta,
      idEstado: action.payload.idEstado
    };
    case Types.AGREGAR_VUELO: return {
      ...state,
      vuelos: [...state.vuelos, action.payload]
    };
    case Types.MODIFICAR_VUELO:
      const idVueloModificado = state.vuelos.findIndex(v => v.IDVuelo === action.payload.IDVuelo);
      if (idVueloModificado >= 0) {
        state.vuelos.splice(idVueloModificado, 1, action.payload);
      }
      return state;
    case Types.CONSULTA_ESTADOS:
      return { ...state, estados: action.payload };
    case Types.CONSULTA_AEROLINEAS:
      return { ...state, aerolineas: action.payload };
    case Types.CONSULTA_MATRICULAS:
      return { ...state, matriculas: action.payload };

    case Types.LIMPIAR_DETALLE_VUELO:
      return {
        ...state,
        IDVuelo: 0,
        matriculaID: 0,
        fechaSalida: new Date(),
        fechaLlegada: new Date(),
        origen: "",
        destino: "",
        ruta: "",
        idEstado: 0
      };
    case Types.CAMBIAR_RUTA:
      return {...state, ruta: action.payload };
    case Types.CAMBIAR_ESTADO:
      return {...state, idEstado: action.payload };
    case Types.CAMBIAR_MATRICULA:
      return {...state, matriculaID: action.payload };
    case Types.CAMBIAR_ORIGEN:
      return {...state, origen: action.payload };
    case Types.CAMBIAR_DESTINO:
      return {...state, destino: action.payload };
    case Types.CAMBIAR_FECHA_SALIDA:
      return {...state, fechaSalida: action.payload };
    case Types.CAMBIAR_FECHA_LLEGADA:
      return {...state, fechaLlegada: action.payload };

    default: return state;
  }
};