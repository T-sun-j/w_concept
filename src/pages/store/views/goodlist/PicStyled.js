import styled from 'styled-components'

const PicStyled = styled.div`
    width:100%;
    height:3.32rem;
    background-color: pink;
    table{
        width: 100%;
        height: 100%;
        tr{
            .goods-1{
                background: gray;
                width: 64.7%;
                border-right: 4px solid #fff;
               
            }
            .goods-2{
                background: orange;
                width: 32.26%;
                vertical-align: top;
                height: 49%;
            }
            .goods-3{
                border-top: 4px solid #fff;
                background: blue;
                width: 32.26%;
                vertical-align: bottom;
                height: 49%;
                /* margin-top: .1rem; */
            }
            td{
                a{
                    position: relative;
                    display: block;
                    /* margin: 0 6px 0 0; */
                    overflow: hidden;
                    float: left;
                    background: #fff;
                    line-height: 18px;
                    width: 100%;
                    height: 100%;
                    div:nth-child(1){
                        position: absolute;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    div:nth-child(2){
                        position: absolute;
                        bottom: .21rem;
                        font-size: 12px;
                        color: #fff;
                        padding: 6px 10px 0;
                        width: 100%;
                        height: .21rem;
                        line-height: .18rem;
                        overflow: hidden;
                        background: rgba(0, 0, 0, 0.35);
                    }
                    div:nth-child(3){
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        height: .21rem;
                        line-height: .21rem;
                        overflow: hidden;
                        padding: 0px 10px 6px 10px;
                        background: rgba(0, 0, 0, 0.35);
                        color: #fff;

                        .nowPrice{
                            font-weight: bold;
                            font-size: .11rem;
                        }
                        .delPrice{
                            font-size: .1rem;
                            padding-left: .05rem;
                            text-decoration: line-through;
                            margin-left: 3px;
                        }
                    }
                }
            }
        }
    }
`


export {
    PicStyled,
}