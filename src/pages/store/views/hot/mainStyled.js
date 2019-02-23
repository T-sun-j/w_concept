import styled from 'styled-components'

const MainStyled = styled.div`
    width:100%;
    background-color: #fff;
    height: 3.4rem;
    padding: 0 2%;
    a{
        display: inline-block;
        float: left;
        width: 25%;
        text-align: center;
        font-size: 11px;
        padding-bottom: .15rem;
        div{
          
            height: 0.73rem;
            width: 100%;
            /* background: pink; */
            img{
                /* width: 100%; */
                height: 100%;
            }
        }
        span{
            display: block;
            line-height: 20px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 100%;
            padding-top: 5px;
            color: #9e9e9e;
            font-size:11px;
        }
    }
`


export {
    MainStyled,
}