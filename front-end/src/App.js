import React, { useState } from 'react';
import './App.css';
import 'typeface-roboto';
import Navigation from './components/Navigation';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import ElectionSearch from './components/ElectionSearch';

function App() {

  const [user, setUser] = useState({ username: '', email: '', password: '' });

  const [team, setTeam] = useState([{ username: 'Penny', email: 'pmtague9@gmail.com', password: 'admin' }]);
  return (
    <div className="App">
      <Navigation />
      <LoginForm />
      <SignUpForm team={ team } setTeam={ setTeam } user={ user } setUser={ setUser }/>
      <ElectionSearch />
    </div>
  );
}

export default App;
