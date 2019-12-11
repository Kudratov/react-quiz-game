import {ADD_QUIZ_ANSWER, EDIT_QUIZ_ANSWER} from './../reducers/types';

export const addAnswer = (answer={}) => ({
    type: ADD_QUIZ_ANSWER,
    answer
});

export const editAnswer = (updates) => ({
    type: EDIT_QUIZ_ANSWER,
    updates
})