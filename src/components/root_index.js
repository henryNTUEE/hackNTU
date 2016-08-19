import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

class Root extends Component {
	componentWillMount(){
		console.log('good time'); 
	}


  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default Root; 