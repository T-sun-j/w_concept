import React, { Component } from 'react'
import {BannerStyled} from './styledComponents'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

export default class Banner  extends Component {
  constructor(){
    super()
    this.state = {
      bannerImg: [
        "//img01.wconceptimg.cn/ws/uploads/2019/02/w1902152abanner01-940-877.jpg!/quality/80",
        "//img01.wconceptimg.cn/ws/uploads/2019/02/w1902152abanner02-940-877.jpg!/quality/80",
        "//img01.wconceptimg.cn/ws/uploads/2019/02/w1902152abanner03-940-877.jpg!/quality/80",
        "//img01.wconceptimg.cn/ws/uploads/2019/02/19021201women-940-877.jpg!/quality/80",
        "//img01.wconceptimg.cn/ws/uploads/2019/02/19021202women-940-877.jpg!/quality/80",
        "//img01.wconceptimg.cn/ws/uploads/2019/02/19021203women-940-877.jpg!/quality/80",
        "//img01.wconceptimg.cn/ws/uploads/2018/12/34161545268278pichd.jpg!/quality/80"
      ]
    }
  }
  render() {
    return (
      <BannerStyled>
        <div className="bannerWrap">
          <div className="swiper-container bannerCon">
              <div className="swiper-wrapper bannerWrap">{this.state.bannerImg.map((item,index)=>{
                                                            return(
                                                              <div key={index} className="swiper-slide bannerOne"  >
                                                                <img src={item}/>
                                                              </div>
                                                            )
                                                          })}</div>
              <div className='swiper-pagination spanBtn'></div>
          </div>
        </div>
      </BannerStyled>
    )
  }
  componentDidMount(){
       this.initialBannerSwiper();
    }
  initialBannerSwiper =()=>{
    if(this.bannerSwiper){
        return this.bannerSwiper  //单例模式
    }
    this.bannerSwiper =  new Swiper('.bannerCon', {
            loop: true,     //循环
            autoplay:{      //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
                delay: 3000,
                disableOnInteraction: false,    //户操作swiper之后，不停止autoplay。
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,    // 允许点击跳转
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
    });
  
  }
  
  //组件的销毁
  componentWillUnmount(){
    if(this.bannerSwiper){
        this.bannerSwiper.detachEvents()
        this.bannerSwiper.destroy()
    }
  }


}
