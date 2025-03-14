import React from 'react'; 
import Header from './Header';
import './HomePage.css'; // Make sure this file is in the same folder

function HomePage() {
  return (
    <div className="container">
      {/* Header Component */}
      <Header />

      {/* Main Content with Profile Picture and Bio */}
      <main className="main-content">
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