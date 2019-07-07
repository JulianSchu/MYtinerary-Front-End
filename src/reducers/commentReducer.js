import { CO_FETCHING, CO_FETCHED, NEW_COMMENT, NEW_COMMENT_SUCCESS, NEW_COMMENT_FAIL, NEW_COMMENT_RESET } from '../actions/types';

const initialState = {
    comments: [],
    isFetchingCo: false,
    newCommentCreated: null,
    newComment: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CO_FETCHING:
            return {
                ...state,
                isFetchingCo: true
            }
        case CO_FETCHED:
            return {
                ...state,
                comments: action.payload,
                isFetchingCo: false
            }
        case NEW_COMMENT:
            return {
                ...state,
                newCommentCreated: false
            }
        case NEW_COMMENT_SUCCESS:
            return {
                ...state,
                newComment: action.payload,
                newCommentCreated: true
            }        
        case NEW_COMMENT_FAIL:
        case NEW_COMMENT_RESET:
            return {
                ...state,
                newCommentCreated: null
            }
        default: return state;
    }
}