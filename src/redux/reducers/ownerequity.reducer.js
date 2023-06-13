import { GET_OWNER_EQUITY_ERROR,GET_OWNER_EQUITY_REQUEST,GET_OWNER_EQUITY_SUCCESS } from "../actions/type";


export default function (state = [], action) {
	const { type, payload } = action;
	switch (type) {
		case GET_OWNER_EQUITY_REQUEST:
			return {
				loading: true,
			};
		case GET_OWNER_EQUITY_SUCCESS:
			return {
				...state,
				loading: false,
				payload: [payload],
			};
		case GET_OWNER_EQUITY_ERROR:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
}
