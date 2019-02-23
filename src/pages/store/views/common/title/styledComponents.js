import styled from 'styled-components'

const TitleStyled = styled.div`
    width: 100%;
    height:.65rem;
`
const TitleWrap = styled.div`
        width: 100%;
        height: 100%;
        padding-left: .65rem;
        padding-right: .65rem;
        line-height: .65rem;
        text-align: center;
        font-size: 15px;
        font-weight: bold;
        position: relative;
        a{
            position: absolute;
            right: 12px;
            content: " ";
            width: 30px;
            height: 65px;
            top: 0;
            background: url(//img03.wconceptimg.cn/skin/frontend/wcc/default/images/2017/homepagev4/group8Copy2_2x.png) no-repeat center center;
            background-size: 75%;
        }
        .titleSpan{
            position: relative;
            display: inline-block;
            max-width: 100%;
            span{
                display: block;
                color: #111111;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                width: 100%;
            }
        }
        .titleSpan:before{
            left: -39px;
            position: absolute;
            top: 50%;
            display: inline-block;
            height: 1px;
            width: 25px;
            background: #111111;
            content: ' ';
            font-size: 0px;
            line-height: 0px;
        }
        .titleSpan:after{
            right: -39px;
            position: absolute;
            top: 50%;
            display: inline-block;
            height: 1px;
            width: 25px;
            background: #111111;
            content: ' ';
            font-size: 0px;
            line-height: 0px;
        }
`
 
export {
    TitleStyled,
    TitleWrap,
}