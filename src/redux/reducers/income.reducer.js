import { GET_INCOME_STATEMENT_ERROR,GET_INCOME_STATEMENT_REQUEST,GET_INCOME_STATEMENT_SUCCESS } from "../actions/type";


export default function (state = [], action) {
	const { type, payload } = action;
	switch (type) {
		case GET_INCOME_STATEMENT_REQUEST:
			return {
				loading: true,
			};
		case GET_INCOME_STATEMENT_SUCCESS:
			return {
				...state,
				loading: false,
				payload: [payload],
			};
		case GET_INCOME_STATEMENT_ERROR:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
}
