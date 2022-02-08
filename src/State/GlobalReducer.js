const initialState = {
    selectedPost: {},
    statement: {
        title: '',
        body: ''
    },
    posts: [],
}

export const GlobalReducer = (state = initialState, action) => {

    return (HANDLERS[action.type] || (() => state))(state, action.payload)
}


export const ACTIONS = {
    EDIT_TARGET_POST: 'EDIT_TARGET_POST',
    ON_STATEMENT: 'ON_STATEMENT',
    ON_POSTS: "ON_POSTS",
}

export const HANDLERS = {
    [ACTIONS.EDIT_TARGET_POST]: editPostHandler,
    [ACTIONS.ON_STATEMENT]: editStatementHandler,
    [ACTIONS.ON_POSTS]: onPostsHandler,
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

function onPostsHandler(state, payload) {
    return {
        ...state,
        posts: payload,
        statement: initialState.statement
    }
}