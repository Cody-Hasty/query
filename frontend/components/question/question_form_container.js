import { connect } from 'react-redux';
import QuestionForm from './question_form';

import {
  createQuestion
} from '../../actions/question_actions';

const mapDispatchToProps = (dispatch) => {
  return({
    createQuestion: question => dispatch(createQuestion(question)),
  });
};

export default connect(
  mapDispatchToProps
)(QuestionForm);
