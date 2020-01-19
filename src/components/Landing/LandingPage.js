import React from 'react';
import {ReactComponent as LandingLogo} from '@images/netflix-logo.svg';

function LandingPage(props) {
    return (
        <div>
            <nav className="nav">
                <div className="logo">
                    <LandingLogo/>
                </div>
                <div className="button"><a href="#">Sign In</a></div>
            </nav>
        </div>
    );
}

export default LandingPage;
