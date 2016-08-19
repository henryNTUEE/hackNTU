import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import RootIndex from './components/root_index';
import WeatherIndex from './components/weather_index';
import Geosuggest from './GeoSuggest/Geosuggest';



export default (
	<Route path="/" component={App} >
		<IndexRoute component={RootIndex} />
		<Route path="weather/:lat/:lng" component={WeatherIndex} handler={Geosuggest}/>
	</Route>
);

//this.props.params.id
//parameter url