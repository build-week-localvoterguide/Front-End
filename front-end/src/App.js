import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Navigation from './components/Navigation';
import 'typeface-roboto';

function App() {
  return (
    <div className="App">
      <Navigation />
      <LoginForm />
      <SignUpForm />
    </div>
  );
}

export default App;
