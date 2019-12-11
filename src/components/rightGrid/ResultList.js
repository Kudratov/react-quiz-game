import React, {useState} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Card, CardActions, CardContent, Typography, Button, makeStyles, Radio} from '@material-ui/core';

import AnswersList from './AnswersList';
import {addFinalResult} from './../../actions/finalResult';

const useStyles = makeStyles(theme => ({
    card: {
      minWidth: 275,
    },
    button: {
        margin: theme.spacing(20),
      }
  }));

const ResultList = (props) => {
  const [viewNumber, setvVewNumber] = useState(0);

    const conditioForButtonNext = () => {
        if(viewNumber < (props.questionsL.length ? props.questionsL.length - 1 : 0)){
            return false;
        } else if(viewNumber === 21){
            return true;
        } else {
            if(props.finalResultL.length === 0 && props.questionsL.length === _.uniqBy(props.userResultsL, 'pos').length){
              props.dispatch(addFinalResult(_.uniqBy(props.userResultsL, 'pos')));
            } else {
              //Make logic
            }
            return true;
        }
    }

    const conditioForButtonPrev = () => {
        if(viewNumber > 0){
            return false;
        } else if(viewNumber === 21){
            return true;
        } else {
            return true;
        }
    }
    
    if(!props.resultsL.length){
        return (
          <Card className={useStyles.card + " here-height"}>
            <CardContent>
              <Typography variant="h5" component="h2">Please click COMPLETE, to see your results</Typography>
            </CardContent>
          </Card>   
        )
    } else {
        return (
            <Card className={useStyles.card + " here-height"}>
            
            <CardContent>
              <Typography variant="h5" component="h2">
                Question {props.questionsL[viewNumber].text}
              </Typography>
              <Typography variant="body2" component="div">
                <AnswersList {...props.questionsL[viewNumber].answers} pos={props.questionsL[viewNumber].pos}/>
                <br />
                <br />
                <Radio
                  checked={true}
                  color="primary"
                  name="radio-button-demo"
                /> <b>Correct answer (If your answer is correct...)</b>
                <Radio
                  checked={true}
                  color="secondary"
                  name="radio-button-demo"
                /> <b>Your non-correct answer</b>                
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
                </div>
            </CardActions>
          </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        questionsL: state.questions,
        resultsL: state.results,
        answersL: state.answers,
        userResultsL: state.userResults,
        finalResultL: state.finalResult
    }
}

export default connect(mapStateToProps)(ResultList);