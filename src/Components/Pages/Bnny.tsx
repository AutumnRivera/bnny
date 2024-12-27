import React from 'react';

import bnny from '../../Assets/Bnyy.png';

const Bnny = () => {

    return(
    <div className="App">
        <header className="App-header">
        <img src={bnny} className="App-logo" alt="logo" />
        <p></p>
        <p>
            Enjoy a rotating bunny in these trying times
        </p>
         {/* TODO: Add a "More bunnies!" button */}
        </header>
    </div>);
    };

export default Bnny;
