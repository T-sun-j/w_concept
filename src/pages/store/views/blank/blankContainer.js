import React, { Component } from 'react'
import {BlankStyle} from './styledComponents'

export default class Blank  extends Component {
  constructor(){
    super()
    this.state = {
    }
  }
  render() {
    return (
      <BlankStyle>
        <div>

        </div>
      </BlankStyle>
    )
  }
  
}
