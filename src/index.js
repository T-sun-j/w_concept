import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'

import "./assets/styles/reset.css"
import "./assets/styles/animate.css"
// import  "./assets/js/flexble" 

import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/> 
            
        </BrowserRouter>
    </Provider>
    ,
   document.getElementById('root')
);


