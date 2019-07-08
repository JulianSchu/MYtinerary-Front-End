import { FETCH_CITIES, SEARCH, CLEAR_SEARCH, FETCH_CITY, FETCH_ITINERARIES, IT_FETCHING, NEW_ITINERARY, CREATION_FAIL, CREATION_SUCCESS, CREATION_RESET } from './types';
import axios from 'axios';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const fetchCities = () => dispatch => {
        fetch('http://localhost:5000/api/cities/')
          .then(response => response.json())
          .then(result => dispatch({
              type: FETCH_CITIES,
              payload: result
          })
          )
          .catch(e => console.log(e));
    }

export const getSearch = (e) => dispatch => {
        dispatch({
          type: SEARCH,
          payload: e.target.value})
  }

export const clearSearch = () => dispatch => {
    dispatch({
      type: CLEAR_SEARCH,
      payload: ''})
}

export const fetchCity = (chosenCity) => dispatch => {
  fetch(`http://localhost:5000/api/cities/ChosenCity/${chosenCity}`)
          .then(response => response.json())
          .then(result => dispatch({
              type: FETCH_CITY,
              payload: result
          })
          )
          .catch(e => console.log(e));
}

export const fetchItineraries = (chosenCity) => dispatch => {
  dispatch({
    type: IT_FETCHING
  })

  fetch(`http://localhost:5000/api/itineraries/${chosenCity}`)
          .then(response => response.json())
          .then(result => dispatch({
              type: FETCH_ITINERARIES,
              payload: result
          })
          )
          .catch(e => console.log(e));
}

export const createNewItinerary = ({ title, city, cityId, country, userName, profilPic, duration, price, activities, hashtag }) => (dispatch, getState) => {
        dispatch({
          type: NEW_ITINERARY
        })

        const body = JSON.stringify({ title, city, cityId, country, userName, profilPic, duration, price, activities, hashtag });

        axios.post('http://localhost:5000/api/itineraries', body, tokenConfig(getState))
          .then(res => dispatch({
              type: CREATION_SUCCESS,
              payload: res.data
          }))
          .catch(err =>{
              dispatch(returnErrors(err.response.data, err.response.status, 'CREATION_FAIL'))
              dispatch({
                  type: CREATION_FAIL
              });    
          })
}

export const resetCreation = () => dispatch => {
    dispatch({
      type: CREATION_RESET
    });    
}


