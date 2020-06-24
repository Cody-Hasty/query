import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { removeQuestionErrors, createQuestion } from '../../actions/question_actions';
import { fetchTopics, createTopic, removeTopicErrors } from '../../actions/topic_actions'

const mapStateToProps = (state) => ({
  author_id: state.session.currentUser.id,
  question_errors: state.errors.question,
  topics: state.entities.topics,
  topic_errors: state.errors.topic,
})

const mapDispatchToProps = (dispatch) => ({
  sendQuestion: (question) => dispatch(createQuestion(question)),
  removeQuestionErrors: () => dispatch(removeQuestionErrors()),
  getTopics: () => dispatch(fetchTopics()),
  sendTopic: (topic) => dispatch(createTopic(topic)),
  removeTopicErrors: () => dispatch(removeTopicErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);
