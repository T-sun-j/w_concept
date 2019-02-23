import { combineReducers } from 'redux-immutable'

import { reducer as store } from '../pages/store'
 import {reducer as discover} from '../pages/discover'
 import { reducer as details } from '../pages/details'

export default combineReducers({
   store, 
   discover,
   details
})