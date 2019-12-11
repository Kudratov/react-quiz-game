import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Radio} from '@material-ui/core';

import countAnswerFlag from '../../selectors/countAnswerFlag';
import {addUserResult} from './../../actions/userResult';


const AnswersList = (props) => {

    const [answer, setAnswer] = useState('o');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [missedAnswer, setMissedAnswer] = useState('');
    const [currentAnswer, setCurrentAnswer] = useState([]);
    const [currectCorrectAnswer, setCurrectCorrectAnswer] = useState([]);
    const [resultOfAnswers, setResultsOfAnswers] = useState([{pos: 0, text: "results"}])

    useEffect(() => {
        setMissedAnswer('1');
        if(props.answersL.length){
            props.answersL.filter(answerL => {
                if(answerL.pos === props.pos){
                    setAnswer(answerL.answer + '-' + answerL.pos);
                    setCurrentAnswer(answerL)
                    setMissedAnswer('0');
                } else{
                }
            })
            
        } else {

        }
        if(props.resultsL.length){
            props.resultsL.filter(resultL => {
                if(resultL.pos === props.pos){
                    setCurrectCorrectAnswer(resultL);
                    setCorrectAnswer(resultL.correctAnswer + '-' + resultL.pos)
                }
            })
            
        } else {

        }
    });  

    useEffect(() => {
        if(currectCorrectAnswer.pos != undefined){
            props.dispatch(addUserResult(countAnswerFlag(currentAnswer, currectCorrectAnswer)))
        }
    }, [correctAnswer, answer])


    const setColor = (str) => {
        if(str === correctAnswer){
            return "primary";
        } else if(str !== correctAnswer){
            return "secondary";
        }
    }

    return (
        <>  {missedAnswer === '1' ? <h3>Warming!!! you have missed this question, so you will not get any points</h3> : <p></p> }
            <Radio
                checked={props.a + '-' + props.pos === answer || props.a + '-' + props.pos === correctAnswer ? true : false}
                value={props.a}
                color={setColor(props.a + '-' + props.pos)}
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'A' }}
            /> {props.a}
            <br />
            <Radio
                checked={props.b + '-' + props.pos === answer || props.b + '-' + props.pos === correctAnswer ? true : false}
                value={props.b}
                color={setColor(props.b + '-' + props.pos)}
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'B' }}
            /> {props.b}
            <br />
            <Radio
                checked={props.c + '-' + props.pos === answer || props.c + '-' + props.pos === correctAnswer ? true : false}
                value={props.c}
                color={setColor(props.c + '-' + props.pos)}
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'C' }}
            /> {props.c}
            <br />
            <Radio
                checked={props.d + '-' + props.pos === answer || props.d + '-' + props.pos === correctAnswer ? true : false}
                value={props.d}
                color={setColor(props.d + '-' + props.pos)}
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'D' }}
            /> {props.d}
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        answersL: state.answers,
        resultsL: state.results
    }
}

export default connect(mapStateToProps)(AnswersList);