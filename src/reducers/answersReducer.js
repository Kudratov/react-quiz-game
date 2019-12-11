import {ADD_QUIZ_ANSWER, EDIT_QUIZ_ANSWER} from './types';

const answerQuizReducerDefaultState = [];

const answerReducer = (state = answerQuizReducerDefaultState, action) => {
    switch(action.type){
        case ADD_QUIZ_ANSWER: {
            return state.concat(action.answer)
        }
        case EDIT_QUIZ_ANSWER: {
            return state.map(answerList => {
                if(answerList.pos === action.updates.pos){
                    return {...answerList, ...action.updates}
                } else {
                    return answerList;
                }
            })
        }
        default:
            return state;
    }
}

export default answerReducer;