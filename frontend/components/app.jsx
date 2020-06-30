import React from 'react';

import NavBarContainer from './navbar/navbar_container';
import SessionContainer from './session/session_container';
import QuestionIndexContainer from './question/question_index_container';
import QuestionFormContainer from './question/question_form_container';
import QuestionShowContainer from './question/question_show_container';
import SidebarContainer from './topic/sidebar_container';
import QuestionEditContainer from './question/question_edit_container';
import TopicShowContainer from './topic/topic_show_container';
import CommentFormContainer from './comment/comment_form_container';
import CommentEditFormContainer from './comment/comment_edit_container';

import { Route, Redirect, Router, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, HiddenRoute, ShownRoute} from '../utils/route_utils';
import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();

export default () => (
    <div className="routes">
      <HiddenRoute exact path="/" component={SessionContainer} />
      <ShownRoute path="/" component={NavBarContainer} />
      <ShownRoute path="/" component={SidebarContainer} />
      <ProtectedRoute path="/askquestion" component={QuestionFormContainer} />
      <ProtectedRoute path="/topics/:id" component={TopicShowContainer} />
      <ProtectedRoute exact path="/questions/:id/comments/:commentId/edit" component={CommentEditFormContainer} />
      
      <Switch>
        <ProtectedRoute exact path="/questions/:id/edit" component={QuestionEditContainer} />  
        <ProtectedRoute exact path="/questions/:id" component={CommentFormContainer} />
      </Switch>
      
      <Switch>
        <ShownRoute exact path="/questions/:id" component={QuestionShowContainer} />
        <ProtectedRoute exact path="/" component={QuestionIndexContainer} />
      </Switch>
    </div>
);
