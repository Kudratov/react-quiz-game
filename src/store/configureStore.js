import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import AsyncMiddleware from './../middlewares/asyncMiddleware';
import asyncRtM from './../middlewares/asyncRtM';
import questionsReducer from './../reducers/questionsReducer';
import answersReducer from './../reducers/answersReducer';
import resultsReducer from './../reducers/resultsReducer';
import userResultReducer from './../reducers/userResultReducer';
import finalResultReducer from './../reducers/finalResult'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    
    const store = createStore(combineReducers({
        questions: questionsReducer,
        answers: answersReducer,
        results: resultsReducer,
        userResults: userResultReducer,
        finalResult: finalResultReducer
        
    }),
    composeEnhancers(applyMiddleware(thunk, AsyncMiddleware, asyncRtM))
    );

    return store;
}