import React from 'react';
import '../../public/style.scss';
import CommentsList from "../components/comments-list";
import CommentAddForm from "../components/comment-add-form";

const App = () => {
    return (
        <div className="main-wrapper">
            <h1>Комментарии</h1>
            <CommentsList />
            <CommentAddForm />
        </div>
    )
};

export default App;
