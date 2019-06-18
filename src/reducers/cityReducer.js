import { FETCH_CITIES, SEARCH, CLEAR_SEARCH, FETCH_CITY } from '../actions/types';

const initialState = {
    cities: [],
    chosenCity: [],
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
        case FETCH_CITY:
            console.log('get chosen City')
            console.log(action.payload)
            return {
                ...state,
                chosenCity: action.payload
            }
        default: return state;
    }
}