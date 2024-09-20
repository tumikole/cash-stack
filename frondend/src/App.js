import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hero from './components/Layout/Hero';
import GetStarted from './components/Layout/GetStarted';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Hero />} />
        <Route path="/get_started" element={<GetStarted />} />

        {/* <Route path="/level1" element={<Level1 />} />
        <Route path="/level2" element={<Level2 />} />
        <Route path="/level3" element={<Level3 />} /> */}
      </Routes>
    </div>
  );
}

export default App;
