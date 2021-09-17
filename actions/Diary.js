
export function fetchQuestions(questions) {
   // console.log("fetchQuestions : ",questions)
	return (dispatch, getState) => {
		const state = getState();	 
	    dispatch({type:'FETCH_QUESTIONS',payload:questions})
		 
		
	};
}
