import React from 'react';
import QuestionIndexItem from './question_index_item';
import { Link } from 'react-router-dom';

class QuestionIndex extends React.Component {  
  constructor(props){
    super(props);
    this.state = this.props.getQuestions();
  }

  handleDelete(question) {
    this.props.deleteQuestion(question).then(() => {
      this.state = this.props.getQuestions();
    })
  }

  handleEdit(question) {
    this.props.history.push(`/questions/${question.id}`);
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
    const questions = Object.values(this.props.questions);
    return(
      <div className="feed">
        
        {questions.map((question, i) => (
          <li key={i} className="question-list-item">
            <QuestionIndexItem question={question} key={question.id}/>
            {this.crudOptions(question)}
            <hr />
          </li>
        ))}

      </div>
    ) 
  }
}

export default QuestionIndex;