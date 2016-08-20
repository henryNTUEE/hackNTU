import React, {Component, PropTypes} from 'react';
import { connect } from 'react-router';
import {Link} from 'react-router';
import { fetchWeather } from '../actions/index';
import {request_yelp} from '../actions/yelp';
import Geosuggest from '../GeoSuggest/Geosuggest';


// <div>City Detail {this.props.params.name} {this.props.params.lon1} {this.props.params.lat1}</div>

class RootIndex extends Component {

	constructor(props) {
    	super(props);

    	this.state = { term: '' };

    	this.onInputChange = this.onInputChange.bind(this);
    	
  	}

  	onInputChange(event) {
    	this.setState({ term: event.target.value });
  	}
	

	
	render(){
		var fixtures = [];
		
		return (
			
			<div>
				
				<Geosuggest
					
					placeholder="Enter a place"
					onChange={this.onInputChange}
					fixtures={fixtures}
					initialValue={this.state.term}
					location={new google.maps.LatLng(121,25) }
					radius="20"
				/>
				
			</div>
			
		);
	}

}


function mapStateToProps(state) {  
  return {city: state.city}
}

export default RootIndex;