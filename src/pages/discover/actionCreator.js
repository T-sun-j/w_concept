import { fetch } from "whatwg-fetch";

import {
    GET_FIRST,
    GET_SECOND
} from './actionTypes'




//第一组数据
const getDis = () => {
    let action = (data) => ({
        type: GET_FIRST,
        value: data
    })
    return (dispatch) => {
        fetch("/api/content/discover?page=1&size=5&platform=M.Web", {
            method: "get",
        })
            .then(res => res.json())
            .then(data => {
                dispatch(action(data.items))
            })
    }

}

//第二组数据

const getMore = () => {
    let action = (data) => ({
        type: GET_SECOND,
        value: data
    })
    return (dispatch) => {
        fetch("/api/content/discover", {
            method: "get",
            params:{
                platform: "M.Web",
                size: 5,
                page: 27
            }
            
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch(action(data.items))
            })
           
    }

}


export {
    getDis,
    getMore
}