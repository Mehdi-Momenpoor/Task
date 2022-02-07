export const GlobalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.EDIT_TARGET_POST:
            return editPostHandler(state, action.payload)

        case ACTIONS.ON_STATEMENT:
            return editStatementHandler(state, action.payload);
        default:
            return state;
    }

}


export const ACTIONS = {
    EDIT_TARGET_POST: 'EDIT_TARGET_POST',
    ON_STATEMENT: 'ON_STATEMENT'
}

export const HANDLERS = {
    [ACTIONS.EDIT_TARGET_POST]: editPostHandler,

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
    }
}