import { combineReducers } from 'redux';
import YelpReducer from './reducer_yelp'

const rootReducer = combineReducers({
  yelp: YelpReducer
});

export default rootReducer;
