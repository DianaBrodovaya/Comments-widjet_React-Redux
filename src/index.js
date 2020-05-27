import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/app';
import CommentsService from "./services/comments-service";
import {CommentsServiceProvider} from "./components/comments-service-context";
import store from "./store";

const commentsService = new CommentsService();

ReactDOM.render(
    <Provider store={store}>
        <CommentsServiceProvider value={commentsService}>
            <App/>
        </CommentsServiceProvider>
    </Provider>,
    document.getElementById('root')
);