import React from 'react';
import {Paper, Typography, makeStyles} from '@material-ui/core';

import ResultList from './ResultList';


const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));

const ResultsList = () => {
    return (
        <Paper className={useStyles.root}>
            <ResultList />
        </Paper>
    )
}

export default ResultsList;