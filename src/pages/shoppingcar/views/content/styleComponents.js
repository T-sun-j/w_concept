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
               
            }
        
        }
       
    }
`

export {
    CarContent
}