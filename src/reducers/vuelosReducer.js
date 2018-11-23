import * as Types from '../types/vuelosTypes';

const INITIAL_STATE = {
  llamando: false,
  error: null,
  vuelos: [],
  IDVuelo: 0,
  matriculaID: 0,
  fechaSalida: null,
  fechaLlegada: null,
  origen: '',
  destino: '',
  ruta: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LLAMAR: return { ...state, error: null, llamando: true };
    case Types.EXITOSO: return { ...state, error: null, llamando: false };
    case Types.FALLO: return { ...state, llamando: false, error: action.payload };

    case Types.CONSULTA_TODOS_VUELOS:
      console.log(action.payload);
      return {
      ...state, vuelos: action.payload
    };
    case Types.CONSULTA_VUELOS: return {
      ...state,
      matriculaID: action.payload.matriculaID,
      fechaSalida: action.payload.fechaSalida,
      fechaLlegada: action.payload.fechaLlegada,
      origen: action.payload.origen,
      destino: action.payload.destino,
      ruta: action.payload.ruta
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
    default: return state;
  }
};