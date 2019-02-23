import React, { Component } from 'react'
import TitleContainers from "../common/title/titleContainers"
import StarTalk from "./StarTalk"
import {StarTalkStyled} from './styledComponents'
  
export default class StarTalkContainer extends Component {
  constructor(){
    super();
    this.state={
        title: "明星话题",
        flag: true
    }
  }
  render() {
    let {title,flag} = this.state;
    return (
      <StarTalkStyled>
          <TitleContainers  title={title} flag={flag}/>
          <StarTalk/>
      </StarTalkStyled>
    )
  }
}
