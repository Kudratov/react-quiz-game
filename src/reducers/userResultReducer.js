import {ADD_USER_RESULT} from './types';

const userResultDefaultState = [];

const userResultReducer = (state = userResultDefaultState, action) => {
    switch(action.type){
        case ADD_USER_RESULT:
            return state.concat(action.userResult);
        default: 
        return state;
    }
}

export default userResultReducer;