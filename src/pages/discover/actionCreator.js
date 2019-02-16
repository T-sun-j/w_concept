import { fetch } from "whatwg-fetch";

import {
    GET_FIRST
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






export {
    getDis
}