import {fetch} from "whatwg-fetch";
import {GET_NEWS_DATA} from "./actionTypes";


//取第一组数据
export const newsListDatasync = (newsData) => {
    return {
      type: GET_NEWS_DATA,
      newsData: newsData
    }
}



export const getNewList = ()=>{

    let action = (data)=>({
        type: GET_NEWS_DATA,
        // value:data
    })

    return (dispatch)=>{
        fetch("/api/api/rest/wcc/productsv2/new/3")
        .then(res=>res.json())
        .then(data => {
            console.log(data)
            dispatch(newsListDatasync(data.items))
        })
    }
}

 