import styled from 'styled-components'

const TabStyled = styled.div`
    width:100%;
    height: .9rem;
    padding: .15rem 0 0 0;
    div{
        /* width:100%;
        height: 100%;
        background: pink; */
    }
    display: flex;
    .tabOne{
        flex:1;
        height: .61rem;
        
        a{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center; 
            .icon{
                display: flex;
                width: .45rem;
                height: .45rem;
 
                img{
                    width: 100%;
                    height: 100%;
                  
                }
            }
            .txt{
                display: block;
                font-size: 12px;
                text-align: center;
                color: #626161;
                padding-top: 0;
                line-height: 16px;
            }
        }
    }
`

export {
    TabStyled,
}
