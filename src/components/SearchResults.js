import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const urlbaseImage = 'http://image.tmdb.org/t/p/w185'

const Container = styled.div`
    display:flex;
    background:black;
    flex-wrap:wrap;
`
const Item = styled(Link)`
background:url(${props=>urlbaseImage+props.movie.poster_path}) no-repeat;
background-size:cover;
height:300px;
width:200px;
`

export default ({data}) => {

    return(
        <Container>
            {
                data.map(movie=>(
                    <Item key={movie.id} movie={movie} to={`/details/${movie.id}`}/>
                     ))
            }
        </Container>
    )
}