export const GlobalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.EDIT_TARGET_POST:
            return editPostHandler(state, action.payload)

        case ACTIONS.ON_STATEMENT:
            return editStatementHandler(state, action.payload);

        case ACTIONS.ON_POSTS: return onPostsHandler(state, action.payload);
        default:
            return state;
    }

}


export const ACTIONS = {
    EDIT_TARGET_POST: 'EDIT_TARGET_POST',
    ON_STATEMENT: 'ON_STATEMENT',
    ON_POSTS: "ON_POSTS"
}

export const HANDLERS = {
    [ACTIONS.EDIT_TARGET_POST]: editPostHandler,

}

function onPostsHandler(state, payload) {

    return {
        ...state,
        posts: payload,
        statement:initialState.statement

    }

}

function editPostHandler(state, payload) {
    return {
        ...state,
        selectedPost: payload.postData,
        statement: payload.postData,
    }
}

function editStatementHandler(state, payload) {
    return {
        ...state,
        statement: { ...state.statement, [payload.name]: payload.value }
    }
}

const initialState = {
    selectedPost: {},
    statement: {
        title: '',
        body: ''
    },
    posts: [],
}