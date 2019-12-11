import React from 'react';
import {NavLink} from 'react-router-dom';
import {AppBar, Typography, Toolbar, makeStyles} from '@material-ui/core'

const styleNavLink = {
    fontWeight: "bold"
}

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

const Header = () => {
    return (
        <div className={makeStyles.root}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" className={makeStyles.title}>
                    Quizz Game
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;