import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import itineraryReducer from './itineraryReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import commentReducer from './commentReducer';

export default combineReducers({
    cityList: cityReducer,
    itineraryList: itineraryReducer,
    error: errorReducer,
    auth: authReducer,
    comment: commentReducer
});