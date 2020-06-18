import { connect } from 'react-redux';
import QuestionShow from './question_show';

import { deleteQuestion, fetchQuestion } from '../../actions/question_actions';

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = dispatch => ({
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionShow);
