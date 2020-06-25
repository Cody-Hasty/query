import React from 'react';
import QuestionIndexItem from '../question/question_index_item';

class TopicShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }



    }

    handleDelete(question) {
        this.props.deleteQuestion(question)
    }

    handleEdit(question) {
        this.props.history.push(`/questions/${question.id}/edit`);
    }

    crudOptions(question) {
        if (question.author_id == currentUser.id) {
            return (
                <div className="crud-buttons">
                    <button className="edit-crud-button" onClick={() => this.handleEdit(question)}>Edit</button>
                    <button className="del-crud-button" onClick={() => this.handleDelete(question)}>Delete</button>
                </div>
            )
        }
    }

    render() {
        // const questions = Object.values(this.props.questions);
        return (
            <div className="feed">
                {/* {questions.reverse().map((question, i) => (
                    <li key={i} className="question-list-item">
                        <QuestionIndexItem question={question} key={question.id} />
                        {this.crudOptions(question)}
                        <hr />
                    </li>
                ))} */}
            </div>
        )
    }
}

export default TopicShow;