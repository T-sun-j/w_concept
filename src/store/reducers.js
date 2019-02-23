import { combineReducers } from 'redux-immutable'

import { reducer as store } from '../pages/store'
import { reducer as details } from '../pages/details'
 

export default combineReducers({
   store,
   details
})