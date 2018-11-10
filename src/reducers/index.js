import {combineReducers} from 'redux';
import aerolineasReducer from './aerolineasReducer';
import usuariosReducer from './usuariosReducer';
import vuelosReducer from './vuelosReducer';

export default combineReducers ({
	aerolineasReducer,
	usuariosReducer,
	vuelosReducer
})