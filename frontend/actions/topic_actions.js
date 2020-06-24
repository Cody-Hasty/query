import * as TopicAPIUtil from '../utils/topic_utils';

export const RECEIVE_TOPIC = 'RECEIVE_TOPIC';
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';
export const RECEIVE_TOPIC_ERRORS = 'RECEIVE_TOPIC_ERRORS';
export const REMOVE_TOPIC_ERRORS = 'REMOVE_TOPIC_ERRORS';


export const receiveTopic = topic => ({
    type: RECEIVE_TOPIC,
    topic
});

export const receiveTopics = topics => ({
    type: RECEIVE_TOPICS,
    topics
});

export const receiveTopicErrors = errors => ({
    type: RECEIVE_TOPIC_ERRORS,
    errors
});

export const removeTopicErrors = () => ({
    type: REMOVE_TOPIC_ERRORS,
})

export const fetchTopics = (topics) => dispatch => (
    TopicAPIUtil.fetchTopics(topics)
    .then((topics) => (dispatch(receiveTopics(topics))),
        (err) => (
            dispatch(receiveTopicErrors(err.responseJSON))
        ))
)

export const fetchTopic = (id) => (dispatch) => (
    TopicAPIUtil.fetchTopic(id)
    .then((topic) => (dispatch(receiveTopic(topic))),
        (err) => (
            dispatch(receiveTopicErrors(err.responseJSON))
        ))
);

export const createTopic = (topic) => (dispatch) => (
    TopicAPIUtil.createTopic(topic)
    .then((topic) => (dispatch(receiveTopic(topic))),
        (err) => (
            dispatch(receiveTopicErrors(err.responseJSON))
        ))
)