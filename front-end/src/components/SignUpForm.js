import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
      backgroundColor: "#3f51b5",
      
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));


export default function SignUpForm() {

    const classes = useStyles();

    return (
        <form className="choice">
            {/* <img src="../../public/votelogo.svg" alt="Logo" /> */}
            <fieldset className={classes.fab}>
                <div>
                    <label for='username' style={{color:'white'}}>
                        Please choose a Username
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
                    <label for='email' style={{color:'white'}}>
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
                    <label for='role' style={{color:'white'}}>
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
            
                