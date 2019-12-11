import {ADD_FINAL_RESULT} from './types';

const finalResultDefaultState = [];

const finalResultReducer = (state = finalResultDefaultState, action) => {
    switch(action.type){
        case ADD_FINAL_RESULT:
            return state.concat(action.finalResultL)
        default: 
        return state;
    }
}

export default finalResultReducer;