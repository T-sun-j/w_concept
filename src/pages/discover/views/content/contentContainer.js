import React, { Component } from 'react'
import { Discovercontent } from './styleComponents'
// import ContentUi from './contentUi'
// import {  Toast } from "antd-mobile";
import Immutable from 'immutable';
import { getDis } from "../../actionCreator";
import { connect } from 'react-redux';

class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstData: [],
      descriptions: [],
      isLoading: false,
      hasMore: true
    }
  }

  render() {
    return (
      <Discovercontent>
        <div>
          <ul>
            {
              firstData.map((item,index)=>{
                  return  <li>

                  </li>
                })
              
            }
          </ul>
        </div>
      </Discovercontent>
    )
  }

  componentWillReceiveProps(newProps) {
      this.firstData=newProps.discoverList.toJS()     
  }
  componentDidMount() {
    this.props.discoverGetdata()
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