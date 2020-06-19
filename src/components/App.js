import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import {connect} from 'react-redux'
import {updateFecha} from '../redux/actions/testActions'
import HomePage from '../pages/HomePage'
import MovieDetails from '../pages/MovieDetails'

import Footer from './Footer'

class App extends Component {

  componentDidMount(){
    setInterval(this.props.updateFecha,1000)
  }

  render() {
    return (
      <BrowserRouter>
        <div>         
          <Route exact path="/" component={HomePage} />
          <Route path="/details/:movieid" component={MovieDetails} />
          <Footer></Footer>
        </div>
      </BrowserRouter>
    )
  }



}

function mapStateToProps({test}) {
  return{test}
}


export default connect(mapStateToProps,{
  updateFecha
})(App);
