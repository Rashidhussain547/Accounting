import { GET_TRIAL_BALANCE_ERROR,GET_TRIAL_BALANCE_REQUEST,GET_TRIAL_BALANCE_SUCCESS } from "../actions/type";


export default function (state = [], action) {
	const { type, payload } = action;
	switch (type) {
		case GET_TRIAL_BALANCE_REQUEST:
			return {
				loading: true,
			};
		case GET_TRIAL_BALANCE_SUCCESS:
			return {
				...state,
				loading: false,
				payload: [payload],
			};
		case GET_TRIAL_BALANCE_ERROR:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
}
