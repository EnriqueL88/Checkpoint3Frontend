import axios from 'axios';
import * as Types from '../types/vuelosTypes';

const getApiUri = (api) => `https://chchikorita.herokuapp.com/api/${api}`;

const llamarAction = { type: Types.LLAMAR };
const exitoAction = { type: Types.EXITOSO };
const dispatchError = (dispatch, error) => dispatch({ type: Types.FALLO, payload: error.message });

export const traerVuelos = () => async(dispatch) => {
  dispatch(llamarAction);
  try {
    const response = axios.get(getApiUri("vuelos"));
    dispatch(exitoAction);
    dispatch({ type: Types.CONSULTA_TODOS_VUELOS, payload: response.data });
  } catch (error) {
    dispatchError(dispatch, error);
  }
};

export const traerVueloUnico = (idVuelo) => async(dispatch) => {
  dispatch(llamarAction);
  try {
    const response = axios.get(getApiUri(`vuelos/${id}`));
    dispatch(exitoAction);
    dispatch({ type: Types.CONSULTA_VUELOS, payload: response.data });
  } catch (error) {
    dispatchError(dispatch, error);
  }
};

export const agregarVuelo = (vuelo) => async(dispatch) => {
  dispatch(llamarAction);
  try {
    const response = axios.post(getApiUri('vuelos'));
    dispatch(exitoAction);
  } catch (error) {
    dispatchError(dispatch, error);
  }
};

export const modificarVuelo = (vuelo) => async(dispatch) => {
  dispatch({ type: Types.LLAMAR });
  try {
    const response = axios.post(getApiUri(`vuelos`));
  } catch (error) {

  }
}