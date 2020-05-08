import React from 'react';

class QuestionIndex extends React.Component {
  componentDidMount() {
    // this.props.allQuestions();
    // this.props.fetchQuestions();
    // console.log(this.props.fetchQuestions())
  }
  
  constructor(props){
    super(props);
  }
  
  render() {
    return(
      <div>
        {/* <li className="question-list-item">
          <div className="question-header">
            <h3>COOKIE ?? !!??</h3>
            <p>Writen in <strong>#food</strong> by <strong>Cookie Monster</strong></p>
            <p>Does anybody know any good cookie places near Seasame St?</p>
          </div>
        </li>
        <hr></hr>
        <li className="question-list-item">
          <div className="question-header">
            <h3>What day is it?</h3>
            <p>Writen in <strong>#time-management</strong> by <strong>Taco Tuesday</strong></p>
            <p>I lost my calender, what day of the week is it?</p>
          </div>
        </li>
        <hr></hr>
        <li className="question-list-item">
          <div className="question-header">
            <h3>Tortilla substitutions?</h3>
            <p>Writen in <strong>#cooking</strong> by <strong>Bob BuffetMan</strong></p>
            <p>I'm out of tortillas, what could I replace them with in my kitchen?</p>
          </div>
        </li>
        <hr></hr>
        <li className="question-list-item">
          <div className="question-header">
            <h3>Will gargling hand sanitizer stop the Coronavirus?</h3>
            <p>Writen in <strong>#Coronavirus</strong> by <strong>A Human</strong></p>
            <p>I already tried bleach, any ideas?</p>
          </div>
        </li>
        <hr></hr>
        <li className="question-list-item">
          <div className="question-header">
            <h3>Does anyone know of some badly hidden website backdoors?</h3>
            <p>Writen in <strong>#programming</strong> by <strong>Not The NSA</strong></p>
            <p>I want to learn how to detect them, for a 'school project'...</p>
          </div>
        </li>
        <hr></hr> */}
      </div>
    ) 
    // const { questions, updateQuestion } = this.props;
    // let questionIndexItems = questions.map(question => (
    //     <QuestionIndexItem
    //       key={question.id}
    //       question={question}
    //       updateQuestion={updateQuestion} />
    //   )
    // );

    // let noQuestionsMsg = <h3> You have no questions. </h3>
    // let render = (questionIndexItems.length === 0) ? noQuestionsMsg : questionIndexItems ;
    // return(
    //   <div className="question-index">
    //     <h1>All Questions</h1>
    //     <ul className="question-list">
    //       <div>{render}</div> 
    //     </ul>
    //   </div>
    // );
  }
}

export default QuestionIndex;
