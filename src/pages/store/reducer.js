import {GET_NEWS_DATA} from "./actionTypes"
import { fromJS } from 'immutable'

const defaultState = fromJS({
   newsData: []
})

export default (state=defaultState, action) => {
   
  if(action.type === GET_NEWS_DATA){
    let newsData = state.setIn(['newsData'],fromJS(action.newsData));
    // console.log(newsData);
    return newsData
  }

    return state
}
 