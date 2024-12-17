import React from 'react';
import { Link } from 'react-router-dom';

import bnny from '../bnyy.png';

const Home = () => {
    return(
    <div className="App">
      <header className="App-header">
        <img src={bnny} className="App-logo" alt="logo" />
        <p></p>
        <p>
          Welcome to my website! Here is a picture of me. :3
        </p>
        <nav>
          {/* TODO: Clean this up by moving it into its own component */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href={`${process.env.PUBLIC_URL}/5eTools/index.html`} target="_blank" rel="noopener noreferrer">DnD</a></li>
        </nav>
      </header>
    </div>);
  };
  
export default Home;