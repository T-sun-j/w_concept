import React, { Component } from 'react'

import ContentUi from './contentUi'
// import {  Toast } from "antd-mobile";
import { getDis } from "../../actionCreator";
import { connect } from 'react-redux';

class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstData: [],
      descriptions: [],
      // descriptions:[],
      // descriptions:[],
      isLoading: false,
      hasMore: true
    }
  }

  render() {
    // console.log(this.firstData)
    return (
      <ContentUi></ContentUi>
    )
  }
  componentDidMount() {
    this.props.discoverGetdata()
    // this.setState({
    //   firstData: this.props.discoverList._tail.array
    // }, () => {
    //   console.log(this.firstData)
    // })

    //   componentDidUpdate() {




  }
}

const mapStateToProps = (state) => ({
  discoverList: state.getIn(["discover", "discoverList"])
})
const mapDispatchToProps = (dispatch) => ({
  discoverGetdata() {
    dispatch(getDis())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer)