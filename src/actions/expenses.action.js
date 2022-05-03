import actionType from './actionType'


export const addExpense = (item)=> async (dispatch,getState)=>{
    dispatch({payload:item,type:actionType.AllExpenses})
}