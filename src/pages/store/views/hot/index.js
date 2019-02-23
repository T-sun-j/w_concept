import React, { Component } from 'react'
import TitleContainers from "../common/title/titleContainers"
import HotMain from "./hotMain"
import {HotStyled} from './styledComponents'
  
export default class HotContainer extends Component {
  constructor(){
    super();
    this.state={
        title: "热门品类",
        flag: true
    }
  }
  render() {
    let {title,flag} = this.state;
    return (
      <HotStyled>
          <TitleContainers  title={title} flag={flag}/>
          <HotMain/>
      </HotStyled>
    )
  }
}
