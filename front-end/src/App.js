import React from 'react';
import Launch from './components/Launch';
import './App.css';
// import LoginForm from './components/LoginForm';
// import SignUpForm from './components/SignUpForm';
import Navigation from './components/Navigation';
import 'typeface-roboto';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Launch />
      {/* <LoginForm />
      <SignUpForm /> */}
    </div>
  );
}

export default App;
