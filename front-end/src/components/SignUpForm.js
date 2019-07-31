import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Logo } from '../';
import Fab from '@material-ui/core/Fab';
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


export default function SignUpForm() {

    const classes = useStyles();

    return (
        <form className="choice">
            
            <fieldset className={classes.fab}>
                <legend></legend>
                <div>
                    <label for='username'>
                        Username
                        <div>
                            <input
                                className='field'
                                type='text'
                                name='username'
                                placeholder='Choose a username'
                                // value={ props.teamMember.username }
                                // onChange={ changeHandler }
                            />
                        </div>
                    </label>
                </div>
                <div>
                    <label for='email'>
                        Email Address
                        <div>
                            <input
                                className='field'
                                type='email'
                                name='email'
                                placeholder='Enter email'
                                // value={ props.teamMember.email }
                                // onChange={ changeHandler }

                            />
                        </div>
                    </label>
                </div>
                <div>
                    <label for='role'>
                        Password
                        <div>
                            <input
                                className='field'
                                type='text'
                                name='password'
                                placeholder='Enter password'
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