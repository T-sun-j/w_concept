import styled from "styled-components"

const CarHeader=styled.div`
.header{
    width:100%;
    height:45px;
    background:#fff;
    font-size:16px;
    position: fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    z-index:9;
    span{
        display: block;
        margin-left:96px;
    }
    p{
        display:block;
        padding-left:33px;
        
    }
    .header-w{
        display: block;
        margin-right:36px;
    }
}
   
`
export {
    CarHeader
}