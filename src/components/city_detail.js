import React, {Component, PropTypes} from 'react';
import { connect } from 'react-router';
import {Link} from 'react-router';
import { fetchWeather } from '../actions/index';
import Geosuggest from '../GeoSuggest/Geosuggest';


// <div>City Detail {this.props.params.name} {this.props.params.lon1} {this.props.params.lat1}</div>

class CityDetail extends Component {

	constructor(props) {
    	super(props);

    	this.state = { term: '' };

    	this.onInputChange = this.onInputChange.bind(this);
    	//this.onFormSubmit = this.onFormSubmit.bind(this);
  	}

  	onInputChange(event) {
    	this.setState({ term: event.target.value });
  	}
	
	
	render(){
		var fixtures = [
     
    ];
		
		return (
			
			<div>
				<Geosuggest
					className="row-md-5"
					placeholder="Enter a place"
					//onFocus={this.onFocus}
					//onBlur={this.onBlur}
					onChange={this.onInputChange}
					fixtures={fixtures}
					initialValue={this.state.term}
					//onSuggestSelect={this.onSuggestSelect}
					//onSuggestNoResults={this.onSuggestNoResults}
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

export default CityDetail;