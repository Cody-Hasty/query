import React from 'react';

class QuestionShow extends React.Component {

  componentDidMount() {
    this.props.fetchQuestion();
  }

  render() {
    const { question, deleteQuestion } = this.props;
    if (question === undefined) return null;
    
    return (
      <div className="show">
        <div className="show-body">
          Question:
          <p> {question.title}</p>
        </div>

        <div>
          <button
            className="delete-button"
            onClick={() => deleteQuestion(this.props.question)}
          >
            Delete Question
          </button>
        </div>
      </div>
    );
  }
}

export default QuestionShow;
