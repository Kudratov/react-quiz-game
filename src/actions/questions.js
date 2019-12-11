import {ADD_QUIZ_QUESTIONS} from './../reducers/types';

export const addQuestions = (qustionsList=[]) => ({
    type: ADD_QUIZ_QUESTIONS,
    qustionsList
})