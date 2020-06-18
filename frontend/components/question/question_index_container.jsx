import { connect } from 'react-redux';
import QuestionIndex from './question_index';

import { fetchQuestions, updateQuestion, deleteQuestion } from '../../actions/question_actions';

const mapStateToProps = ({ entities }) => ({
  questions: entities.questions,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestions: () => dispatch(fetchQuestions()),
  deleteQuestion: question => dispatch(deleteQuestion(question)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);
