import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hero from './components/Layout/Hero';
import GetStarted from './components/Layout/GetStarted';
import SignUp from './components/LoginSignUp/SignUp';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Hero />} />
        <Route path="/get_started" element={<GetStarted />} />
        <Route path="/sign_up" element={<SignUp />} />
       
      </Routes>
    </div>
  );
}

export default App;
