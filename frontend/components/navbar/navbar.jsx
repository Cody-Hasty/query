import React from 'react';

export default ({ currentUser, logout }) => {
  return (
    <div className="nav-bar">
      <div className="banner">
        <div className="navbar-website-title">
          <h1>Que<span>e</span>ry</h1>
        </div>
        <p className="welcome">Hello, {currentUser.fname + " " + currentUser.lname}</p>
        <button onClick={logout} className="logout-button">Log Out</button>
      </div>
    </div>
  );
};
