import React, { Component } from 'react'
import {Discovercontent} from './styleComponents'
import {fetch} from "whatwg-fetch";
// import {  Toast } from "antd-mobile";


export default class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData:[],
      descriptions:[],
      // descriptions:[],
      // descriptions:[],
      isLoading:false,
      hasMore:true
    }
  }
  
  render() {
    return (
      <Discovercontent>
          <div></div>
      </Discovercontent>
    )
  }
  async componentDidMount(){
    // Toast.loading("loading...", null);
    await fetch("/api/content/discover?page=5&size=5&platform=M.Web",{
      method:"get",
    })
    .then(res=>res.json())
    .then(result=>{
      this.listData = result.items;
    })

    this.listData.map((e,item) =>{
      console.log(e)
      return this.state.descriptions.push(e.descriptions)
    })
    this.listData.map((e, item) => {
      console.log(e)
      return this.state.descriptions.push(e.descriptions)
    })
  }

}
