import styled from 'styled-components'

const GuessMainStyled = styled.div`
    width: 100%;
    overflow: hidden;
    background: #f8f8f8;
    padding-bottom: .4rem;
    padding-top: .22rem;
    height:3.06rem;
`
const GuessWrap = styled.div`
    height: 100%;
    width: 100%;
    padding: 0 .15rem;
    a{
        display: block;
        height: 1.16rem;
        width: 100%;
        background: #fff;
        position: relative;
        div{
            color: #626161;
        }
        div:nth-child(1){
            position: absolute;
            width: .86rem;
            height:1.16rem;
            left: 0;
            top: 0;
            img{
                height: 100%;
                width: 100%;
            }
        }
        div:nth-child(2){
            position: absolute;
            left: 1.2rem;
            top: 0.05rem;
            white-space: normal;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 12px;
            position: relative;
            padding-top: 5px;
        }   
        div:nth-child(3){
            position: absolute;
            left: 1.2rem;
            top: 0.08rem;
            white-space: normal;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 12px;
            position: relative;
            padding-top: 5px;
        }
        div:nth-child(4){
            position: absolute;
            left: 1.2rem;
            top: 0.16rem;
            font-size: 14px;
            position: relative;
            padding-top: 5px;

            .delPrice{
                font-size: 10px;
                color: #ccc;
                text-decoration: line-through;
                margin-left: 3px;
            }
        }
    }
    a:nth-child(1){
        margin-bottom: .12rem
    }
`



export {
    GuessMainStyled,
    GuessWrap
}