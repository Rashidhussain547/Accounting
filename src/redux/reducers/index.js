import { combineReducers } from "redux";
import journal from './journal.reducer'
import trial from './trial.reducer'

export default combineReducers({
    journal,
    trial
})