import {ActionType} from '../actions';
import {expensesData as expensesMockData} from '../util/mockData'

const InitExpenseCategories = [
    {id:1,title:"Groceries",color:"#f56a00"},
    {id:2,title:"Utilities",color:"#7265e6"},
    {id:3,title:"Transportation",color:"#8b0000"},
    {id:4,title:"Healthcare",color:"#355e3b"},
    {id:5,title:'Household',color:'#b78727'},
    {id:6,title:'Entertainment',color:'#40826d'},
    {id:7,title:'Housing',color:'#ffbf00'}
]


export const expenses = (state = [...expensesMockData], action) => {
    switch (action.type) {
        case ActionType.AllExpenses:
            // console.log("payload-->Reducer:",action.payload)
            return [...state,action.payload]
        default:
            return state
    }
}
export const expenseCategories = (state = [...InitExpenseCategories], action) => {
    switch (action.type) {
        case ActionType.AllExpenseCategories:
            // console.log("payload-->Reducer:",action.payload)
            return [...state,action.payload]
        default:
            return state
    }
}


