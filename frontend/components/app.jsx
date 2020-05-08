import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import SessionContainer from './session/session_container';
import QuestionIndexContainer from './question/question_index_container';
import QuestionFormContainer from './question/question_form_container';
import QuestionShowContainer from './question/question_show_container';
import SidebarContainer from './sidebar/sidebar_container';
import FeedContainer from './feed/feed_container';
import { Route, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, HiddenRoute, ShownRoute} from '../utils/route_utils';

export default () => (
  <div>
    <ShownRoute path="/" component={NavBarContainer} />
    <ShownRoute path="/" component={SidebarContainer} />
    <ShownRoute exact path="/" component={FeedContainer} />
    <HiddenRoute exact path="/" component={SessionContainer} />
    <ProtectedRoute path="/questions/new" component={QuestionFormContainer} />
    <ProtectedRoute path="/questions/:id" component={QuestionShowContainer} />
    <ShownRoute path="/questions" component={QuestionIndexContainer} />
  </div>
);
