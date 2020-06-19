import React from 'react'
import styled from 'styled-components'
import Search from './Search'
import {connect} from 'react-redux'

//accions
import {getSearch, clearSearch} from '../redux/actions/moviesActions'


const Container = styled.div`
        position:fixed;
        display:flex;
        width:100%;
        height:75px;
        background:rgba(0,0,0,0.5);
        color:white;
        justify-content:space-between;
        align-items:center;
        >h1{
            margin:left;
        }
      
`
const Fecha = styled.div`
        
`    
     
  

class Header extends React.Component {

    state = {
        search_text:""
    }
    onChangeSearch= (event)=>{
        const {value} = event.target
        if(value){
            this.props.getSearch(value)
            this.setState({
                search_text:value
            })
        }else{

            this.onClearTextSearch()
        }
        
        
    }
    onClearTextSearch = ()=>{
        this.setState({
            search_text:""
        })
        this.props.clearSearch()
    }
    render() {
        return (
            <Container>
                <h1>That´s My Movie</h1>
                {this.props.path === "/" && 
                <Search 
                onChangeSearch={this.onChangeSearch}
                clearSearch={this.onClearTextSearch}
                search_text={this.state.search_text}
                ></Search>}
                <Fecha>{this.props.test.fecha.toLocaleString()}</Fecha>
            </Container>
        )
    }

}

function mapStateToProps({test}){
    return {test}

}
export default connect(mapStateToProps,{getSearch,clearSearch})(Header);