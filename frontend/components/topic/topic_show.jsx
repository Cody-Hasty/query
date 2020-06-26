import React from 'react';

class TopicShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: {},
        }

        this.props.getTopic({id: this.props.topicId})
        .then((topic) => {
            this.setState(topic);
        });
    }

    handleDelete(question) {

        this.props.deleteQuestion(question)
        this.props.getTopic({ id: this.props.topicId })
            .then((topic) => {
                this.setState(topic);
            });
    }

    handleEdit(question) {
        this.props.history.push(`/questions/${question.id}/edit`);
    }

    crudOptions(question) {
        if (question.author_id == currentUser.id) {
            return (
                <div className="crud-buttons">
                    <button className="edit-crud-button" onClick={() => this.handleEdit(question)}>Edit</button>
                    <button className="del-crud-button" onClick={() => {this.handleDelete(question); window.location.reload();}}>Delete</button>
                </div>
            )
        }
    }

    displayBlank() {

    }

    render() {
        if(this.state.topic.questions != undefined){
            let questions = [];
            Object.values(this.state.topic.questions).forEach((ele) => {
                questions.push(ele);
            });
            return (
                <div className="feed">
                    {questions.reverse().map((question, i) => (
                        <li key={i} className="question-list-item">
                            <div className="question-header">
                                <button onClick={() => { this.props.history.push(`/questions/${question.id}`); window.location.reload(); }}><h3>{question.title}</h3></button>
                                <p>Written in <strong>#{this.state.topic.name}</strong> by <strong>{question.author.fname} {question.author.lname}</strong></p>
                                <p>{question.body}</p>
                            </div>
                            {this.crudOptions(question)}
                            <hr />
                        </li>
                    ))}
                </div>
            )
        } else {
            return (
                <div className="feed">
                    <p className="empty-topic">This topic does not have any questions yet - be the first!</p>
                </div>
            )
        }
    }
}

export default TopicShow;