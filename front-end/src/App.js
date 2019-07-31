import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
// import FloatingActionButtons from './components/Launch';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Navigation from './components/Navigation';
import ElectionCards from './components/ElectionCards';
import CandidateCard from './components/CandidateCard';
import 'typeface-roboto';

function App() {

  const [user, setUser] = useState({ username: '', email: '', password: '' });

  // const [team, setTeam] = useState([{ username: 'Penny', email: 'pmtague9@gmail.com', password: 'admin' }]);
  return (
    <div className="App">
      <Navigation />
      {/* <Route
        exact
        path='/'
        render={props => <FloatingActionButtons { ...props } />}
      /> */}
      <Route
        path='/login'
        render={ props => <LoginForm { ...props } />}
      />
      <Route
        path='/signup'
        render={ props => <SignUpForm { ...props } user={ user } setUser={ setUser } />}
      />
      {/* <Route
        path='/electionsearch'
        render={ props => <ElectionSearch { ...props } />}
      /> */}
      <Route
        path='/candidates'
        render={ props => <ElectionCards { ...props } />}
      />
      <Route
        path='/candidate'
        render={ props => <CandidateCard { ...props } />}
      />
    </div>
  );
}

export default App;
