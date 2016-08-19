import React, {Component, PropTypes} from 'react';
import { connect } from 'react-router';
import {Link} from 'react-router';
import { fetchWeather } from '../actions/index';
import Geosuggest from 'react-geosuggest';


// <div>City Detail {this.props.params.name} {this.props.params.lon1} {this.props.params.lat1}</div>

class CityDetail extends Component {

	constructor(props) {
    	super(props);

    	this.state = { term: this.props.params.name };

    	this.onInputChange = this.onInputChange.bind(this);
    	//this.onFormSubmit = this.onFormSubmit.bind(this);
  	}

  	onInputChange(event) {
    	this.setState({ term: event.target.value });
  	}
	
	
	render(){
		var fixtures = [
      {label: 'Old Elbe Tunnel, Hamburg', location: {lat: 53.5459, lng: 9.966576}},
      {label: 'Reeperbahn, Hamburg', location: {lat: 53.5495629, lng: 9.9625838}},
      {label: 'Alster, Hamburg', location: {lat: 53.5610398, lng: 10.0259135}}
    ];
		
		return (
			
			<div>
				<Geosuggest
					placeholder="Enter a place"
					//onFocus={this.onFocus}
					//onBlur={this.onBlur}
					onChange={this.onInputChange}
					fixtures={fixtures}
					initialValue={this.state.term}
					//onSuggestSelect={this.onSuggestSelect}
					//onSuggestNoResults={this.onSuggestNoResults}
					location={new google.maps.LatLng(this.props.params.lat1,this.props.params.lon1) }
					radius="20"
				/>
			</div>
			
		);
	}

}


function mapStateToProps(state) {  
  return {city: state.city}
}

export default CityDetail;