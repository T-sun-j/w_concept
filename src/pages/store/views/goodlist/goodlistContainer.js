import React, { Component } from 'react'
import {Goodlist} from './styledComponents'
import TitleContainers from "../common/title/titleContainers"
import PicContainer from "./picContainer"
  
export default class GoodList extends Component {
  constructor(){
    super();
    this.state={
        title: "好物优选"
    }
  }
  render() {
    let {title} = this.state;
    return (
      <Goodlist>
          <TitleContainers  title={title}/>
          <PicContainer/>
      </Goodlist>
    )
  }
}
