import React, { Component } from 'react'
import {MainStyled} from "./mainStyled"
import {connect} from "react-redux";

import {getNewList} from "../../actionCreator"

class NewProducts extends Component {
  
    render() {

      return (
         <MainStyled>

         </MainStyled>
      )
    }
    componentDidMount(){
        this.props.newProductsGETdata();
    }
}
const mapState = (state)=>({
    // newList:state.getIn(["",""])
})


const mapDispatch = (dispatch)=>({
    newProductsGETdata(){
        dispatch(getNewList())
    },
   
})

export default connect(mapState,mapDispatch)(NewProducts);
  