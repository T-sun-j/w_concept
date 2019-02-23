import React, { Component } from 'react'
import {MainStyled} from "./mainStyled"

 
class HotMain extends Component {
    constructor(){
        super();
        this.state = {
            hotList: [
                {
                    name:"大衣",
                    src:"//img01.wconceptimg.cn/ws/uploads/2018/10/1180821women2depthcateicon22130178.jpg"
                },
                {
                    name:"夹克",
                    src:"//img01.wconceptimg.cn/ws/uploads/2018/10/2181023women2depthcateicon22130178.jpg"
                },
                {
                    name: "裙装",
                    src:"//img01.wconceptimg.cn/ws/uploads/2018/10/3181023women2depthcateicon22130178.jpg"
                },
                {
                    name:"针织",
                    src:"//img01.wconceptimg.cn/ws/uploads/2018/10/4180821women2depthcateicon22130178.jpg"
                },
                {
                    name:"卫衣",
                    src:"//img01.wconceptimg.cn/ws/uploads/2018/10/5180821women2depthcateicon22130178.jpg"
                },
                {
                    name:"裤装",
                    src:"//img01.wconceptimg.cn/ws/uploads/2018/10/6180821women2depthcateicon22130178.jpg"
                },
                {
                    name:"靴子",
                    src:"//img01.wconceptimg.cn/ws/uploads/2018/10/xiaoxiaoxiao.jpg"
                },
                {
                    name:"单肩包",
                    src:"//img01.wconceptimg.cn/ws/uploads/2018/10/8180821women2depthcateicon22130178.jpg"
                },
                {
                    name:"帽子",
                    src:"//img01.wconceptimg.cn/ws/uploads/2018/10/9180821women2depthcateicon22130178.jpg"
                },
                {
                    name:"时装鞋",
                    src:"//img01.wconceptimg.cn/ws/uploads/2018/10/10180821women2depthcateicon22130178.jpg"
                },
                {
                    name:"耳环/耳钉",
                    src:"//img01.wconceptimg.cn/ws/uploads/2018/10/3x180821xiao.jpg"
                },
                {
                    name:"休闲鞋",
                    src:"//img01.wconceptimg.cn/ws/uploads/2018/10/12180821women2depthcateicon22130178.jpg"
                },
            ]
        }
    }
    render() {
        let {hotList} = this.state;
      return (
         <MainStyled>
             {
                 hotList.map((item,index)=>{
                     return (
                        <a href="##" key={index}>
                            <div><img src={item.src} alt=""/></div>
                            <span>{item.name}</span>
                        </a>
                     )
                 })
             }
           
         </MainStyled>
      )
    }
    componentDidMount(){
        
    }
 
}
 
export default HotMain;
  