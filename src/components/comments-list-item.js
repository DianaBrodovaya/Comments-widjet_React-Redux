import React from 'react';

const CommentsListItem = ({comment, deleteComment}) => {
    const {id, commentAuthor, commentText, commentDate} = comment;

    return (
        <div className="comment-wrapper">
            <p className="comment-author">{commentAuthor}</p>
            <p className="comment-text">{commentText}</p>
            <p className="comment-date">{commentDate}</p>
            <button
                className="delete-comment"
                onClick={() => deleteComment(id)}
            />
        </div>

    );
};

export default CommentsListItem;
