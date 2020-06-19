import {combineReducers} from 'redux'
import test from './testReducer'
import estrenos from './estrenosReducer'
import proximoEstrenos from './proximosEstrenosReducer'
import creditos from './creditosReducer'
import detalles_pelicula from './peliculasDetallesReducer'
import searchMovie from './searchReducer'


export default combineReducers({
    test,
    estrenos,
    proximoEstrenos,
    creditos,
    detalles_pelicula,
    searchMovie
})