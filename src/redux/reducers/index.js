import { combineReducers } from "redux";
import journal from './journal.reducer'
import trial from './trial.reducer'
import income from './income.reducer'
import balance from './balanceSheet.reducer'
import ownerEquity from './ownerequity.reducer'

export default combineReducers({
    journal,
    trial,
    income,
    balance,
    ownerEquity
})