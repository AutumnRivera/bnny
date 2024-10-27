import React from 'react';
import { Link } from 'react-router-dom';

import bnny from '../bnyy.png';

const About = () => {
    return(
    <div className="App">
      <header className="App-header">
        <img src={bnny} className="App-logo" alt="logo" />
        <p>
          This is an about page. TBD!
        </p>
        <li><Link to="/">Home</Link></li>
      </header>
    </div>);
  };
  
export default About;