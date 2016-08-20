import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import RootIndex from './components/root_index';
import WeatherIndex from './components/weather_index';
import Geosuggest from './GeoSuggest/Geosuggest';
import Yelp from './components/yelp_components';
import YelpContainer from './containers/yelp_container';
import Restaurants from './components/restaurant';
import YelpList from './containers/yelp_list';
import WeatherBackground from './components/weather_background';


export default (
	<Route path="/" component={App} >
		<IndexRoute component={RootIndex} />
		<Route path="weather" component={WeatherBackground} handler={Geosuggest}/>
		<Route path="yelp/:lat/:lng" component={YelpContainer} handler={YelpContainer} />
		<Route path="food" component={Restaurants} handler={Restaurants} />
		<Route path="foodList" component={YelpList} handler={YelpList} />
	</Route>
);

