import { 
    USER_LOADING, 
    USER_LOADED, 
    AUTH_ERROR, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOGOUT_SUCCESS, 
    REGISTER_SUCESS,
    REGISTER_FAIL
} from './types';
import { returnErrors } from './errorActions';
import axios from 'axios'

export const loadUser = () => (dispatch, getState) => {
    dispatch({
        type: USER_LOADING
    });

    const token = getState().auth.token;

    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    if(token) {
        config.headers['x-access-token'] = token;
    }

    axios.get('http://localhost:5000/api/auth/user', tokenConfig(getState))
    .then(res => dispatch({
        type: USER_LOADED,
        payload: res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        })
    })
}

export const register = ({ userName, email, password, passwordConfirm, profilPic, country, tpAgreed }) => (dispatch, getState) => {
    const body = JSON.stringify({ userName, email, password, passwordConfirm, profilPic, country, tpAgreed });

    axios.post('http://localhost:5000/api/users', body, tokenConfig(getState))
    .then(res => dispatch({
        type: REGISTER_SUCESS,
        payload: res.data
    }))
    .catch(err =>{
        dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))
        dispatch({
            type: REGISTER_FAIL
        });    
    })
}

export const login = ({ email, password }) => (dispatch, getState) => {
    const body = JSON.stringify({ email, password });

    axios.post('http://localhost:5000/api/auth/', body, tokenConfig(getState))
    .then(res => dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
    }))
    .catch(err =>{
        dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'))
        dispatch({
            type: LOGIN_FAIL
        });    
    })
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT_SUCCESS
    })
}

export const tokenConfig = getState => {
    
    const token = getState().auth.token;

    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    if(token) {
        config.headers['x-access-token'] = token;
    }

    return config
}