import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

class YelpList extends Component {
  renderWeather() {
    
  }
// {this.props.weather.map(this.renderWeather)}
  render() {
    console.log(this.props.yelp);
    return (
     <div>
      hello
     </div>
    );
  }
}



function mapStateToProps(state) {
  return {yelp: state.yelp}
}

export default connect(mapStateToProps)(YelpList);
