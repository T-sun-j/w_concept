import React, { Component } from 'react'
import {MainStyled} from "./mainStyled"
import {connect} from "react-redux";

import {getNewList} from "../../actionCreator"
import BScroll from "better-scroll"
class NewProducts extends Component {
  
    render() {
        let {newList} = this.props;
        // console.log(newList)
      return (
         <MainStyled>
            <div className="newlist wrapper"> 
                <div className="newlistWrap content">
                    {
                        newList.toJS().map((item,index)=>{
                            return (
                                // <div>{item}</div>
                                    <a key={index}  href= {'/details?id='+item.product_id }>
                                        <div className="img"><img src={item.image_url} alt=""/></div> 
                                        <div className="title">
                                            <p>{item.brand_name}</p>
                                            <div>{item.name}</div>   
                                        </div> 
                                        <div className="price">￥{item.price}</div> 
                                       
                                    </a>
                            )
                        })
                    }
                </div>
           
            </div>
         </MainStyled>
      )
    }
    componentDidMount(){
        this.props.newProductsGETdata();

        let scroll = new BScroll('.wrapper',{
            scrollX: true,
            click: true
        })
    }
    handleClick(){

    }
}
const mapState = (state)=>({
    newList:state.getIn(["store","newsData"])
})


const mapDispatch = (dispatch)=>({
    newProductsGETdata(){
        dispatch(getNewList())
    },
   
})

export default connect(mapState,mapDispatch)(NewProducts);
  