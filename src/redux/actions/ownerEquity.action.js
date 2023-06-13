import axios from "axios";
import {   GET_OWNER_EQUITY_ERROR,GET_OWNER_EQUITY_REQUEST,GET_OWNER_EQUITY_SUCCESS } from "./type";



export const getOwnerEquity = () => (dispatch) => {

    dispatch({ type: GET_OWNER_EQUITY_REQUEST});
    return axios({
        method: 'POST',
        url: `http://localhost:9000/v1/journal/equity`
    })
        .then((response) => {
            return dispatch({
                type: GET_OWNER_EQUITY_SUCCESS,
                payload: response.data,
            });
        })
        .catch((error) => {
            return dispatch({
                type: GET_OWNER_EQUITY_ERROR,
                payload: error.response,
            });
        });
};