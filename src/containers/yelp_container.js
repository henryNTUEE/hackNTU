import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { bindActionCreators } from 'redux';
import {request_yelp} from '../actions/yelp';

class YelpContainer extends Component {
  

// {this.props.weather.map(this.renderWeather)}
  render() {
    this.props.request_yelp();
    return (
      <div>
      </div>
    );
  }
}

//weather: weather
//function mapStateToProps({weather}) {
//  return {weather}
//}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ request_yelp }, dispatch);
}

export default connect(null, mapDispatchToProps)(YelpContainer);