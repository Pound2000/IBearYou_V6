


export function fetchQuestions(questions) {
   // console.log("fetchQuestions : ",questions)
	return (dispatch, getState) => {
		const state = getState();	 
	    dispatch({type:'FETCH_QUESTIONS',payload:questions})
		 
		
	};
}

export function setQuestionId(questionId) {
   // console.log("fetchQuestions : ",questions)
	return (dispatch, getState) => {
		const state = getState();	 
	    dispatch({type:'SET_QUESTION_ID',payload:questionId})
		 
		
	};
} 