import React, { Component } from "react";
import { connect } from "react-redux";
// import  ShopMain  from "./styledComponents";
import  Header  from "./header/header";
// import {HeaderStyled} from "./header/styledComponent";
 
// const mapState = state => {
//   return {
 
//   };
// };

const mapDispatch = dispatch => {
  return {
    
  };
};

class StoreContainer extends Component {
  // constructor() {
  //   super();
   
  // }
  render() {
    return (
      <div>
          {/* <HeaderStyled> */}
            <Header/>
          {/* </HeaderStyled> */}
      </div>
    )
  }
  componentDidMount() {
    
  }
 
 
}

export default connect(
  // mapState,
  mapDispatch
)(StoreContainer);
