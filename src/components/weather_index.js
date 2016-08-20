import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

class WeatherIndex extends Component {
	componentWillMount(){
		
	}


  render() {
    return (
       <div className = "weather_wrapper">
              <div className= "searchBar_wrapper" >
                 <SearchBar />
              </div>
              
              <div className= "weatherList_wrapper" >
                 <WeatherList />
              </div>
          </div>
    );
  }
}

export default WeatherIndex; 