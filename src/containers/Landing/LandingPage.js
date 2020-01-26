import React from "react";
import { ReactComponent as LandingLogo } from "@images/netflix-logo.svg";

function LandingPage() {
    return (
      <section className="welcome-section">
        <nav className="nav">
          <div className="logo">
            <LandingLogo />
          </div>
          <div className="button"><a href="/">Sign In</a></div>
        </nav>
        <div className="content">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <div className="search-bar">
            <div className="search-bar--input">Email address</div>
            <button type="button" className="search-bar--button">Try 30 days free</button>
          </div>
          <p>Ready to watch? Enter your email to create or access your account</p>
        </div>
      </section>
    );
}

export default LandingPage;
