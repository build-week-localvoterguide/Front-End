import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
// import FloatingActionButtons from './components/Launch';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Navigation from './components/Navigation';
import AllCandidates from './components/AllCandidates';
import Candidate from './components/Candidate';
import 'typeface-roboto';

function App() {

  const [user, setUser] = useState({ username: '', email: '', password: '' });

  return (
    <div className="App">
      <Navigation />
      {/* <Route
        exact
        path='/'w
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
        render={ props => <AllCandidates { ...props } />}
      />
      <Route
        path='/candidates/:name'
        render={ props => <Candidate { ...props } />}
      />
    </div>
  );
}

export default App;
