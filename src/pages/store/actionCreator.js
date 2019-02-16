import {fetch} from "whatwg-fetch";

export const getNewList = ()=>{

    let action = (data)=>({
        type:"GET_NEWLIST",
        // value:data
    })

    return (dispatch)=>{
        fetch("/api/api/rest/wcc/productsv2/new/3")
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            // dispatch(action(data.items))
        })
    }
}

 