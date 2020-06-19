import React, { Component } from 'react'
import {connect} from 'react-redux'
import Destaque from '../components/Destaque'
import Cast from '../components/Cast'
import Header from '../components/Header'
//acciones
import {getMovieDetails, getCredits} from '../redux/actions/moviesActions'


class MovieDetails extends Component {


    state = {
        movie: "",
        cast: ""

    }

    componentDidMount() {
        //console.log(this.props.match.params.movieid)
        const { movieid } = this.props.match.params
        this.props.getMovieDetails(movieid)
        this.props.getCredits(movieid)
    }

 
    render() {

        return (

            <div>
                <Header fecha ={this.props.test.fecha}></Header>
                <Destaque movies={this.props.detalles_pelicula.data}></Destaque>
                <Cast cast={this.props.creditos.data}></Cast>
            </div>

        )

    }

}

function mapStateToProps({creditos,detalles_pelicula,test}){
        return {creditos,detalles_pelicula,test}
}

export default connect(mapStateToProps,{getMovieDetails,getCredits})(MovieDetails); 