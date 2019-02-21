import React, { Component } from 'react';
import {FooterContainer as index} from "./pages/footer"

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
        {/* <Redirect from="/" to="/discover" />      */}
              
          {/* <Route   path='/store' component={store}></Route>  */}
           {/* <Route   path='/discover' component={discover}></Route> */}
          {/* <Route   path='/car' component={car}></Route> */}
          {/* <Route   path='/recommend' component={recommend}></Route> */}
          {/* <Route   path='/mine' component={mine}></Route> */}
        <Route path='/' component={index}></Route>  
        </Switch>
    );
  }
}

export default App;
