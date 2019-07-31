
import React, { Route } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
// import Icon from '@material-ui/core/Icon';
import LoginForm from "./LoginForm.js";
// import SignUpForm from "./SignUpForm.js";
import NavigationIcon from '@material-ui/icons/Navigation';



const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    backgroundColor: "#3f51b5"
    
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));



export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div className="choice">
      <Fab onClick= { () => window.location.href = '/SignUpForm.js'} variant="extended" aria-label="delete" className={classes.fab}>
        <NavigationIcon className={classes.extendedIcon} />
        <Route path="/SignUpForm" component={LoginForm} />SIGN UP</Fab>
      


      {/* <Fab onClick={() => window.location.href = '/LoginForm'} variant="extended" aria-label="delete" className={classes.fab}>
        <NavigationIcon className={classes.extendedIcon} />
        LOG IN
      </Fab> */}
    </div>
  );
}
      