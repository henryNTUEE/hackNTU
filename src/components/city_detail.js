import React, {Component, PropTypes} from 'react';
import { connect } from 'react-router';
import {Link} from 'react-router';
import { fetchWeather } from '../actions/index';


class CityDetail extends Component {

	render(){
		console.log(this.params);

		return (

			<div>City Detail {this.props.params.name} {this.props.params.lon1} {this.props.params.lat1}</div>
		);
	}
}


function mapStateToProps(state) {
  return {city: state.city}
}

export default CityDetail;