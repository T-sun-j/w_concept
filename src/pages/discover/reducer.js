import Immutable from 'immutable';
import {
    GET_FIRST
} from './actionTypes'


const defaultState = Immutable.Map({
    discoverList: Immutable.List([])
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_FIRST:
            let firstListState = state.updateIn(["discoverList"], (x) => x.concat(action.value))
            return firstListState;
        default:
            break;
    }
    // console.log(state)
    return state;
}