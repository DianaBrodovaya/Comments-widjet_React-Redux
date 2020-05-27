const initialState = {
    comments: [],
    loading: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COMMENTS_LOADED':
            return {
                comments: action.payload,
                loading: false
            };

        case 'ADD_COMMENT':
            return {
                comments: [...state.comments, action.comment]
            };

        case 'DELETE_COMMENT':
            return {
                comments: state.comments.filter(value => value.id !== action.id)
            };

        default:
            return state;
    }
};

export default reducer;