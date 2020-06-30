import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const currentUser = this.props.currentUser;
    return (
      <div className="nav-bar">
        <div className="banner">
          <div className="navbar-website-title">
            <Link to="/" className="website-title-link"><h1>Que<span>e</span>ry</h1></Link>
          </div>
          <Link to="/askquestion" className="link-to-new-question"><button className="ask-question-button">Ask Question</button></Link>
          
          <p className="welcome">Hello, <strong>{currentUser.fname + " " + currentUser.lname}</strong></p>
          <button onClick={() => this.props.logout()} className="logout-button">Log Out</button>
        </div>
      </div>
    );

  }
};

export default NavBar;