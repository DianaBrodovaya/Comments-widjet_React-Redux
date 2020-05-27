import React, {Component} from 'react';
import CommentsListItem from "./comments-list-item";
import Spinner from "./spinner";
import {connect} from 'react-redux';
import {withCommentsService} from "./with-comments-service";
import {commentsLoaded, deleteComment} from "../actions";

class CommentsList extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {comments} = this.props;
        localStorage.setItem('arrayWithComments', JSON.stringify(comments));
    }

    componentDidMount() {
        const {commentsService, commentsLoaded} = this.props;
        commentsService.getComments()
            .then((data) => commentsLoaded(data))
            .catch((err) => console.error(err));
    }

    render() {
        const {comments, loading, deleteComment} = this.props;

        if (loading) {
            return <Spinner/>
        }
        return (
            <ul className="comments-list">
                {
                    comments.map((comment) => {
                        return (
                            <li className="comment" key={comment.id}><CommentsListItem comment={comment} deleteComment={deleteComment}/></li>
                        )
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = ({comments, loading}) => {
    return {comments, loading};
};

const mapDispatchToProps = {
    commentsLoaded,
    deleteComment
};

const compose = (...funcs) => (comp) => {
    return funcs.reduceRight(
        (wrapped, f) => f(wrapped), comp);
};

export default compose(
    withCommentsService(),
    connect(mapStateToProps, mapDispatchToProps)
)(CommentsList);


