import React, { Component } from 'react'
import { Discovercontent } from './styleComponents'
// import ContentUi from './contentUi'
// import {  Toast } from "antd-mobile";
// import Immutable from 'immutable';
import { DetailsContainer as details} from "../../../details"
import {Link, Route} from 'react-router-dom'
import { getDis, getMore } from "../../actionCreator";
import { connect } from 'react-redux';
import { getPic } from '../../../../components/common/getPic'
import BScroll from "better-scroll";




class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstData: [],
      descriptions: [],
      // isLoading: false,
      // hasMore: true,
      productId:""
    }
  }

  render() {
    return (
      <Discovercontent>
        <div ref="wrapper" className = "wrapper disWrap">
          <ul className="content discontent">
            {this.state.firstData.map((item, index) => {
              return (
                <li key={index} model_id={item.model_id} >
                  <img src={getPic(item.x2_imge_url)} alt="" className="image" onClick={this.handleToDet.bind(this, item.model_id)}/>
                <div className="discover_label">{item.label}</div>
                  <div className="ti
                  tle" onClick={this.handleToDet.bind(this, item.model_id)}>{item.title}</div>
                  <div className="description" onClick={this.handleToDet.bind(this, item.model_id)}>{item.descriptions}</div>
                <ul>
                  {
                    this.state.descriptions.map((item, index) => {
                      return (
                        <li key={index} data_id={item.product_id} onClick={this.handleToDetails.bind(this, item.product_id)}>
                          <Link to={"/details?id="+item.product_id}>                   
                          <div className="left">
                            <img src={item.thumbnail} className="sub-image" alt="" />
                          </div>
                          <div className="right">
                            <div className="brand">{item.brand}</div>
                            <div className="name">{item.title}</div>
                            <div className="price">
                              <div className="final-price">￥{item.price_value}
                              </div>
                            </div>
                          </div>
                           </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
              )
            })
            }
          </ul>
        </div>
      </Discovercontent>
    )
  }

  componentWillReceiveProps(newProps) {
    this.state.firstData = newProps.discoverList.toJS()
    this.state.firstData.map((item, index) => {
      this.state.descriptions = item.product_sources[0]
    })
    this.state.descriptions = this.state.descriptions.products
    console.log(this.state.firstData)
    // this.state.productId = this.state.descriptions.products
  
    //滑动获取数据
    this.scroll&&this.scroll.finishPullUp();
  }
  componentDidMount() {
    // Toast.loading("loading...", null);
    this.props.discoverGetdata()
    // Toast.hide();
  }
  componentDidUpdate(){
    if(!this.scroll){
      this.scroll = new BScroll(this.refs.wrapper,{
        pullUpLoad:true,
        click:true,
        bounce: true,
      });
      this.scroll.on("pullingUp",()=>{
        this.props.discoverGetDataMore()
      })
    }
  }

  handleToDetails(data_id){
   
      //获取id，跳转详情页
      this.setState({
        productId: data_id
      }, () => {
          console.log(this.state.productId)
      })
 
  }
  handleToDet(model_id) {

    //获取id，跳转详情页
    this.setState({
      productId: model_id
    }, () => {
      console.log(this.state.productId)
    })

  }







}

const mapStateToProps = (state) => ({
  discoverList: state.getIn(["discover", "discoverList"])
})
const mapDispatchToProps = (dispatch) => ({
  discoverGetdata() {
    dispatch(getDis())
  },
  discoverGetDataMore(){
    dispatch(getMore())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer)