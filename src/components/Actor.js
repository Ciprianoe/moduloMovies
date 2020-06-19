import React from 'react'
import styled from 'styled-components'

const urlbaseImage = 'http://image.tmdb.org/t/p/w185'

const Container = styled.div`
    border:2px solid gold;
    margin:2px;
`
const Foto = styled.img`

`
const Nombre = styled.span`
    background:rgba(0,0,0,0.5);
    color:white;
`

export default ({ actor }) => {

    if (actor) {

        return (

            <Container>
                <Foto src={actor.profile_path ? urlbaseImage+actor.profile_path: "http://www.dummyimage.com/185&text=No_Image" }></Foto>
                <Nombre>{actor.name}</Nombre>

            </Container>
        )

    } else {

        return (

            <div>Cargando....!!!!</div>
        )
    }


}



