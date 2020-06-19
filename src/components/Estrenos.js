import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const urlbaseImage = 'http://image.tmdb.org/t/p/w154'
const Container = styled.div`
    >ul{
        background:rgba(66,165,245,1);
        padding-left:0; 
        overflow:scroll;      
        display:felx;
        align-items:strech;
        margin:0;
    }
`
const ItemMovie = styled(Link)`
    list-style:none;
    display:block;
    background:url(${props=>urlbaseImage+props.movie.poster_path}) no-repeat;
    background-size:cover;
    min-width:200px;
    margin:5px;
    height:300px;
    font-family: 'Amatic SC', cursive;   
    color :yellow;
    font-size:auto;
    font-weight:bold;
    >span{
        display:none;
        background:rgba(38,50,56,0.5)
    }
        &:hover{
            >span{
                display:block;
            }
        }
    
`

export default ({movies}) => (
    <Container>
        <ul>
            {
                movies.map(movie =>(
                <ItemMovie key={movie.id} to={`/details/${movie.id}`} movie={movie}>
                    <span>{movie.title}</span>
                </ItemMovie>
                ))
            }
        </ul>
    </Container>
   
)
