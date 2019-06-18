import { FETCH_ITINERARIES } from '../actions/types';

const initialState = {
    itineraries: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_ITINERARIES:
            console.log('itineraries fetched')
            return {
                ...state,
                itineraries: action.payload
            }
        default: return state;
    }
}