import React, { Component } from 'react'
import TitleContainers from "../common/title/titleContainers"
import NewProducts from "./NewProducts"
import {NewProductsStyled} from './styledComponents'
  
export default class NewProductsContainer extends Component {
  constructor(){
    super();
    this.state={
        title: "新品精选"
    }
  }
  render() {
    let {title} = this.state;
    return (
      <NewProductsStyled>
          <TitleContainers  title={title}/>
          <NewProducts/>
      </NewProductsStyled>
    )
  }
}
