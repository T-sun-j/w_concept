import React, { Component } from 'react';
import {FooterContainer as footer} from "./pages/footer"
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

// import {DiscoverContainer as discover} from './pages/discover'

// import {MineContainer as mine} from './pages/mine'
// import {RecommendContainer as recommend} from './pages/recommend'
// import {CarContainer as car} from './pages/shoppingcar'
// import {StoreContainer as store} from './pages/store'



class App extends Component {
  render() {
    return (
      <Switch>
          <Redirect exact  from="/" to="/store" />     
              
          {/* <Route exact  path='/store' component={store}></Route>  */}
           {/* <Route exact  path='/discover' component={discover}></Route> */}
          {/* <Route exact  path='/car' component={car}></Route> */}
          {/* <Route exact  path='/recommend' component={recommend}></Route> */}
          {/* <Route exact  path='/mine' component={mine}></Route> */}
          <Route   path='/' component={footer}></Route>  
        </Switch>
    );
  }
}

export default App;
