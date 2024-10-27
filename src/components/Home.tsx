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
          <li><Link to="/">Home</Link></li>
        </nav>
      </header>
    </div>);
  };
  
export default Home;