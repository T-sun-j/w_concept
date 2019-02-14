import React, { Component } from 'react'
import {Discovercontent} from './styleComponents'
import {fetch} from "whatwg-fetch";
import {  Toast } from "antd-mobile";


export default class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListData:[],
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
  componentDidMount(){
    // Toast.loading("loading...", null);
    fetch("/api/content/discover?page=1&size=5&platform=M.Web",{
      method:"get",
      // headers: {
      //   "Content-Type": "application/json;charset=UTF-8"
      // },
      // body:JSON.stringify({
      //   page: "1",
      //   size: "5",
      //   platform: "M.Web",
      // })
    })
    .then(res=>res.json())
    .then(result=>{
        console.log(result)
    })
  }
}
