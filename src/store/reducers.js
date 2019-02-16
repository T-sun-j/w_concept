import { combineReducers } from 'redux-immutable'

import { reducer as store } from '../pages/store'
 import {reducer as discover} from '../pages/discover'

export default combineReducers({
   store, 
   discover
})