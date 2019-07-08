import { FETCH_CITIES, SEARCH, CLEAR_SEARCH, FETCH_CITY } from '../actions/types';

const initialState = {
    cities: [],
    chosenCity: [],
    search: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_CITIES:
            return {
                ...state,
                cities: action.payload
            }
        case SEARCH:
            return {
                ...state,
                search: action.payload
            }
        case CLEAR_SEARCH:
            return {
                ...state,
                search: action.payload
            }
        case FETCH_CITY:
            return {
                ...state,
                chosenCity: action.payload
            }
        default: return state;
    }
}