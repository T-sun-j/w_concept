import React, { Component } from 'react'
import {StoreHeader} from './styledComponents'

export default class HeaderContainers extends Component {
  render() {
    return (
      <StoreHeader>
        <div className="headerWrap">
          <div className="logo">
              <img src="https://img03.wconceptimg.cn/static/a.m/images/logo/wconcept.png" alt=""/>
          </div>
          <div className="love" onClick={this.addLove}>
              <img src="https://img03.wconceptimg.cn/static/a.m/images/fav/black-border-fav.png" alt=""/>
          </div>
          <div className="search">
              <img src="https://img03.wconceptimg.cn/static/a.m/images/search/search.png" alt=""/>
          </div>
        </div>
      </StoreHeader>
    )
  }
}
