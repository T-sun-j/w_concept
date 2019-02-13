import React, { Component } from 'react';
// import {
//   Route,
//   // Redirect,
//   Switch
// } from 'react-router-dom'


import {Footer} from "./pages/footer/index"

class App extends Component {
  render() {
    return (
      // <Switch>
      //     {/* <Redirect exact  from="/" to="/store" />          */}
      //     {/* <Route   path='/' component={store}></Route> */}
      //     <Route path='/' component={Index}></Route>
      //   </Switch>
      <Footer></Footer>
    );
  }
}

export default App;
