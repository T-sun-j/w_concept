import styled from 'styled-components'

const StoreHeader = styled.div`
    width:100%;
    height:.45rem;
    background:#fff;
    padding-left: .2rem;
    border-bottom:.01rem solid #ccc;
    position:fixed;
    top:0;
    left:0;
    z-index:10;
    .headerWrap{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        .love{
        width:.45rem;
        height:.45rem;
        padding-top:.1rem;
        position: absolute;
        right: .45rem;
        top: 0;
            img{
                width:.2rem;
                height:.2rem;
            }
        }
        .logo{
            padding-top:.1rem;
            width:.87rem;
            height:.35rem;
            position: absolute;
            left: 0;
            top: 0;
            img{
                width:1rem;
                height:.2rem;
            }
        }
        .search{
            width:.45rem;
            height:.45rem;
            padding-top:.1rem;
            position: absolute;
            right: 0;
            img{
                width:.2rem;
                height:.2rem;
            }
        }
    }
    

`


export {
    StoreHeader,
}