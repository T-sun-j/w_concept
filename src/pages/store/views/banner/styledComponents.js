
import styled from 'styled-components'

const BannerStyled = styled.div`
    width:100%;
    height:3.5rem;
    /* background: #fff; */
     .bannerWrap{
         width: 100%;
         height: 100%;
         padding-bottom: .15rem;
         .bannerCon{
            width: 100%;
            height: 100%;
            .bannerWrap{
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left:0;
                float: left;
                .bannerOne{
                    width: 3.75rem;
                    height: 100%;
                    img{
                        border:none;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .spanBtn{
                position: absolute;
                left: -0.7rem;
                bottom: .06rem;
                span{
                    margin: 0 .08rem;
                    background-color: rgba(255, 255, 255, 0.9);
                    width: .08rem;
                    height: .08rem;

                }
                .swiper-pagination-bullet-active{
                    background-color:#fff;
                }
            }
         }
     }

`


export {
    BannerStyled,
}
