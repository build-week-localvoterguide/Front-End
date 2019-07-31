import React from 'react';

export default function SignUpForm() {



    return (
        <form>
            <fieldset>
                <legend>Signup</legend>
                <div>
                    <label for='username'>
                        Username
                        <div>
                            <input
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