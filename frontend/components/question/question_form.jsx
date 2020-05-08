import React from 'react';
import { Link } from 'react-router-dom';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      topic: '',      
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const question = Object.assign({}, this.state);

    this.props.createQuestion(question)
    .then(() => {
        this.setState({
        title: '',
        body: '',
        topic: '',
      });
    }
    );
  }


  render() {
    return (
      <div className="question-modal">
        <form className="question-form" onSubmit={this.handleSubmit}>
          <h1>New Question</h1>
          <Link to="/" className="close-new-question"><button className="close-question-button">X</button></Link>
            <input
              type="text"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleInput('title')}
            />
            <input
              type="text"
              placeholder="Topic"
              value={this.state.topic}
              onChange={this.handleInput('topic')}
            />
            <textarea
              placeholder="Body"
              value={this.state.body}
              onChange={this.handleInput('body')}
            />
            <button className="create-question-button">Create Question</button>
        </form>
      </div>
    );
  }
}

export default QuestionForm;
