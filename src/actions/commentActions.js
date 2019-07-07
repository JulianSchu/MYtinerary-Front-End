import { CO_FETCHING, CO_FETCHED, NEW_COMMENT, NEW_COMMENT_SUCCESS, NEW_COMMENT_FAIL, NEW_COMMENT_RESET } from './types';
import axios from 'axios';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const fetchComments = (itId) => dispatch => {
    dispatch({
        type: CO_FETCHING
    })
        
    fetch(`http://localhost:5000/api/comments/`)
        .then(response => response.json())
        .then(result => dispatch({
            type: CO_FETCHED,
            payload: result
        })
        )
        .catch(e => console.log(e));
    }

export const writeNewCo = ({ userName, userId, profilPic, comment, itId, created }) => (dispatch, getState) => {
        dispatch({
          type: NEW_COMMENT
        })

        const body = JSON.stringify({ userName, userId, profilPic, comment, itId, created });

        axios.post('http://localhost:5000/api/comments', body, tokenConfig(getState))
          .then(res => {
                dispatch({
                    type: NEW_COMMENT_SUCCESS,
                    payload: res.data
            })
                dispatch({
                    type: NEW_COMMENT_RESET
            })
        })
          .catch(err =>{
              dispatch(returnErrors(err.response.data, err.response.status, 'NEW_COMMENT_FAIL'))
              dispatch({
                  type: NEW_COMMENT_FAIL
              });
          })
}

