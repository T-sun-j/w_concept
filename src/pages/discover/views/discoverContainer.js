import React, { Component } from 'react'
import HeaderContainers from './header/headerContainer'
import ContentContainers from './content/contentContainer'
export default class discoverContainer extends Component {
  render() {
    return (
      <div>
        <HeaderContainers/>
        <ContentContainers/>
      </div>
    )
  }
}
