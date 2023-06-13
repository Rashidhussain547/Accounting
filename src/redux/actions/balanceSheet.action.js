import axios from "axios";
import {  GET_BALANCE_ERROR,GET_BALANCE_REQUEST,GET_BALANCE_SUCCESS} from "./type";



export const getBalanceSheet = () => (dispatch) => {

    dispatch({ type: GET_BALANCE_REQUEST});
    return axios({
        method: 'POST',
        url: `http://localhost:9000/v1/journal/balanceSheet`
    })
        .then((response) => {
            return dispatch({
                type: GET_BALANCE_SUCCESS,
                payload: response.data,
            });
        })
        .catch((error) => {
            return dispatch({
                type: GET_BALANCE_ERROR,
                payload: error.response,
            });
        });
};