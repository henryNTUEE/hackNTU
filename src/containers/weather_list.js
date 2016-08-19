import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import {Link} from 'react-router';

class WeatherList extends Component {
  renderWeather(cityData) {
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
        <td>
        <Link to={"city/"+cityData.city.id}>
          <span>{name}</span>
        </Link>  
        </td>
      </tr>
      
    );
  }

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
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

//weather: weather
function mapStateToProps({weather}) {
  return {weather}
}

export default connect(mapStateToProps)(WeatherList);
