import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Navigation from './components/Navigation';
import CandidateCard from './components/CandidateCard';
import ElectionCards from './components/ElectionCards';
import 'typeface-roboto';

function App() {
  return (
    <div className="App">
      <Navigation />
      <LoginForm />
      <SignUpForm />
      <CandidateCard />
      <ElectionCards />
    </div>
  );
}

export default App;
