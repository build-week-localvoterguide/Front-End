import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginRight: 'auto',
    },
  }));

export default function Navigation() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <Typography 
                    variant="h6"   
                    className={classes.title}
                >
                    Local Voter Guide
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
