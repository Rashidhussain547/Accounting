import { ADD_JOURNAL_ENTRY_ERROR,ADD_JOURNAL_ENTRY_REQUEST,ADD_JOURNAL_ENTRY_SUCCESS } from "../actions/type";


export default function (state = [], action) {
	const { type, payload } = action;
	switch (type) {
		case ADD_JOURNAL_ENTRY_REQUEST:
			return {
				loading: true,
			};
		case ADD_JOURNAL_ENTRY_SUCCESS:
			return {
				...state,
				loading: false,
				payload: [payload],
			};
		case ADD_JOURNAL_ENTRY_ERROR:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
}
