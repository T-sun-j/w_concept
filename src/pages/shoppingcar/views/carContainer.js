import React, { Component } from 'react'
import HeaderContainers from "./header/headerContainers"
import ContentContainers from "./content/contentContainer"

import styled from "styled-components"
export default class carContainer extends Component {
  render() {
    return (
      <div>
        <HeaderContainers className="header"/>
        <ContentContainers/>
        
      </div>

    )
  }
}
styled.div`
  width:100%;
  height:100%;
  backgournd-color:#9e9e9e;
  .header{
    position:fied;
  }

`