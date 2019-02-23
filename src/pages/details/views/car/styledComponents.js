import styled from 'styled-components'

const CartStyled = styled.div`
    width:100%;
    height:56px;
    padding: 0;
    border-top: 1px solid #f3f3f3;
    position: fixed;
    bottom: 0;
    display: flex;
    background:#fff;
  
    a{
        width:.75rem;
        height:100%;
        i{
            display: block;
            background-size: 100% 100%;
            width: 17px;
            height: 18px;
            text-indent: -9999px;
            margin: 10px auto 0;
            position: relative;
        }
        div{
            line-height: 14px;
            font-size: 10px;
            text-align: center
            color: #9e9e9e;
        }
    }
    a:nth-child(1):after {
        content: " ";
        position: absolute;
        top: 50%;
        margin-top: -16px;
        right: 0;
        width: 1px;
        height: 32px;
        background: #f3f3f3;
      
    }
    a:nth-child(1){
        i{
            background: url(assets/images/cart.png) no-repeat;
        }
    }
    a:nth-child(2){
        i{
            background: url(../../../../assets/images/wechat.png) no-repeat;
            /* background: pink; */
        }
    }
    .cart_div{
        flex:1;
        background:#fff;
        z-index: 10000;
        a{
            display: inline-block;
            background: #fd5158;
            color: #fff;
            line-height: 56px;
            width: 100%;
            text-align: center;
            font-size: 16px;          
        }
    }
`


export {
    CartStyled,
}
