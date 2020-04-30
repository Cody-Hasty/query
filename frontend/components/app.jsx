import React from 'react';
import WelcomeBar from './nav_bar/welcome_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import SessionContainer from './session/session_container';
import Home from './home/home';
import { Route} from 'react-router-dom';
import { AuthRoute, ProtectedRoute, HiddenRoute, ShownRoute} from '../utils/route_utils';

export default () => (
  <div>
    <ShownRoute path="/" component={NavBarContainer} />
    <HiddenRoute exact path="/" component={SessionContainer} />
    <ProtectedRoute path="/home" component={Home} />
  </div>
);
