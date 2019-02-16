import React, { Component } from 'react'
import {TabStyled} from './styledComponents'

export default class Tab  extends Component {
  constructor(){
    super();
    this.state = {
        nav: [
          {
            "style": "https://img01.wconceptimg.cn/ws/uploads/2018/01/1photoreview2.png",
            "text": "买家秀"
          },
          {
            style: "https://img01.wconceptimg.cn/ws/uploads/2018/01/2celeb2.png",
            text: "明星话题"
          },
          {
            style: "https://img01.wconceptimg.cn/ws/uploads/2018/01/3newarrivals2.png",
            text: "新品/热销"
          },
          {
            style: "https://img01.wconceptimg.cn/ws/uploads/2018/01/4sale2.png",
            text: "折扣"
          },
          {
            style: "https://img01.wconceptimg.cn/ws/uploads/2018/01/5womenkol2.png",
            text: "博主控"
          },
        ]       ,
 
    }
  }
  render() {
    return (
      <TabStyled>
         
        {
          this.state.nav.map((item,index)=>{
              return   (
                    <div className="tabOne" key={index} >
                        <a>
                        {/* <span className="icon" style={{background:url(item.style)}}></span> */}
                          <span className="icon"><img src={item.style}/></span>
                          <span className="txt">{item.text}</span>
                        </a>
                    </div>
              )  
             
              
          })
        }
      </TabStyled>
    )
  }
  
}
