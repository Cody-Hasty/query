import React from 'react';
import { withRouter } from 'react-router-dom';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  //  by {this.props.user.fname} {this.props.user.lname}
  render() {
    return (
      <li className="question-list-item">
        <div className="question-header">
          <h3>{this.props.question.title}</h3>
          <p>Writen in #{this.props.question.topic}</p>
          <p>{this.props.question.body}</p>
        </div>
      </li>
    );
  }
}

export default withRouter(QuestionIndexItem);
