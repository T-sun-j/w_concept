import styled from "styled-components"
const CarContent = styled.div`
    .centerBox{
        width:100%;
        height:100%;
            display:flex;
            justify-content: space-between;
            align-items:center;
        .center{
            width:100%;
            height:100%;
            flex-direction:column;
            margin:60px 8px 22px 8px;
            .back{
                height:40px;
                text-align:center;
                line-height:40px;
                font-size:11px;
                color:#9e9e9e;
            }
            .main{
               .option{
                   width:220px;
                position:relative;
                border:1px solid #d8d8d8;
                padding-left: 10px;
                padding-right: 24px;
                color: #626161;
                font-size: 12px;
                line-height: 26px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                margin-bottom: 10px;
                span{
                    margin-left:6px;
                    vertical-align: baseline;
                }
               .ico{
                    position: absolute;
                    right: 10px;
                    top:0;
                    width: 8px;
                    height: 8px;
                    /* background: url(https://img03.wconceptimg.cn/static/a.m/images/go.to/go.to.black.png) no-repeat right center; */
                    background-size: 8px;
                    img{
                        width:100%;
                    }
               }
                   
               }
            }
        
        }
       
    }
    
`
const Sum = styled.div`

        position:fixed;
        bottom:45px;
        left:0;
        width:100%;
        height:55px;
        background:#fff;
        z-index:99;
        display:flex;
        justify-content:space-between;

        .end{
            width:100px;
            height:100%;
            background:#fd5158;
            border:0;
            color:#ffffff;
            font-size:14px;
        }
  
`
const MaskContent = styled.div`
    width:100%;
    position: fixed;
    z-index: 101;
    top: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    .updateoption {
        position: fixed;
        z-index: 102;
        bottom: 0;
        left: 0;
        width: 100%;
        height:470px;
        background: #fff;
        overflow: scroll;
        .updateoptionheader {
            text-align: right;
            .updateoptionclose {
            display: inline-block;
            width: 10px;
            height: 10px;
            background-size: 100% 100%;
            margin-top: 12px;
            margin-right: 12px;
            img{
                width:100%;
            }
        }
            
        }
        .product-image {
            float: left;
            width: 60px;
            height: 80px;
            margin-left: 20px;
            img{
                width:100%; 
            }
        }
        .product-info {
            padding-left: 93px;
            padding-right: 20px;
            height: 93px;
            border-bottom:1px solid #ccc;
            .name {
                color: #626161;
                font-size: 12px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                margin-bottom: 10px;
            }
            .currentoptions {
                background: #f8f8f8;
                line-height: 28px;
                font-size: 10px;
                color: #626161;
                padding: 0 8px;
                margin-bottom: 10px;
                .stock_status {
                    float: right;
                    color: #fd5158;
                    font-size: 10px;
                }
                .currentoptions .options {
                    padding-right: 30px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
            }
        }
        .chooseoptions {
            padding: 0 20px 30px 20px;
            dd {
                margin-top: 7px;
                *zoom: 1;
                button{
                    width:80px;
                    height:32px;
                    margin-left:8px;
                }
            }
            dt{
                margin-top:20px;
            }
            .jian, .jia {
                border: 1px solid #d9d9d9;
                color: #000;
                width: 30px;
                line-height: 28px;
                float: left;
                text-align: center;
                line-height: 28px;
                margin-right: 7px;
                font-size: 18px;
            }
            .qty {
                width: 90px;
                line-height: 28px;
                border: 1px solid #d9d9d9;
                text-align: center;
                color: #000;
                float: left;
                margin-right: 7px;
                padding: 0;
            }
        }
        .updatebtn {
            
            button {
                background: #4a4a4a;
                text-align: center;
                color: #fff;
                font-size: 14px;
                line-height: 50px;
                width: 100%;
                border: 0;
                border-radius: 0;
                margin-top:68px;
            }
        }
        
    }

}


`


// const MaskContent = styled.div`
//     padding-top:150px;
//     .my-drawer {
//     position: relative;
//     overflow: auto;
//     -webkit-overflow-scrolling: touch;
//     }
//     .my-drawer .am-drawer-sidebar {
//     background-color: #fff;
//     overflow: auto;
//     -webkit-overflow-scrolling: touch;
//     }
//     .my-drawer .am-drawer-sidebar .am-list {
//     width: 330px;
//     padding: 0;
//     }
// `
export {
    CarContent,
    Sum,
    MaskContent
}