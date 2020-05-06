import { connect } from 'react-redux';
import QuestionIndex from './question_index';

import { fetchQuestions, updateQuestion, deleteQuestion } from '../../actions/question_actions';
// , fetchAuthor
import { allQuestions } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return({
    questions: allQuestions(state),
  });
};

// user: state.user[ownProps.match.params.author_id]
const mapDispatchToProps = (dispatch) => {
  return ({
  requestQuestions: () => dispatch(fetchQuestions()),
  updateQuestion: question => dispatch(updateQuestion(question)),
  deleteQuestion: question => dispatch(deleteQuestion(question)),
});
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);
