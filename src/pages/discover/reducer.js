import Immutable from 'immutable';
import {
    GET_FIRST,
    GET_SECOND
} from './actionTypes'


const defaultState = Immutable.Map({
    discoverList: Immutable.List([])
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_FIRST:
            let firstListState = state.updateIn(["discoverList"], (x) => x.concat(action.value))
            return firstListState;
        case GET_SECOND:
            let moreListState = state.updateIn(["discoverList"], (x) => x.concat(action.value))
            return moreListState;
        default:
            break;
    }
    return state;
}