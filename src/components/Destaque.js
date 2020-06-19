import React from 'react'
import styled from 'styled-components'

const urlbaseImage = 'http://image.tmdb.org/t/p/w780/'

const Container = styled.div`
font-family: 'Rock Salt', cursive;
background:url(${props => urlbaseImage + props.movie.backdrop_path})no-repeat;
background-size:cover;
color:white;
font-size:22px;
height:750px;
`
const PeliculaInfo = styled.div`
position:relative;
color:rgba(205,220,57,1);
`

const PeliculaInfoContent = styled.div`
    position:absolute;
    top:150px;
    left:50px;
    background:rgba(38,50,56,0.5);
    padding:10px;
`
const PeliculaInfoTitulo = styled.h1`
    font-size:22px;
    color:rgba(255,179,0,1);
    font-family: 'Rock Salt', cursive;
    
`
const PeliculaInfoOverview = styled.p`
    font-size:14px;
    max-width:400px;
    font-family:"Rock Salt", cursive;

`
const VotoPromedio = styled.span`
color:rgba(100,221,23,1);
font-family:"Rock Salt", cursive;

`

const Cargando = styled.div`
text-aling:center;
font-size:22px;
`

// representacional 
export default ({ movies }) => {

    if (movies) {
        return (

            <div>
                <Container movie={movies}>
                    <PeliculaInfo>
                        <PeliculaInfoContent>
                            <PeliculaInfoTitulo>{movies.title}</PeliculaInfoTitulo>
                            <PeliculaInfoOverview>{movies.overview}</PeliculaInfoOverview>
                            <VotoPromedio>{movies.vote_average}/10</VotoPromedio>
                        </PeliculaInfoContent>
                    </PeliculaInfo>
                </Container>
            </div>
        )

    } else {
        return (
            <Cargando>Cargando....</Cargando>

        )

    }

}

