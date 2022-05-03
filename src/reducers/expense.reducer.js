import {ActionType} from '../actions'

export const expenses = (state = [], action) => {
    switch (action.type) {
        case ActionType.AllExpenses:
            console.log("payload-->Reducer:",action.payload)
            return action.payload
        default:
            return state
    }
}