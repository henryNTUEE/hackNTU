import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import CityDetail from './components/city_detail';
import Root from './components/root_index';



export default (
	<Route path="/" component={App} >
		<IndexRoute component={Root} />
		<Route path="city/:name/:lon1/:lat1" component={CityDetail} handler={CityDetail}/>
	</Route>
);

//this.props.params.id
//parameter url