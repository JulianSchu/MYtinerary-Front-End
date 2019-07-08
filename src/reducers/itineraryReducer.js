import { FETCH_ITINERARIES, IT_FETCHING, NEW_ITINERARY, CREATION_SUCCESS, CREATION_FAIL, CREATION_RESET } from '../actions/types';

const initialState = {
    itineraries: [],
    itFetching: false,
    newItinerary: {},
    created: null
}

export default function(state = initialState, action) {
    switch(action.type) {       
        case IT_FETCHING:
            return {
                ...state,
                itFetchting: true
            }
        case FETCH_ITINERARIES:
            return {
                ...state,
                itineraries: action.payload,
                itFetching: false
            }
        case NEW_ITINERARY:
                return {
                    ...state,
                    created: false
                }
        case CREATION_SUCCESS:
            return {
                ...state,
                newItinerary: action.payload,
                created: true
            }
        case CREATION_FAIL:
        case CREATION_RESET:
            return {
                ...state,
                newItinerary: {},
                created: null
            }
        default: return state;
    }
}
