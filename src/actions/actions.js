import { FETCH_CITIES, NEW_CITY, SEARCH, CLEAR_SEARCH, FETCH_CITY, FETCH_ITINERARIES } from './types';

export const fetchCities = () => dispatch => {
        console.log('fetching')
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
        console.log('search')
        console.log(e.target.value)
        dispatch({
          type: SEARCH,
          payload: e.target.value})
  }

export const clearSearch = () => dispatch => {
    console.log('clear')
    dispatch({
      type: CLEAR_SEARCH,
      payload: ''})
}

export const fetchCity = (chosenCity) => dispatch => {
  console.log('get city')
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
  console.log('get itineraries')
  fetch(`http://localhost:5000/api/itineraries/${chosenCity}`)
          .then(response => response.json())
          .then(result => dispatch({
              type: FETCH_ITINERARIES,
              payload: result
          })
          )
          .catch(e => console.log(e));
}


