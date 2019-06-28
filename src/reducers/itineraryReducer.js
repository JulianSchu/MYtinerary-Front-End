import { FETCH_ITINERARIES, IT_FETCHING } from '../actions/types';

const initialState = {
    itineraries: [],
    itFetching: false
}

export default function(state = initialState, action) {
    switch(action.type) {       
        case IT_FETCHING:
            console.log('itineraries fetching')
            return {
                ...state,
                itFetchting: true
            }
        case FETCH_ITINERARIES:
            console.log('itineraries fetched')
            return {
                ...state,
                itineraries: action.payload,
                itFetching: false
            }
        default: return state;
    }
}
