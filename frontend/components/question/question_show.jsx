import React from 'react';

class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
    };

  }
  
  componentDidMount() {
    this.props.fetchQuestion({ id: parseInt(this.props.match.params.id) })
      .then((question) => this.state.question = question);
  }

  render() {
    // const { question, deleteQuestion } = this.props;
    // if (question === undefined) return null;
    
    return (
      <div className="show">
        <div className="show-body">
          {/* <h3>{question.title}</h3>
          <p>Writen in <strong>#{question.topic}</strong> by <strong>{question.fname} {question.lname}</strong></p>
          <p>{question.body}</p> */}
        </div>
      </div>
    );
  }
}

export default QuestionShow;
