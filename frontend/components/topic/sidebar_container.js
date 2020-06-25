import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { fetchTopics } from '../../actions/topic_actions'

const mapStateToProps = state => ({
    topics: state.entities.topics,
});

const mapDispatchToProps = dispatch => ({
    getTopics: () => dispatch(fetchTopics()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);