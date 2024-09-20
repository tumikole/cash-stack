import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hero from './components/Layout/Hero';
import GetStarted from './components/Layout/GetStarted';
import SignUp from './components/LoginSignUp/SignUp';
import Login from './components/LoginSignUp/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/get_started" element={<GetStarted />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
