import tipos from './tipos'
import axios from 'axios'




const urlBase = 'https://api.themoviedb.org/3/movie/'
const key = '4ead121253460fa8c732030d3f869f0c&language=es'
const urlBaseSearch = 'https://api.themoviedb.org/3/'




//now_playing?api_key=
export const getEstrenos = () => dispatch => {

    dispatch({
        type: tipos.GET_ESTRENOS,
        payload: axios.get(`${urlBase}now_playing?api_key=${key}&language=es`)
    })


}

//upcoming?api_key=
export const getProximosEstrenos = () => dispatch => {

    dispatch({
        type: tipos.GET_PROX_ESTRENOS,
        payload: axios.get(`${urlBase}upcoming?api_key=${key}&language=es`)
    })


}
export const getCredits = (movieid) => dispatch => {

    dispatch({
        type: tipos.GET_CREDITS,
        payload: axios.get(`${urlBase}${movieid}/credits?api_key=${key}&language=es`)
    })


}
export const getMovieDetails = (movieid) => dispatch => {

    dispatch({
        type: tipos.GET_DETAILS,
        payload: axios.get(`${urlBase}${movieid}?api_key=${key}&language=es`)

    })

} 

export const getSearch = (text) => dispatch => {

    dispatch({
        type: tipos.GET_SEARCH,
        payload: axios.get(`${urlBaseSearch}search/movie?query=${text}&api_key=${key}&language=es`)
        

    })
}

export const clearSearch = () =>{
    return{
        type: tipos.CLEAR_SEARCH
    }
}