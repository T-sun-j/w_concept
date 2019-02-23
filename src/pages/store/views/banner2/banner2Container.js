import React, { Component } from 'react'
import { Banner2Styled } from './styledComponents'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

export default class Banner2 extends Component {
  constructor() {
    super()
    this.state = {
      banner2Img: [
        "//img01.wconceptimg.cn/ws/uploads/2019/02/190212bbanner01women.jpg!/quality/80",
        "//img01.wconceptimg.cn/ws/uploads/2019/02/w190215bbanner01-836-300.jpg!/quality/80",
      ]
    }
  }
  render() {
    return (
      <Banner2Styled>
        <div className="banner2Wrap">
          <div className="bannerw2">
            <div className="swiper-container bannerCon2" >
              <div className="swiper-wrapper bannerWrap2">{this.state.banner2Img.map((item, index) => (
                <div key={index} className="swiper-slide bannerOne2"  >
                  <img alt="" src={item} />
                </div>
              ))}</div>
            </div>

          </div>
        </div>
      </Banner2Styled>
    )
  }
  componentDidMount() {
    this.initialBannerSwiper();
  }
  initialBannerSwiper = () => {
    if (this.banner2Swiper) {
      return this.banner2Swiper  //单例模式
    }
    this.banner2Swiper = new Swiper('.bannerCon2', {
      loop: true,     //循环
      autoplay: false    //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了

    });

  }

  //组件的销毁
  componentWillUnmount() {
    if (this.banner2Swiper) {
      this.banner2Swiper.detachEvents()
      this.banner2Swiper.destroy()
    }
  }


}
