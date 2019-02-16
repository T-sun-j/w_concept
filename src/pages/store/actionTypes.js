// GET_NEWLIST
import Immutable from "immutable";

const defaultState = Immutable.Map({
    movieList:Immutable.List([]) 
})




export default (state = defaultState, action) => {
   console.log(action.type)
    switch (action.type) {
        // case "GET_NEWLIST":
        //     let movieListState = state.updateIn(["movieList"],(x)=>x.concat(action.value));
        //     return movieListState;
       
           
    }
    return state;
}