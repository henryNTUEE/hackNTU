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
import Beverages from './components/beverage_component';
import Desserts from './components/dessert_component';
import Livings from './components/living_component';
import Transports from './components/transport_component';
import Resorts from './components/resort_component';


export default (
	<Route path="/" component={App} >
		<IndexRoute component={RootIndex} />
		<Route path="weather" component={WeatherBackground} handler={Geosuggest}/>
		<Route path="yelp/:lat/:lng" component={YelpContainer} handler={YelpContainer} />
		<Route path="Restaurant/:lat/:lng" component={Restaurants} handler={Restaurants} />
		<Route path="YelpList/:lat/:lng" component={YelpList} handler={YelpList} />
		<Route path="Beverage/:lat/:lng" component={Beverages} handler={Beverages} />
		<Route path="Dessert/:lat/:lng" component={Desserts} handler={Desserts} />
		<Route path="Living/:lat/:lng" component={Livings} handler={Livings} />
		<Route path="Transport/:lat/:lng" component={Transports} handler={Transports} />
		<Route path="Resort/:lat/:lng" component={Resorts} handler={Resorts} />

	</Route>
);

