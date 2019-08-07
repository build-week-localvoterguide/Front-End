import React, { useState, useEffect } from 'react';
import CandidateCard from './CandidateCard';
import axios from 'axios';


export default function AllCandidates() {

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
          axios
            .get('https://swapi.co/api/people/')

            .then(res => {
                console.log(res.data.results)
                setCandidates(res.data.results);
            })

            .catch(err => {
                console.log('Server Error', err);
            })
  }, []);

  return (
      <div>
          {candidates.map(candidate => (
              <CandidateCard key={ candidate.name } candidate={ candidate } />
          ))}
      </div>
  );
}
    