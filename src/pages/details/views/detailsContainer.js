import React, { Component } from 'react'
// import HeaderContainers from './header/headerContainer'
import {connect} from "react-redux";
import {getNewList} from "../actionCreator"
import Immutable from "immutable"
import {DetailStyled} from "./styleComponents"
import CartContainers from "./car/carContainer"
import qs from 'qs';
import "./index.css"
import BScroll from 'better-scroll'

class DetailsContainer extends Component {
  constructor() {
     super();
     this.state = {
      //  aid: "111",
       list:[],
       imgs:[]
     }
     
  }
 
  render() {
    let {list} = this.state;
     // console.log(list);
    let data = {
      name: list.name,
      price: list.final_price,
      img: list.image_url
    }
    return (
      <div  className="wrapper details_wrap" data-name={list.name} data-color={list.final_price} data-img={list.image_url}>
        <DetailStyled className="content">
            <div className="detail_imgAll">
                {
                list.images ? list.images.map((item,index)=>{
                    return (
                      <div key={index}>
                          <img src={item} alt=""/>
                      </div>
                    )
                  }): ""
                } 
            </div>
            <div className="detail_message">
                <div className="price">￥<span>{list.final_price}</span></div>
                <div className="name">
                    <div>{list.brand_name}</div>
                    {list.name}
                </div>
                <div className="ziying">{list.goodes_origin}</div>
            </div>
            <div className="detail_send">
                <div className="title">发货方式</div>
                <div className="shop">{list.warehouse_first}{list.warehouse_last}</div>
            </div>
            <div className="details_blank"></div>
        </DetailStyled>
        <CartContainers data={data}/>
      </div>
    )
  }
  componentWillReceiveProps(newprops){  
    
    this.state.list = newprops.data.toJS();
  }
  componentDidMount(){
    
    let {id} = qs.parse( this.props.location.search.slice(1))
    this.props.newProductsGETdata(id);

    let wrapper = document.querySelector('.wrapper')
    let scroll = new BScroll(wrapper,{
      click:true
    });
  }
}

const mapState = (state)=>({
    data:state.getIn(["details","data"])
})


const mapDispatch = (dispatch)=>({
  newProductsGETdata(id){
      dispatch(getNewList(id))
  },
 
})

export default connect(mapState,mapDispatch)(DetailsContainer);