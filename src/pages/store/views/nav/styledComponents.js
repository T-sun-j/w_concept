
import styled from 'styled-components'

const NavHeader = styled.div`
    width:100%;
    height:.45rem;
    margin-top: .45rem;
    background:#fff;
    border-bottom:.01rem solid #ccc;
    position:fixed;
    top:0;
    left:0;
    z-index: 10;
    .navWrap{
        width: 100%;
        height: 100%;
        .content{
            width: 100%;
            height: 100%;
            padding: 0 .2rem;
            position: relative;
            overflow: hidden;
            .contentTop{
                width: 4.08re,;
                height: 100%;
                ul{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    li{
                        width: auto;
                        margin-right: .2rem;
                        font-size: .16rem;
                        color: #9e9e9e;
                    }
                }
            }
        }
        .navRight{
            position: absolute;
            top: 0;
            right: 0;
            z-index: 3;
            width: .31rem;
            height: .45rem;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: .09rem;
            background-image: url(//img03.wconceptimg.cn/skin/frontend/wcc/default/images/arrow/bottom.png);
        }
        
    }
    

`


export {
    NavHeader,
}
