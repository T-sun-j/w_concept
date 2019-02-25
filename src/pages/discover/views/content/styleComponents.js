import styled from 'styled-components'


const Discovercontent = styled.div`
    width:100%;
    /* height:10000px; */
    background:#fff;
    box-sizing: border-box;
    .disWrap{
        height:1000px;
        
    }
    .discontent{
        margin-bottom:200px;
    }
    ul{
        width:100%;
        margin-top: 45px;
        
        li{
                width: 100%;
                padding: 0 12px;
            .image{
                    margin-top: 22px;
                    width: 100%;
                    height:350px;
                    border-radius: 4px;
                    background-color: #d7d7d7;
                    vertical-align: middle;
            }
            .discover_label{
                    height: 25px;
                    font-size: 13px;
                    text-align: center;
                    margin-top: 3px;
                    background-color: red;
                    color: #fff;
                    z-index: 1;
                    bottom: 46px;
                    left: -12px;
                    position: relative;
                    font-weight: 600;
                    line-height: 25px;
                    display: inline;
                    padding: 4px 25px;
            }
            .title{
                    width: 100%;
                    height: 30px;
                    font-size: 22px;
                    font-weight: 600;
                    text-align: left;
                    color: #111111;
                    margin-top: 18px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    padding: 0 10px;
            }
            .description{
                    font-size: 13px;
                    text-align: justify;
                    color: #7a7a7a;
                    margin-top: 10px;
                    padding: 0 10px;
                    letter-spacing: 2px;
            }
            ul{
                li{
                    height: 98px;
                    border-top: 1px solid #f3f3f3;
                    width: 100%;
                    .left{
                        width: 50px;
                         float: left;
                    }
                     .sub-image {
                        width: 100%;
                        margin-top: 16px;
                        vertical-align: middle;
                    }
                    .right {
                        width: 190px;
                        float: left;
                        margin-left: 12px;
                        .brand {
                            font-weight: 500;
                            color: #000000;
                            text-align: left;
                            height: 17px;
                            margin-top: 22px;
                        } 
                        .name {
                            font-size: 12px;
                            text-align: left;
                            color: #626161;
                            height: 17px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            letter-spacing: 1px;
                        }
                        .price {
                            margin-top: 4px;
                            .final-price {
                                height: 17px;
                                font-size: 12px;
                                font-weight: 500;
                                text-align: left;
                                color: #000000;
                            }
                        } 
                    }
                }
            }
        }
    }
`







export {
    Discovercontent
}