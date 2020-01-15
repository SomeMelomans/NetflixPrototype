import React from 'react';
import LandingLogo from '~images/Landing';

function Landing(props) {
    return (
        <div>
            <nav className="nav">
                <div className="logo"><img src={LandingLogo} className="App-logo" alt="logo"/></div>
                <div className="button"><a href="#">Sign In</a></div>
            </nav>
        </div>
    );
}

export default Landing;
