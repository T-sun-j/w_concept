import React, { Component } from 'react'
import {CarHeader} from './styledComponents'
export default class headerContainers extends Component {
  render() {
    return (
      <CarHeader>
          <div className="header">
              <span> </span>
               <p>购物车</p>
               <span className="header-w">管理</span>
          </div>
      </CarHeader>
    )
  }
}
