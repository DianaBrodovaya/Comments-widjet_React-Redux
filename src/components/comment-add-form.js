import React, {Component} from 'react';
import {addComment} from "../actions";
import {connect} from 'react-redux';

class CommentAddForm extends Component {

    render() {
        let commentAuthor = '',
            commentText = '';
        const {addComment} = this.props;

        const addCommentAuthor = (e) => {
            commentAuthor = e.target.value;
        };

        const addCommentText = (e) => {
            commentText = e.target.value;
        };

        const submit = (e) => {
            e.preventDefault();
            addComment(commentAuthor, commentText);
            this.commentInput.value='';
            this.commentTextarea.value='';
        };

        return (
            <div>
                <p>Добавить комментарий:</p>
                <form
                    className="comment-form"
                    onSubmit={submit}>
                    <input
                        type="text"
                        placeholder="Ваше имя"
                        onChange={addCommentAuthor}
                        ref={(input)=>this.commentInput=input}
                    />
                    <textarea
                        placeholder="Ваш комментарий"
                        onChange={addCommentText}
                        ref={(textarea)=>this.commentTextarea=textarea}
                    />
                    <button className="add-comment">Добавить</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addComment
};

export default connect(null, mapDispatchToProps)(CommentAddForm);
