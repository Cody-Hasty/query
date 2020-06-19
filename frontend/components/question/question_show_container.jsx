import { connect } from 'react-redux';
import QuestionShow from './question_show';

import { deleteQuestion, fetchQuestion } from '../../actions/question_actions';

const mapStateToProps = (state, { match }) => ({
  questionId: parseInt(match.params.id),
});

const mapDispatchToProps = dispatch => ({
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionShow);
