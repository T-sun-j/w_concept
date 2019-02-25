import React, { Component } from 'react'
import {CartStyled} from './styledComponents'

export default class CartContainers extends Component {
  constructor(){
    super();
    this.state = {
      cartList: [],
      obj: {}
    }
  }
  render() {
    
    return (
      <CartStyled>
        <a className="" href="##">
          <i></i>
          <div>购物车</div>
        </a>
        <a className="" href="##">
            <i></i>
            <div>联系客服</div>
        </a>
        <div className="cart_div" onClick={this.handleAdd.bind(this)}>
          <a href="##" >
              加入购物车
          </a>
        </div>
      </CartStyled >
    )
  }
  handleAdd(){
    
    let {data} = this.props;
    data.num = 1;
    this.state.cartList.push(data);
  
    let str = JSON.stringify(this.state.cartList);
    console.log(str);
    sessionStorage.setItem("cart",str);
  }
} 
