import React, { Component,Fragment } from 'react'
import HeaderContainers from './header/headerContainer'
import ContentContainers from './content/contentContainer'
export default class discoverContainer extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainers/>
        <ContentContainers/>
      </Fragment>
    )
  }
}
