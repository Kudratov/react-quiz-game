import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Card, CardActions, CardContent, Typography, Button, makeStyles} from '@material-ui/core';

import resultsLists from './../../model/resultQuestions';
import {addResults} from './../../actions/results';

import AnswersList from './AnswersList';

const results = resultsLists();

const useStyles = makeStyles(theme => ({
    card: {
      minWidth: 275,
    },
    button: {
        margin: theme.spacing(20),
      }
  }));

const QuestionList = (props) => {
    const [viewNumber, setvVewNumber] = useState(0);

    const conditioForButtonNext = () => {
        if(viewNumber < (props.questionsL.length ? props.questionsL.length - 1 : 0)){
            return false;
        } else if(viewNumber === 7777){
            return true;
        } else {
            return true;
        }
    }

    const conditioForButtonPrev = () => {
        if(viewNumber > 0 && viewNumber !== 7777){
            return false;
        } else if(viewNumber === 7777){
            return true;
        } else {
            return true;
        }
    }

    const conditioForButtonComplete = () => {
        if(viewNumber === 7777){
            return true;
        }
    }
    
    if(!props.questionsL.length){
        return (
            <Card className={useStyles.card + " here-height-left"}>
            <CardContent>
              <Typography variant="h5" component="h2">Please wait... Asynchronous action is processing...</Typography>
            </CardContent>
          </Card>   
        )
    } else {
        return (
            <Card className={useStyles.card + " here-height-left"}>
            <CardContent>
              <Typography variant="h5" component="h2">
              {viewNumber === 7777 ? <p>Your results in the right grid</p> : <p>Question</p>} {viewNumber === 7777 ? <p></p> : props.questionsL[viewNumber].text}
              </Typography>
              <Typography variant="body2" component="div">
                {viewNumber === 7777 ? <h3>The Quiz has completed, Thank you :) <br />To start it again Please refresh the page :)</h3> : <AnswersList {...props.questionsL[viewNumber].answers} pos={props.questionsL[viewNumber].pos}/>}
                <br />
                {'Good Luck :)'}
              </Typography>
            </CardContent>
            <CardActions>
                <div className="div-for-button-next-prev">
                <Button className={useStyles.button + " button-left-for-prev"} disabled={conditioForButtonPrev()}
                onClick = {(e) => {
                    setvVewNumber(() => viewNumber - 1)
                }}
                >Prev</Button>
                <Button className={useStyles.button + " button-left-for-next"} disabled={conditioForButtonNext()}
                onClick = {(e) => {
                    setvVewNumber(() => viewNumber + 1)
                }}
                >Next</Button>
                <Button className={useStyles.button + " button-left-for-complete"} disabled={conditioForButtonComplete()}
                onClick = {(e) => {
                    setvVewNumber(() => viewNumber * 0 + 7777);
                    props.dispatch(addResults(results));
                    
                }}
                >Complete</Button>
                </div>
            </CardActions>
          </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        questionsL: state.questions,
        answersL: state.answers
    }
}

export default connect(mapStateToProps)(QuestionList);