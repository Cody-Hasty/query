import React from 'react';

export default ({ user }) => (
  <header className="nav-bar">
    <h1>Query</h1>
    <h4>Welcome { user.email }!</h4>
  </header>
);
