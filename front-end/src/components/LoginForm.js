import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Logo } from '../';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
      backgroundColor: "#3f51b5"
      
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));


export default function LoginForm() {

    const classes = useStyles();

    return (
        <form className="choice">
            <fieldset className={classes.fab}>
                <div>
                    <label for='username' style={{color:'white'}}>
                        Username
                        <div>
                            <input
                                className='field'
                                type='text'
                                name='username'
                                placeholder='Enter your username'
                                // value={ props.teamMember.username }
                                // onChange={ changeHandler }
                            />
                        </div>
                    </label>
                </div>
                <div>
                    <label for='role' style={{color:'white'}}>
                        Password
                        <div>
                            <input
                                className='field'
                                type='text'
                                name='password'
                                placeholder='Password'
                                // value={ props.teamMember.role }
                                // onChange={ changeHandler }
                            />
                        </div>
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </fieldset>
        </form>
    )
}
               