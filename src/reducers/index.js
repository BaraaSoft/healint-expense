import { combineReducers } from 'redux'
import {expenses,expenseCategories} from './expense.reducer'

export default combineReducers({
    expenses,
    expenseCategories
})