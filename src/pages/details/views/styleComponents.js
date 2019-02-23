
import styled from 'styled-components'

const DetailStyled = styled.div`
    width:100%;
    /* height:5255px ; */
    background: #fff;
    .detail_imgAll{
        /* width:100%; */
        height: 5rem;
        display: flex;
        div{
            width:100%;
            height: 100%;
            flex-shrink: 0;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .detail_message{
        margin: 0 12px;
        padding: 18px 0 25px 0;
        border-bottom: 1px solid #d9d9d9;
        .price{
            font-size: 14px;
            font-weight: normal;
            line-height: 25px;
            span{
                font-size: 24px;
                color: #000;
                line-height: 26px;
                font-weight: bold;
            }
          
        }
        .name{
            margin-top: 14px;
            font-size: 15px;
            color: #626161;
            line-height: 21px;
            div{
          
                font-size: 16px;
                color: #000;
                line-height: 19px;
                font-weight: bold;
            }
        }
        .ziying{
            color: #9e9e9e;
            font-size: 12px;
            line-height: 17px;
            margin-top: 4px;
        }
    }
    .detail_send{
        padding: 12px;
        height: 1rem;
        width: 100%;
        .title{
            height:.35rem;
            width: 100%;
            padding-bottom: 10px;
            font-size: 18px;
            line-height: 25px;
            color: #000;
            font-weight: bold;
        }
        .shop{
            font-size: 14px;
            color: #333333;
            line-height: 1.5;
        }
    }

`


export {
    DetailStyled,
}
