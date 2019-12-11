import {ADD_RESULT_QUESTION} from './types';

const resultsDefaultState = [];

const resultsReducer = (state = resultsDefaultState, action) => {
    switch(action.type){
        case ADD_RESULT_QUESTION:
            return state.concat(action.resultsList)
        default: 
        return state;
    }
}

export default resultsReducer;