import React from 'react';

class QuestionIndex extends React.Component {
  componentDidMount() {
    this.props.requestQuestions();
  }

  render() {
    const { questions, updateQuestion } = this.props;
    let questionIndexItems = questions.map(question => (
        <QuestionIndexItem
          key={question.id}
          question={question}
          updateQuestion={updateQuestion} />
      )
    );

    let noQuestionsMsg = <h3> You have no questions. </h3>
    let render = (questionIndexItems.length === 0) ? noQuestionsMsg : questionIndexItems ;
    return(
      <div className="question-index">
        <h1>All Questions</h1>
        <ul className="question-list">
          <div>{render}</div> 
        </ul>
      </div>
    );
  }
}

export default QuestionIndex;
