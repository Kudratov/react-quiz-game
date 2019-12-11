import {ADD_RESULT_QUESTION} from './../reducers/types';

export const addResults = (resultsList=[]) => ({
    type: ADD_RESULT_QUESTION,
    resultsList
})