import {ADD_QUIZ_QUESTIONS} from './types';

const questionsDefaultState = [];

const questionsReducer = (state = questionsDefaultState, action) => {
    switch(action.type){
        case ADD_QUIZ_QUESTIONS:
            return state.concat(action.qustionsList)
        default: 
        return state;
    }
}

export default questionsReducer;