let nextId = 0;

const commentsLoaded = (newComments) => {
    nextId = newComments[newComments.length -1].id + 1;
    return {
        type: 'COMMENTS_LOADED',
        payload: newComments
    };
};

const addComment = (commentAuthor, commentText) => {
    const defaultCommentAuthor = 'Неизвестный комментатор';

    return {
        type: 'ADD_COMMENT',
        comment: createComment(commentAuthor, commentText)
    };

    function createComment(commentAuthor, commentText) {
        if (commentAuthor === undefined || commentAuthor.trim().length === 0) {
            commentAuthor = defaultCommentAuthor;
        }
        return {
            commentAuthor,
            commentText: commentText.replace(/<[^>]+>/g, ''),
            commentDate: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
            id: nextId++
        }
    }
};

const deleteComment = (id) => {
    return {
        type: 'DELETE_COMMENT',
        id: id
    }
};

export {
    commentsLoaded,
    addComment,
    deleteComment
}