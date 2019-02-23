import {GET_NEWS_DATA} from "./actionTypes"
import {fromJS} from 'immutable'

 
const defaultState = fromJS({
    data: [],
    id:""
})
export default (state=defaultState, action) => {
   
    if(action.type === GET_NEWS_DATA){
      
 
        let data = state.setIn(['data'],fromJS(action.data));
     
        return data
    }
    return state
}
 