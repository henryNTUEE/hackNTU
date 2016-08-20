import { FETCH_YELP } from '../actions/yelp';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_YELP:
    return action.payload.data;
  }
  return state; 
}
