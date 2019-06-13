import { FETCH_CITIES, NEW_CITY } from '../actions/types';

const initialState = {
    cities: [],
    city: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_CITIES:
            console.log('i am here')
            return {
                ...state,
                cities: action.payload
            }
        default: return state;
    }
}