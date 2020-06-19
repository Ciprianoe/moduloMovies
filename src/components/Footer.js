import React from 'react'
import styled from 'styled-components'
import Logo from '../img/logotmdb2.svg'

const Footer = styled.div`
    background:rgba(30,50,56,1);
    padding:20px;
    >img{
       size:10px;
    }
`

export default () => (
        <Footer>
            <img src={Logo} alt=""/>
        </Footer>

)