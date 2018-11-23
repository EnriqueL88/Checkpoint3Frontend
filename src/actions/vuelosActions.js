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

export const cambiarInput = (type, valor) => async (dispatch) => {
  dispatch ({type, payload: valor})
};

export const usuarioPasaporte =(pasaporte)=> async (dispatch) =>{
  dispatch(llamarAction);
  try{
    console.log(pasaporte)
    const response = await axios.get(getApiUri(`vuelos/usuario/${pasaporte}`))
    dispatch(exitoAction);
    console.log("response.data", response.data);
    dispatch({type: Types.TRAER_USUARIO, payload:response.data});
  }catch(error){
    dispatchError(dispatch, error)
  }
};

export const traerManifiesto = (id) => async(dispatch) => {
  dispatch(llamarAction);
    console.log("id", id);
  try {
    const response = await axios.get(getApiUri(`vuelos/${id}/manifiesto`));
    dispatch(exitoAction);
    dispatch({ type: Types.TRAER_MANIF, payload: response.data });
  } catch (error) {
    dispatchError(dispatch, error);
    console.log('errror')
  }
};

export const traerUsuario = (pasaporte) => async(dispatch) => {
  dispatch(llamarAction);
  try {
    const usuarioResponse = await axios.get(getApiUri(""));
    dispatch(exitoAction);
    dispatch({ type: Types.CONSULTA_TODOS_VUELOS, payload: usuarioResponse.data });

    const estadosResponse = await axios.get(getApiUri('estados'));
    dispatch(exitoAction);
    const estados = {};
    estadosResponse.data.forEach((item) =>  estados[item.idEstado] = item.estado);
    dispatch({type: Types.CONSULTA_ESTADOS, payload: estados })
  } catch (error) {
    dispatchError(dispatch, error);
  }
};

export const traerVuelos = () => async(dispatch) => {
  dispatch(llamarAction);
  try {
    const vuelosResponse = await axios.get(getApiUri("vuelos"));
    dispatch(exitoAction);
    dispatch({ type: Types.CONSULTA_TODOS_VUELOS, payload: vuelosResponse.data });
  } catch (error) {
    dispatchError(dispatch, error);
  }
};

export const traerVueloUnico = (idVuelo) => async(dispatch) => {
  dispatch(llamarAction);
  try {
    const response = await axios.get(getApiUri(`vuelos/${idVuelo}`));
    dispatch(exitoAction);
    dispatch({ type: Types.CONSULTA_VUELOS, payload: response.data[0] });
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
    dispatch({ type: Types.LIMPIAR_DETALLE_VUELO });
    window.Materialize.toast('Vuelo creado exitosamente.', 3000);
  } catch (error) {
    dispatchError(dispatch, error);
  }
};

export const modificarVuelo = (vuelo) => async(dispatch) => {
  dispatch(llamarAction);
  try {
    const response = await axios.post(getApiUri(`vuelos/${vuelo.IDVuelo}`), vuelo);
    dispatch(exitoAction);
    dispatch({ type: Types.MODIFICAR_VUELO, payload: response.data });
    window.Materialize.toast('Vuelo modificado exitosamente.', 3000);
  } catch (error) {
    dispatchError(dispatch, error);
  }
};

export const listaEstados = () => async(dispatch) => {
  dispatch(llamarAction);
  try {
    const response = await axios.get(getApiUri('estados'));
    dispatch(exitoAction);
    const estados = {};
    response.data.forEach(item =>  estados[item.idEstado] = item.estado);
    dispatch({type: Types.CONSULTA_ESTADOS, payload: estados })
  } catch (error) {
    dispatchError(dispatch, error);
  }
};

export const enviarUsuario = (id, usuario) => async (dispatch) => {
  dispatch(llamarAction);
  try {
    let idUsuarioD = usuario.IDUsuario;
    usuario.idUsuario = idUsuarioD
    console.log(usuario)
    const response = await axios.post(getApiUri(`vuelos/${id}/manifiesto`), usuario);
    dispatch(exitoAction);
    dispatch({type: Types.DELETE, payload:'' });
    window.Materialize.toast('Usuario Guardado exitosamente.', 5*1000);
  }
  catch (error) {
    dispatchError(dispatch, error)
    console.log(error, 'error')
    window.Materialize.toast('Usuario ya registrado anteriormente.', 5*1000, 'red');
  }
};

export const obtenerListaAerolineas = () => async(dispatch) => {
  dispatch(llamarAction);
  try {
    const response = await axios.get(getApiUri('aerolineas'));
    dispatch(exitoAction);
    dispatch({ type: Types.CONSULTA_AEROLINEAS, payload: response.data })
  } catch (error) {
    dispatchError(dispatch, error);
  }
};

export const obtenerFlota = (idAerolinea) => async(dispatch) => {
  dispatch(llamarAction);
  try {
    const response = await axios.get(getApiUri(`flota/${idAerolinea}`));
    dispatch(exitoAction);
    const matriculas = response.data.map(avion => avion.matricula);
    dispatch({ type: Types.CONSULTA_MATRICULAS, payload: matriculas })
  } catch (error) {
    dispatchError(dispatch, error);
  }
};

export const limpiarDetalleVuelos = () => async(dispatch) => {
  dispatch({ type: Types.LIMPIAR_DETALLE_VUELO });
};

export const cambiarRuta = (nuevaRuta) => (dispatch) => {
  dispatch({ type: Types.CAMBIAR_RUTA, payload: nuevaRuta })
};

export const cambiarEstado = (estado) => (dispatch) => {
  dispatch({ type: Types.CAMBIAR_ESTADO, payload: parseInt(estado) })
};

export const cambiarMatricula = (matricula) => (dispatch) => {
  dispatch({ type: Types.CAMBIAR_MATRICULA, payload: parseInt(matricula) })
};

export const cambiarOrigen = (origen) => (dispatch) => {
  dispatch({ type: Types.CAMBIAR_ORIGEN, payload: origen.toUpperCase() })
};

export const cambiarDestino = (destino) => (dispatch) => {
  dispatch({ type: Types.CAMBIAR_DESTINO, payload: destino.toUpperCase() })
};

export const cambiarFechaSalida = (fecha) => (dispatch) => {
  dispatch({ type: Types.CAMBIAR_FECHA_SALIDA, payload: fecha})
};
export const cambiarFechaLlegada = (fecha) => (dispatch) => {
  dispatch({ type: Types.CAMBIAR_FECHA_LLEGADA, payload: fecha})
};
