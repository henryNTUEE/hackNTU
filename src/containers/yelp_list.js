import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

class YelpList extends Component {
  	
  renderData() {
    return this.props.yelp.businesses.map((data) => {
   
      const name = data.id;
      const phone = data.phone;
      const image_url = data.image_url;
      const rating_icon = data.rating_img_url;
      const comment = data.snippet_text;
      const link = data.url;
      const coord = data.location.coordinate
      const API_KEY = 'AIzaSyDrIxhgi2I-4seOTW0rA8zrvRNzi_Bbz3w'
      const ROOT_URL=`https://maps.googleapis.com/maps/api/staticmap?key=${API_KEY}&zoom=16&size=150x150&maptype=roadmap`
      const mapUrl=`${ROOT_URL}&center=${coord.latitude},${coord.longitude}&markers=color:blue%7C${coord.latitude},${coord.longitude}`
      console.log(coord)


      return (
  		

        <tr key={name}>
        <td><a href={link}>{name}</a></td>
        <td><img src={image_url} /> </td>
        <td>{phone}</td>
        <td><img src={rating_icon} /></td> 
        <td><img src={mapUrl} /></td> 
        <td>{comment}</td> 
      </tr>

    );

 })}
  render() {
  	if ( typeof this.props.yelp.businesses !== "undefined"){
  		return (
  	
  		


        <div>
          <Link to={"yelp/" + this.props.params.lat + "/" + this.props.params.lng }  params={{lat: this.props.params.lat},{lng: this.props.params.lng}} >
              <button>Back</button>
          </Link>
          <table className="table table-hover">
          <thead>   
          <tr>
            <th>Name</th>
            <th>Picture</th>
            <th>Phone</th>
            <th>Rating</th>
            <th>Map</th>
            <th>Comment</th>
          </tr>
          </thead>
          <tbody>

          {this.renderData()}

          </tbody>
          </table>
        </div>


  		);

  	}
  	else {
  		return (
     	<div>
      	
     	</div>
    );
  	}
    
  }
}



function mapStateToProps(state) {

  return {yelp: state.yelp}
}

export default connect(mapStateToProps)(YelpList);