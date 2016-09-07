import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';

export function signinUser ({ email, password }) {
  // redux-thunk allows you to return a function, you get direct access to the dispatch
  // therefore, we can dispatch this function anytime we want (no asynchronous calls)
  return function(dispatch){
    axios.post()

  }
  // Submit email/password to the server
  // If request is good, update state to indicate user is authenticated, save JWT token, redirect to the route/feature

  // If request is bad, show an error to the user
}
