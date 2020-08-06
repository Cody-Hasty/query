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
        <button className="question-button" onClick={() => { this.props.history.push(`/questions/${question.id}`)}}><h3>{question.title}</h3></button>
        <p>Written in #
          <strong className="topic-linker" onClick={() => this.props.history.push(`/topics/${question.topic.id}`)}>
            {question.topic.name}
          </strong> by <strong>
            {question.author.fname} {question.author.lname}
          </strong>
        </p>
        <p>{question.body}</p>
      </div>
    );
  }
}


export default withRouter(QuestionIndexItem);
