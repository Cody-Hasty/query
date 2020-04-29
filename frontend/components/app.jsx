import React from 'react';
import WelcomeBar from './nav_bar/welcome_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import SessionContainer from './session/session_container';
import Home from './home/home';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

export default () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route path="/session" component={SessionContainer} />
  </div>
);
