import React, { Component } from 'react'
import Destaque from '../components/Destaque'
import Estrenos from '../components/Estrenos'
import Header from '../components/Header'
import SearchResults from '../components/SearchResults'
import TituloSeccion from '../components/TituloSeccion'
import { connect } from 'react-redux'
import { getEstrenos, getProximosEstrenos } from '../redux/actions/moviesActions'


class HomePage extends Component {

    state = {
        movies: [],
        movieDestacada: "",
        proximos_estrenos: []
    }

    componentDidMount() {
        this.props.getProximosEstrenos()
        this.props.getEstrenos()
    }

    renderResults = () => {
        const { data } = this.props.searchMovie;
        if (data.length === 0) {
            return (
                <div>
                    <Destaque movies={this.props.estrenos.movieDestacada} />
                    <TituloSeccion>Estrenos:</TituloSeccion>
                    <Estrenos movies={this.props.estrenos.data} />
                    <TituloSeccion>Proximamente:</TituloSeccion>
                    <Estrenos movies={this.props.proximoEstrenos.data} />
                </div>
            );
        }else{
            return  <SearchResults data={data} />;
        }
    }



    render() {

        return (

            <div>               
                <Header path={this.props.match.path}></Header>
                {this.renderResults()}
            </div>
        )

    }


}
function mapStateToProps({ estrenos, proximoEstrenos, searchMovie }) {
    return {
        estrenos,
        proximoEstrenos,
        searchMovie
    }
}
export default connect(mapStateToProps,
    {
        getEstrenos,
        getProximosEstrenos
    })(HomePage);