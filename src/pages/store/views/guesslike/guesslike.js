import React, { Component } from 'react'
import {GuessMainStyled,GuessWrap} from "./GuessStyled"
  
export default class GoodList extends Component {
 
  render() {
    return (
      <GuessMainStyled>
          <GuessWrap>
                <a href="##">
                    <div>
                        <img alt="" src="//img01.wconceptimg.cn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/S/i/Simg_15391608528253_l.jpg!/fw/230"/>
                    </div>
                    <div>NANAWANG</div>
                    <div>WHO CARES 六色口袋连帽卫衣</div>
                    <div>
                        <span className="=nowPrice">￥1,408</span>
                        <span className="delPrice">￥2,012</span>
                    </div>
                </a>
                <a href="##">
                    <div>
                        <img alt="" src="//img01.wconceptimg.cn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/S/i/Simg_15391608528253_l.jpg!/fw/230"/>
                    </div>
                    <div>NANAWANG</div>
                    <div>拼色羊羔毛外套</div>
                    <div>
                        <span className="=nowPrice">￥1,408</span>
                        <span className="delPrice">￥2,012</span>
                    </div>
                </a>
          </GuessWrap>
      </GuessMainStyled>
    )
  }
}
