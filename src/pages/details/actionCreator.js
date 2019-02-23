import {fetch} from "whatwg-fetch";
import {GET_NEWS_DATA} from "./actionTypes";


//取第一组数据
export const newsListDatasync = (data) => {
    return {
      type: GET_NEWS_DATA,
      data: data
    }
}



export const getNewList = (id)=>{
    let url = "/api/m/v2/product/app/"+id+"?showprefix=1";
    let action = (data)=>({
        type: GET_NEWS_DATA,
    })
// /https://m.wconcept.cn/m/v2/product/app/722012?showprefix=1

    return (dispatch)=>{
        fetch(url)
        .then(res=>res.json())
        .then(data => {
            // console.log(data)
            dispatch(newsListDatasync(data))
        })
    }
}

 