import {ADD_FINAL_RESULT} from './../reducers/types';

export const addFinalResult = (finalResultL={}) => ({
    type: ADD_FINAL_RESULT,
    finalResultL
})