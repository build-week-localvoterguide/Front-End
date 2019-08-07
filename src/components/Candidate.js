import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CandidateCardExpanded from './CandidateCardExpanded';
import axios from 'axios';

const Candidate = (props) => {
    const [candidate, setCandidate] = useState({});

    console.log('Candidate', props)

    useEffect(() => {
        const name = props.match.params.name;
        console.log('Name', name)
        axios
            .get(`https://swapi.co/api/people/?search=${ name }`)

            .then(res => {
                console.log('Candidate Data', res)
                setCandidate(res.data.results[0]);
                
            })

            .catch(err => {
                console.error(err);
            })
    }, []);
console.log('New Candidate', candidate)
    return (
        <div>
            <CandidateCardExpanded candidate={ candidate }/>
            <Link to='/candidates' className='back-button'>Back to Candidates</Link>
        </div>
    )
}

export default Candidate;