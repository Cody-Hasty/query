import React from 'react';

export default ({ currentUser, logout }) => {
  const display = (
    <div>
      <p>Hello, {currentUser.fname + " " + currentUser.lname}</p>
      <button onClick={logout}>Log Out</button>
    </div>
  );

  return (
    <header className="nav-bar">
      <h1 className="logo"></h1>
      <div>
        {display}
      </div>
    </header>
  );
};
