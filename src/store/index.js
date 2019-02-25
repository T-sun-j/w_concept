import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import Immutable from 'immutable'
import reducers from './reducers'
// const initialState = Immutable.Map();
 
let store;
 
store = createStore(reducers,applyMiddleware(thunk))
    

export default store;