import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import {Link} from 'react-router';

class WeatherList extends Component {
  renderWeather() {
    return this.props.weather.map((cityData) => {
      console.log(cityData);
      const name = cityData.city.name;
      //function(weather) {...}
      const temps = _.map(cityData.list.map(weather => weather.main.temp),  (temp)=>temp-273);
      const pressures = cityData.list.map(weather => weather.main.pressure);
      const humidities = cityData.list.map(weather => weather.main.humidity);
      const { lon, lat } = cityData.city.coord;


      return (
  
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        
        <td><Chart data={temps} color="orange" units="C" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
        <td>{name}</td>
      </tr>
    );
    });
  }
// {this.props.weather.map(this.renderWeather)}
  render() {
    return (
      <table className="table table-hover">
        <thead>   
          <tr>
            <th>Map</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>

          {this.renderWeather()}
         
        
        </tbody>
      </table>
    );
  }
}

//weather: weather
//function mapStateToProps({weather}) {
//  return {weather}
//}

function mapStateToProps(state) {
  return {weather: state.weather}
}

export default connect(mapStateToProps)(WeatherList);
