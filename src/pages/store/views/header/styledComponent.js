import styled from 'styled-components'



const HeadSwiper = styled.div `
    width:100%;
    height: .45rem;
    a{
        display: block;
        height:.45rem;
        width:.45rem;
        .icon-wconcept{
            width: .87rem;
            height: .45rem;
            margin-left: .2rem;
            background-image: url(../images/logo/wconcept.png);
            background-repeat: no-repeat;
            background-size: .87rem .19rem;
            background-position: center center;
            display: block;
       }
    }
`


export {
    HeadSwiper
}