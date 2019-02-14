import React, { Component } from 'react';
import {FooterContainer as Index} from "./pages/footer"
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import {DiscoverContainer as discover} from './pages/discover'

import {MineContainer as mine} from './pages/mine'
import {RecommendContainer as recommend} from './pages/recommend'
import {CarContainer as car} from './pages/shoppingcar'
import {StoreHomeContainer as storeHome} from './pages/storeHome'



class App extends Component {
  render() {
    return (
      <Switch>
          <Redirect exact  from="/" to="/Index" />     
              
          <Route exact  path='/storeHome' component={storeHome}></Route>
          <Route exact  path='/discover' component={discover}></Route>
          <Route exact  path='/car' component={car}></Route>
          <Route exact  path='/recommend' component={recommend}></Route>
          <Route exact  path='/mine' component={mine}></Route>
          <Route   path='/Index' component={Index}></Route>  
        </Switch>
    );
  }
}

export default App;
