import React from 'react';

export default ({ currentUser, logout }) => {
  return (
    <div className="nav-bar">
      {/* <h1 className="logo"></h1> */}
      <div className="banner">
        <p className="welcome">Hello, {currentUser.fname + " " + currentUser.lname}</p>
        <button onClick={logout} className="logout-button">Log Out</button>
      </div>
    </div>
  );
};
