import React from 'react'
import styled from 'styled-components'



const SearchContainer = styled.div`    
border: 1px solid white; 
`
const InputSearch = styled.input`
    background:none;
    width:300px;   
    height:22px;
    border:none;
    color:white;
    font-size:20px;    
    margin-left:10px;
    margin-right:10px;      
    font-size:22px; 
    padding:10px;
    &::placeholder{
        color:#F8B300;
    }
    &:focus{
        outline:none;
    }
      
`
const BotonClear = styled.a`
color:white;
`
export default ({ onChangeSearch , clearSearch , search_text }) => (

    
        <SearchContainer>
            <i className="fa fa-search fa-lg" aria-hidden="true">
            </i>
            <InputSearch placeholder="Search Your Movie" onChange={onChangeSearch} value={search_text} />
            <BotonClear  onClick={clearSearch}><i className="fa fa-trash fa-lg" aria-hidden="true">
            </i></BotonClear>            
        </SearchContainer>
   




)