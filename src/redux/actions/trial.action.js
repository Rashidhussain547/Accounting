import axios from "axios";
import {  GET_TRIAL_BALANCE_ERROR,GET_TRIAL_BALANCE_REQUEST,GET_TRIAL_BALANCE_SUCCESS} from "./type";



export const getTrialBalance = () => (dispatch) => {

    dispatch({ type: GET_TRIAL_BALANCE_REQUEST});
    return axios({
        method: 'POST',
        url: `http://localhost:9000/v1/journal/trial`
    })
        .then((response) => {
            return dispatch({
                type: GET_TRIAL_BALANCE_SUCCESS,
                payload: response.data,
            });
        })
        .catch((error) => {
            return dispatch({
                type: GET_TRIAL_BALANCE_ERROR,
                payload: error.response,
            });
        });
};