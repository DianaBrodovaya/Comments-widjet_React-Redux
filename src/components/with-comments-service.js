import React from 'react';
import {CommentsServiceConsumer} from "./comments-service-context";

export const withCommentsService = () => (Wrapped) => {

    return (props) => {
        return (
            <CommentsServiceConsumer>
                {
                    (commentsService) => {
                        return (<Wrapped {...props}
                                         commentsService={commentsService}/>);
                    }
                }
            </CommentsServiceConsumer>
        );
    }
};
