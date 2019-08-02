import React from 'react';

export default function LoginForm() {



    return (
        <form>
            <fieldset>
                <legend>Login</legend>
                <div>
                    <label htmlFor='username'>
                        Username
                        <div>
                            <input
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
                    <label htmlFor='password'>
                        Password
                        <div>
                            <input
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