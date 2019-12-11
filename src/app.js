import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import AppRouter from './routers/AppRouter'

import 'core-js';
import "regenerator-runtime/runtime";
import "@babel/polyfill";

import questionsLists from './model/quizQuestions';
import configureStore from './store/configureStore';

import {addQuestions} from './actions/questions';

import 'normalize.css/normalize.css';
import './styles/style.scss';

const qustions = questionsLists();
const store = configureStore();

store.dispatch(addQuestions(qustions));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));