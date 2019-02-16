import React, { Component } from 'react'
import {NavHeader} from './styledComponents'

export default class NavContainers extends Component {
  constructor(){
    super()
    this.state = {
       navList:["首页","服饰","鞋履","包配","男士","生活"]
    }
  }
  render() {
    return (
      <NavHeader>
        <div className="navWrap">
          <div className="content">
              <div className="contentTop">
                  <ul>
                    {this.state.navList.map((items,index)=>(
                      <li key={index}>{items}</li>
                    ))
                    }
                  </ul>
              </div>
              <div className="contentBottom"></div>
          </div>
          <div className="navRight"></div>
        </div>
      </NavHeader>
    )
  }
  
}
