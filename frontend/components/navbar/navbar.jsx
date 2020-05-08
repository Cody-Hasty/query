import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  return (
    <div className="nav-bar">
      <div className="banner">
        <div className="navbar-website-title">
          <Link to="/" className="website-title-link"><h1>Que<span>e</span>ry</h1></Link>
        </div>
        
        <Link to="/questions/new" className="link-to-new-question"><button className="ask-question-button">Ask Question</button></Link>
        <p className="welcome">Hello, {currentUser.fname + " " + currentUser.lname}</p>
        <button onClick={logout} className="logout-button">Log Out</button>
      </div>
    </div>
  );
};
