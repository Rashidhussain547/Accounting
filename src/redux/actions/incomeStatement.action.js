import axios from "axios";
import {  GET_INCOME_STATEMENT_ERROR,GET_INCOME_STATEMENT_REQUEST,GET_INCOME_STATEMENT_SUCCESS} from "./type";



export const getIncomeStatement = () => (dispatch) => {

    dispatch({ type: GET_INCOME_STATEMENT_REQUEST});
    return axios({
        method: 'POST',
        url: `http://localhost:9000/v1/journal/incomeStatement`
    })
        .then((response) => {
            return dispatch({
                type: GET_INCOME_STATEMENT_SUCCESS,
                payload: response.data,
            });
        })
        .catch((error) => {
            return dispatch({
                type: GET_INCOME_STATEMENT_ERROR,
                payload: error.response,
            });
        });
};