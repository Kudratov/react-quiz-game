import React from 'react';
import {Paper, Grid, makeStyles} from '@material-ui/core';

import QuestionLists from './leftGrid/QuestionLists'
import ResultLists from './rightGrid/ResultsList'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: 20,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginTop: 10,
      marginBottom: 10
    },
  }));

const QuizzDashboardPage = () => {
    return (
        <div className={useStyles.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Paper className={useStyles.paper + ' question-lists'}><QuestionLists /></Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={useStyles.paper + ' result-lists'}><ResultLists /></Paper>
          </Grid>
        </Grid>
      </div>
    )
}

export default QuizzDashboardPage;