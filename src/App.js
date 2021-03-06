import React, { Component } from 'react';
import {FooterContainer as index} from "./pages/footer"
import {DetailsContainer as details} from "./pages/details"
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

// import {DiscoverContainer as discover} from './pages/discover'

// import {MineContainer as min e} from './pages/mine'
// import {RecommendContainer as recommend} from './pages/recommend'
// import {CarContainer as car} from './pages/shoppingcar'
// import {StoreContainer as store} from './pages/store'



class App extends Component {
  render() {
    return (
      <Switch>
        {/* <Redirect from="" to="/discover" />      */}
              
          {/* <Route exact  path='/store' component={store}></Route> */}
          {/* <Route exact  path='/discover' component={discover}></Route>
          <Route exact  path='/car' component={car}></Route>
          <Route exact  path='/recommend' component={recommend}></Route>
          <Route exact  path='/mine' component={mine}></Route> */}
          <Route path="/details" component={details}> </Route>
          <Route   path='/' component={index}></Route>  
      </Switch>
    );
  }
}

export default App;
