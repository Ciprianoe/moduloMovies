import  'font-awesome/css/font-awesome.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware } from 'redux';
import logger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { Provider } from 'react-redux';
import reducers from './redux/reducers'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Allan:wght@700&family=Amatic+SC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');
    body{
      margin:0;
    }

`
const store = createStore(reducers,{},applyMiddleware(promise,reduxThunk,logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
