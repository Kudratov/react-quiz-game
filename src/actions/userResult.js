import {ADD_USER_RESULT} from './../reducers/types';

export const addUserResult = (userResult = {}) => ({
    type: ADD_USER_RESULT,
    userResult
});