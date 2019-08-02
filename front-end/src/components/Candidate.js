import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CandidateCardExpanded from './CandidateCardExpanded';
import axios from 'axios';

const Candidate = (props) => {
    const [candidate, setCandidate] = useState();

    useEffect(() => {
        const name = props.match.params.name;
        console.log(props.match.params.name)
        axios
            .get(`https://swapi.co/api/people/${name}`)

            .then(res => {
                setCandidate(res.data.results);
            })

            .catch(err => {
                console.error(err);
            })
    }, [props.match.params.name]);

    return (
        <div>
            <CandidateCardExpanded />
            <Link to='/candidates' className='back-button'>Back to Candidates</Link>
        </div>
    )
}

export default Candidate;