import React from 'react';
import {Paper, Typography, makeStyles} from '@material-ui/core';

import QuestionList from './QuestionList';


const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));

const QuestionLists = () => {
    return (
        <Paper className={useStyles.root}>
            <QuestionList />
        </Paper>
    )
}

export default QuestionLists;