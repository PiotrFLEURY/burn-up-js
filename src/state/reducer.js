
import { combineReducers } from 'redux'

const initialState = {
    history: [0],
    data: [0]
}

function values(state = initialState, action) {
    switch (action.type) {
        case 'ADD_VALUE':
            return Object.assign({}, state, {
                history: [
                    ...state.history,
                    action.value
                ],
                data: [
                    ...state.data,
                    action.value + state.data[state.data.length - 1]
                ]
            })
        case 'REMOVE_FROM_HISTORY':
            state.history.splice(state.history.indexOf(action.value), 1)
            return Object.assign({}, state, {
                history: [
                    ...state.history
                ]
            })
        default:
            return state
    }
}

export default combineReducers({
    values
})