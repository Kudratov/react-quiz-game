import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Radio} from '@material-ui/core';

import {addAnswer, editAnswer} from './../../actions/answers';

const AnswersList = (props) => {

    const [answer, setAnswer] = useState('o');
    const [selected, setSelected] = useState('0');

    useEffect(() => {
        const check = props.pos;
        const str = answer.split('-');
        if(str[1] == 'o'){
            setSelected('0')
        } else if(str[1] == check){
            setSelected('1')
        } else {
            setSelected('0')
        }
        if(props.answersL.length){
            props.answersL.filter(answerL => {
                if(answerL.pos === props.pos){
                    setAnswer(answerL.answer + '-' + answerL.pos)
                }
            })
            
        } else {

        }
    });

    const handleOnChange = (e) => {
        if(selected === '0'){
            const pos = props.pos;
            const currentAnswer = {answer: e.target.value, pos};
            props.dispatch(addAnswer(currentAnswer));
            setAnswer(e.target.value + '-' + pos)
        } else {
            const pos = props.pos;
            const currentAnswer = {answer: e.target.value, pos};
            props.dispatch(editAnswer(currentAnswer));
            setAnswer(e.target.value + '-' + pos)
        }
        
    }
    

    return (
        <>
            <Radio
                checked={props.a + '-' + props.pos === answer ? true : false}
                onChange={handleOnChange}
                value={props.a}
                color="default"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'A' }}
            /> {props.a}
            <br />
            <Radio
                checked={props.b + '-' + props.pos === answer ? true : false}
                onChange={handleOnChange}
                value={props.b}
                color="default"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'B' }}
            /> {props.b}
            <br />
            <Radio
                checked={props.c + '-' + props.pos === answer ? true : false}
                onChange={handleOnChange}
                value={props.c}
                color="default"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'C' }}
            /> {props.c}
            <br />
            <Radio
                checked={props.d + '-' + props.pos === answer ? true : false}
                onChange={handleOnChange}
                value={props.d}
                color="default"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'D' }}
            /> {props.d}
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        answersL: state.answers
        // currentAnswer: getAnswer(state.answers, ownProps.pos)
    }
}

export default connect(mapStateToProps)(AnswersList);