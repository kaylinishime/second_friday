import axios from 'axios';

export const FETCH_YELP = 'FETCH_YELP';

export function fetchYelp(term, location){
  const url = `http://localhost:3000/yelp?q=${term}&location=${location}`;
  const request = axios.get(url);
  
return {
  type: FETCH_YELP,
  payload: request
};

}
