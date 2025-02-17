import React from 'react';
import './HomePage.css'; // Make sure this file is in the same folder

function HomePage() {
  return (
    <div className="container">
      {/* Header with Portfolio Name and Navigation */}
      <header className="header">
        <div className="portfolio-name">amanihas</div>
        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content with Profile Picture and Bio */}
      <main className="main-content">
        {/* Replace 'profile-pic.jpg' with the path to your image */}
        <img 
          src="/images/profile-pic.jpg" 
          alt="Profile" 
          className="profile-picture"
        />
        <p className="bio">
            Hi, I'm Amani Hassan!<br />
            <span className="bio-sub">Welcome to my portfolio :)</span>
        </p>
      </main>
    </div>
  );
}

export default HomePage;