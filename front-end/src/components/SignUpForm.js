import React from 'react';

export default function SignUpForm(props) {

    const changeHandler = event => {
        const updatedUser = { ...props.user, [event.target.name]: event.target.value };
        props.setUser(updatedUser);
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log('User', props.user);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <fieldset>
                <legend>Signup</legend>
                <div>
                    <label htmlFor='username'>
                        Username
                        <div>
                            <input
                                type='text'
                                name='username'
                                required
                                placeholder='Choose a username'
                                value={ props.user.username }
                                onChange={ changeHandler }
                            />
                        </div>
                    </label>
                </div>
                <div>
                    <label htmlFor='email'>
                        Email Address
                        <div>
                            <input
                                type='email'
                                name='email'
                                required
                                placeholder='Enter email'
                                value={ props.user.email }
                                onChange={ changeHandler }

                            />
                        </div>
                    </label>
                </div>
                <div>
                    <label htmlFor='password'>
                        Password
                        <div>
                            <input
                                type='text'
                                name='password'
                                required
                                placeholder='Choose a password'
                                value={ props.user.password }
                                onChange={ changeHandler }
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