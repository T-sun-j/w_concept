import styled from 'styled-components'

const MainStyled = styled.div`
    width:100%;
    margin-bottom: .15rem;
    background-color: #fff;
    height: 2.22rem;
    .newlist{
        /* overflow: scroll auto; */
        padding-left: .12rem;
        padding-right: 0;
        height: 100%;
        overflow-x:auto;
        .newlistWrap{
            width: max-content;
            height: 100%;
        }
        a{
            width: 1.15rem;
            margin-right: .12rem;
            position: relative;
            display: block;
            margin: 0 .06rem 0 0;
            overflow: hidden;
            float: left;
            background: #fff;
            border-color: #fff;
            border-style: solid;
            line-height: .18rem;
            height: 100%;
            .img{
                width: 100%;
                height: 1.53rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .title{
                clear: both;
                height: .45rem;
                font-size: 12px;
                color: #626161;
                position: relative;
                padding-top: .05rem;
                p{
                    display: block;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    width: 100%;
                }
                div{
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    width: 100%;
                }
            }
            .price{
                position: relative;
                clear: both;
                font-size: 12px;
                line-height: 14px;
                color: #626161;
                font-weight: bold;
            }
        }
    }
    
`


export {
    MainStyled,
}