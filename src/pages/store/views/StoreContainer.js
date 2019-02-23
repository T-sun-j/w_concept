import React, { Component,Fragment } from "react";
import { connect } from "react-redux";
import  Header  from "./header/headerContainer";
import Nav from "./nav/navContainer"
import Banner from "./banner/bannerContainer"
import Banner2 from "./banner2/banner2Container"
import Blank from "./blank/blankContainer"
import Tab from "./newsTab/tabContainer"
import {StoreMain} from "./styledComponent";
//home mian
import GoodList from "./goodlist/goodlistContainer"
import GuessLikeContainer from "./guesslike"
import NewProductsContainer from "./newProducts"
import HotContainer from "./hot"
import StarTalkContainer from "./startalk"

const mapState = state => {
  return {
 
  };
};

const mapDispatch = dispatch => {
  return {
    
  };
};

class StoreContainer extends Component {
 
  render() {
    return (
      <Fragment>
            <Header/>
            <StoreMain>
                <Blank/>
                <Nav/>
                <Banner/>
                <Tab/>
                <Banner2/>
                <GoodList/>
                <GuessLikeContainer/>
                <NewProductsContainer/>
                <HotContainer/>
                <StarTalkContainer/>
            </StoreMain>
      </Fragment>
    )
  }
  componentDidMount() {
    
  }
 
 
}

export default connect(
  mapState,
  mapDispatch
)(StoreContainer);
