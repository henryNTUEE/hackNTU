import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { GoogleMapLoader, GoogleMap,Marker } from 'react-google-maps';

import { fetchWeather } from '../actions/index';
import {request_yelp} from '../actions/yelp';
import Geosuggest from '../GeoSuggest/Geosuggest';
// <div>City Detail {this.props.params.name} {this.props.params.lon1} {this.props.params.lat1}</div>

class RootIndex extends Component {

	constructor(props) {
    	super(props);

    	this.state = { term: '',lat1:'', lng1:'',marker:{
            position: {
                    lat: 25.0112183,
                    lng: 121.52067570000001,
                  },
            key: `Taiwan`,
            defaultAnimation: 2,
          }
      };
    	this.onInputChange = this.onInputChange.bind(this);
    	this.onMapClick = this.onMapClick.bind(this);
  	}

  	onInputChange(event) {
    	this.setState({ term: event.target.value });
  	}
    onMapClick(event){
      console.log(event.latLng.lat());
      this.setState(
        {lat1: event.latLng.lat(),lng1: event.latLng.lng()}
      );
     // this.state.lat1 = event.latLng.lat();
     // this.state.lng1 = event.latLng.lng();
    }
	render(){
		var fixtures = [];
	  var pos={lat: this.state.lat1, lng:this.state.lng1};
		return (
			
			<div className = "Root_background">
				<div className = "wrapper">
					<h1><span className = "mark1">TSP</span></h1>
	      			<h3><span className = "mark_sub">Travel and Search for Papaya</span></h3>
					
					<Geosuggest
						hello_lat={this.state.lat1}
            hello_lng={this.state.lng1}
						placeholder="Enter a place"
						onChange={this.onInputChange}
						fixtures={fixtures}
						initialValue={this.state.term}
						location={new google.maps.LatLng(121,25) }
						radius="20"
          />
          <GoogleMapLoader
            containerElement={ <div style={{height: '100%'}} /> }
            googleMapElement={
               <GoogleMap 
                  defaultZoom={12} 
                  defaultCenter={{lat: 25.0152287, lng: 121.5315251}}
                  onClick={this.onMapClick}
                >
                   <Marker />
                   <Marker position={pos} />
                   
                </GoogleMap>
            }
          />
        </div>
			</div>
			
		);
	}

}


function mapStateToProps(state) {  
  return {city: state.city}
}

export default RootIndex;
