import styled from 'styled-components'

const MainStyled = styled.div`
    width:100%;
    margin-bottom: .15rem;
    height: 2.36rem;
    a{
        display: block;
        width: 100%;
        height: 1.8rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .desc{
        font-size: 14px;
        color: #7a7a7a;
        margin: 20px 0;
        padding: 0 12px;
        width: 100%;
        line-height: 18px;
        max-height: .36rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    
`


export {
    MainStyled,
}