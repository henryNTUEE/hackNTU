import { FETCH_YELP } from '../actions/yelp';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_YELP:
  	console.log(action.payload.data);
    return action.payload.data;
  }
  return state; 
}
