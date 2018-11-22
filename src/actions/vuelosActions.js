import axios from 'axios';
import * as Types from '../types/vuelosTypes';

// Genera la ruta a una función de la API;
// reduce el riesgo de errores al escribir o copiar la URI del backend y
// permite cambiarla en caso de mover el backend
const getApiUri = (api) => `https://chchikorita.herokuapp.com/api/${api}`;

// Constantes para actions
const llamarAction = { type: Types.LLAMAR };
const exitoAction = { type: Types.EXITOSO };
const dispatchError = (dispatch, error) => dispatch({ type: Types.FALLO, payload: error.message });

export const traerVuelos = () => async(dispatch) => {
  dispatch(llamarAction);
  try {
    const response = await axios.get(getApiUri("vuelos"));
    dispatch(exitoAction);
    dispatch({ type: Types.CONSULTA_TODOS_VUELOS, payload: response.data });
  } catch (error) {
    dispatchError(dispatch, error);
  }
};

export const traerVueloUnico = (idVuelo) => async(dispatch) => {
  dispatch(llamarAction);
  try {
    const response = await axios.get(getApiUri(`vuelos/${id}`)); // esta tronando id aqui 
    dispatch(exitoAction);
    dispatch({ type: Types.CONSULTA_VUELOS, payload: response.data });
  } catch (error) {
    dispatchError(dispatch, error);
  }
};

export const agregarVuelo = (vuelo) => async(dispatch) => {
  dispatch(llamarAction);
  try {
    const response = await axios.post(getApiUri('vuelos'), vuelo);
    dispatch(exitoAction);
    dispatch({ type: Types.AGREGAR_VUELO, payload: response.data });
  } catch (error) {
    dispatchError(dispatch, error);
  }
};

export const modificarVuelo = (vuelo) => async(dispatch) => {
  dispatch({ type: Types.LLAMAR });
  try {
    const response = axios.post(getApiUri(`vuelos/${vuelo.IDVuelo}`), vuelo);
    dispatch(exitoAction);
    dispatch({ type: Types.MODIFICAR_VUELO, payload: response.data });
  } catch (error) {
    dispatchError(dispatch, error);
  }
};