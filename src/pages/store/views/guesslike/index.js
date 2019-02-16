import React, { Component } from 'react'
import {GuessStyled} from './styledComponents'
import TitleContainers from "../common/title/titleContainers"
import GuessLike from "./guesslike"
  
export default class GuessLikeContainer extends Component {
  constructor(){
    super();
    this.state={
        title: "猜你喜欢"
    }
  }
  render() {
    let {title} = this.state;
    return (
      <GuessStyled>
          <TitleContainers  title={title}/>
          <GuessLike/>
      </GuessStyled>
    )
  }
}
