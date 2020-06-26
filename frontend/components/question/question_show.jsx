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

  displayQuestion() {
    if(this.state.question.topic != undefined){
      const question = this.state.question;
      return (
        <div className="show-box">
          <p>Written in #
          <strong className="topic-linker" onClick={() => this.props.history.push(`/topics/${question.topic.id}`)}>
              {question.topic.name}
            </strong> by <strong>
              {question.author.fname} {question.author.lname}
            </strong>
          </p>
          <h1>{question.title}</h1>
          <hr/>
          <p className="show-body">{question.body}</p>
        </div>
      )
    }
  }
  
  render() {
    return (
      <div className="show">
        {this.displayQuestion()}
        <div className="show-button-box">
          <button onClick={() => { this.props.history.push('/')}} className="back-button"><RiArrowGoBackLine />Go Back</button>
          {this.crudOptions(this.state.question)}
        </div>
      </div>
    );
  }
}

export default QuestionShow;
