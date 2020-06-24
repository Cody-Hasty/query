import { connect } from 'react-redux';
import QuestionEditForm from './question_edit_form';
import { removeQuestionErrors, updateQuestion, deleteQuestion, fetchQuestion } from '../../actions/question_actions';
import { fetchTopics, createTopic, removeTopicErrors } from '../../actions/topic_actions'

const mapStateToProps = (state, { match }) => ({
    question_errors: state.errors.question,
    questionId: parseInt(match.params.id),
    topics: state.entities.topics,
    topic_errors: state.errors.topic,
})

const mapDispatchToProps = (dispatch) => ({
    sendQuestion: (question) => dispatch(updateQuestion(question)),
    removeQuestionErrors: () => dispatch(removeQuestionErrors()),
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
    getTopics: () => dispatch(fetchTopics()),
    sendTopic: (topic) => dispatch(createTopic(topic)),
    removeTopicErrors: () => dispatch(removeTopicErrors()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionEditForm);