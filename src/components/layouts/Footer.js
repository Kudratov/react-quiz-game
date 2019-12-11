import React from 'react';
import {connect} from 'react-redux';
import {Tab, Paper, Tabs, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

const Footer = (props) => {
  
  if(props.finalResultL.length){
    const inCorrectAnswers =
      props.finalResultL.filter((list) => {
        return list.flag === "incorrect";
      })
    
    const correctAnswers =
      props.finalResultL.filter((list) => {
        return list.flag === "correct";
      })
    
    const missedAnswers =
      props.finalResultL.filter((list) => {
        return list.flag === "missed";
      })

    localStorage.removeItem("last-result");

    let itemToLocalStorage = {
      correct: correctAnswers.length,
      incorrect: inCorrectAnswers.length,
      missed: missedAnswers.length
    }

    localStorage.setItem("last-result", JSON.stringify(itemToLocalStorage));
    
    return (
        <Paper className={useStyles.root}>
        
            <Tabs
                value={1}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label={"Current Incorrect answers: " + inCorrectAnswers.length} />
                <Tab label={"Current Correct answers: " + correctAnswers.length} />
                <Tab label={"Current Missed answers: " + missedAnswers.length} />
            </Tabs>
        </Paper>
    )} else if(localStorage.getItem("last-result")){
      let itemFromLocalStorage = JSON.parse(localStorage.getItem("last-result"));
      return(
        <Paper className={useStyles.root}>
        
        <Tabs
            value={1}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label={"Last Incorrect answers: " + itemFromLocalStorage.incorrect} />
            <Tab label={"Last Correct answers: " + itemFromLocalStorage.correct} />
            <Tab label={"Last Missed answers: " + itemFromLocalStorage.missed} />
        </Tabs>
    </Paper>
      )
    } else{
      return (
        <div></div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
      finalResultL: state.finalResult
  }
}

export default connect(mapStateToProps)(Footer);