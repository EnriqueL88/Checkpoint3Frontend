import {combineReducers} from 'redux';
import aerolineasReducer from './aerolineasReducer';
import usuariosReducer from './usuariosReducer';
import vuelosReducer from './vuelosReducer';
import flotillasReducer from './flotillasReducer';

export default combineReducers ({
	aerolineasReducer,
	usuariosReducer,
	vuelosReducer,
	flotillasReducer,
})