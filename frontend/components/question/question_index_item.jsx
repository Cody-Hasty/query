import React from 'react';
import { withRouter } from 'react-router-dom';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const question = this.props.question;
    return (
      <div className="question-header">
        <button onClick={() => {this.props.history.push(`/questions/${question.id}`)}}><h3>{question.title}</h3></button>
        <p>Writen in <strong>#{question.topic}</strong> by <strong>{question.fname} {question.lname}</strong></p>
        <p>{question.body}</p>
      </div>
    );
  }
}


export default withRouter(QuestionIndexItem);
