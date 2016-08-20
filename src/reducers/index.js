import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import CityReducer from './reducer_city';
import YelpReducer from './reducer_yelp';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  city: CityReducer,
  yelp: YelpReducer

});

export default rootReducer;
