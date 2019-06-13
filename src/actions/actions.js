import { FETCH_CITIES, NEW_CITY } from './types';

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