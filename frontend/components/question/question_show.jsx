import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowGoBackLine } from "react-icons/ri";

class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {},
    }

    this.props.fetchQuestion({ id: this.props.questionId })
    .then((question) => {
      this.setState(question);
    });
  }

  handleDelete(question) {
    this.props.deleteQuestion(question).then(() => {
      this.props.history.push('/');
    })
  }

  handleEdit(question) {
    this.props.history.push(`/questions/${question.id}/edit`);
  }

  crudOptions(question) {
    if (question.author_id == currentUser.id) {
      return (
        <div className="crud-buttons">
          <button className="edit-crud-button" onClick={() => this.handleEdit(question)}>Edit</button>
          <button className="del-crud-button" onClick={() => this.handleDelete(question)}>Delete</button>
        </div>
      )
    }
  }
  
  render() {
    return (
      <div className="show">
        <div className="show-box">
          <p>Writen in <strong>#{this.state.question.name}</strong> by <strong>{this.state.question.fname} {this.state.question.lname}</strong></p>
          <h1>{this.state.question.title}</h1>
          <hr/>
          <p className="show-body">{this.state.question.body}</p>
        </div>
        <div className="show-button-box">
          <button onClick={() => this.props.history.push('/')} className="back-button"><RiArrowGoBackLine />Go Back</button>
          {this.crudOptions(this.state.question)}
        </div>
      </div>
    );
  }
}

export default QuestionShow;
