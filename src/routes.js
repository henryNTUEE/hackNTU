import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Hi from './components/hi';
import Root from './components/root_index';



export default (
	<Route path="/" component={App} >
		<IndexRoute component={Root} />
		<Route path="hi1" component={Hi} />
	</Route>
);