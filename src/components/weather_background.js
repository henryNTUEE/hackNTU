import React from 'react';
import { Component } from 'react';
import WeatherIndex from './weather_index';

class WeatherBackground extends Component {
  render() {
    return (
      <div className="weather_background">

      	<WeatherIndex />
      </div>
    );
  }
}

export default WeatherBackground; 