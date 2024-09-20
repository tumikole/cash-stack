import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/level1">Level 1</Link> | 
        <Link to="/level2">Level 2</Link> | 
        <Link to="/level3">Level 3</Link>
      </nav>
    </header>
  );
};

export default Header;
