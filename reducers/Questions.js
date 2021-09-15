const initialState = {
	questions: [],
	questionId:'',
	fetching: false,
	fetched: false,
};

export default function reducers(state=initialState, action) {
	switch (action.type) {
		case 'FETCH_RANK': 
			return { ...state, fetching: true };
		case 'FETCH_SECOND_REJECTED': 
			return { ...state, fetching: false, error: action.payload };
		case 'FETCH_QUESTIONS': 
			return {
				// ...state,   
				questions: action.payload
			}
		case 'SET_QUESTION_ID': 
			return {
				// ...state,   
				questionId: action.payload
			}
	
		default:
			return state
	}
}