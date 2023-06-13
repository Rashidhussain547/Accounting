import axios from "axios";
import { ADD_JOURNAL_ENTRY_ERROR,ADD_JOURNAL_ENTRY_REQUEST,ADD_JOURNAL_ENTRY_SUCCESS } from "./type";



export const addJournalEntry = (data) => (dispatch) => {

    dispatch({ type: ADD_JOURNAL_ENTRY_REQUEST});
    return axios({
        method: 'POST',
        url: `http://localhost:9000/v1/journal/journal`,
        data: data
    })
        .then((response) => {
            return dispatch({
                type: ADD_JOURNAL_ENTRY_SUCCESS,
                payload: response.data,
            });
        })
        .catch((error) => {
            return dispatch({
                type: ADD_JOURNAL_ENTRY_ERROR,
                payload: error.response,
            });
        });
};