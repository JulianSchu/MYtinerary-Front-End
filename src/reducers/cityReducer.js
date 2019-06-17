import { FETCH_CITIES, NEW_CITY, SEARCH, CLEAR_SEARCH } from '../actions/types';

const initialState = {
    cities: [],
    city: {},
    search: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_CITIES:
            console.log('i am here')
            return {
                ...state,
                cities: action.payload
            }
        case NEW_CITY:
            console.log('in construction')
        case SEARCH:
            console.log('router for search')
            return {
                ...state,
                search: action.payload
            }
        case CLEAR_SEARCH:
            console.log('clear search')
            return {
                ...state,
                search: action.payload
            }
        default: return state;
    }
}