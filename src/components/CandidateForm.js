import React from 'react';
import { Form, Field } from 'formik';

export default function CandidateForm() {
	return (
		<div>
		    <Form>
			<h1>Welcome, Candidates! Tell us your official position!</h1>
				<Field
					type='text'
					name='username'
					placeholder='Enter your username'
				/>
				<Field
					type='text'
					name='password'
					placeholder='Password'
				/>
			<button type="submit" className="btn btn-primary">
			    Submit
			</button>
		    </Form>
		</div>
	    )
}