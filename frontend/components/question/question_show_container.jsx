import { connect } from 'react-redux';
import QuestionShow from './question_show';

import { deleteQuestion, fetchQuestion } from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    question: state.questions[ownProps.match.params.id],
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    fetchQuestion: () => dispatch(fetchQuestion(ownProps.match.params.id)),
    deleteQuestion: (question) => dispatch(deleteQuestion(question)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionShow);
