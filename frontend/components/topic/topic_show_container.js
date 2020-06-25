import React from 'react';
import { connect } from 'react-redux';
import TopicShow from './topic_show';
import { fetchTopic } from '../../actions/topic_actions'
import { deleteQuestion } from '../../actions/question_actions';

const mapStateToProps = (state, { match }) => ({
    topic: state.entities.topics,
    topicId: parseInt(match.params.id),
});

const mapDispatchToProps = dispatch => ({
    getTopic: topicId => dispatch(fetchTopic(topicId)),
    deleteQuestion: question => dispatch(deleteQuestion(question)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicShow);