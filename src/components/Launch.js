
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
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
      <Fab onClick= { () => window.location.href = '/signup'} variant="extended" aria-label="delete" style={{color:'white'}} className={classes.fab}>
        <NavigationIcon className={classes.extendedIcon} />
        SIGN UP
      </Fab>
      


      <Fab onClick={() => window.location.href = '/login'} variant="extended" aria-label="delete" style={{color:'white'}} className={classes.fab}>
        <NavigationIcon className={classes.extendedIcon} />
        LOG IN
      </Fab>
    </div>
  );
}
      