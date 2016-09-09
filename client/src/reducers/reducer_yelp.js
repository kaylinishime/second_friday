import { FETCH_YELP } from '../actions/index'



export default function(state = [], action) {
  console.log('Action received', action);
  switch (action.type) {
    case FETCH_YELP:
      console.log(action.payload)
      return [ action.payload.data, ...state ];
  }
  return state;
}
