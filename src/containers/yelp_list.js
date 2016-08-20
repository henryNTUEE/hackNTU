import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

class YelpList extends Component {
  	
  renderData() {
    return this.props.yelp.businesses.map((data) => {
   
      const name = data.id;
      const phone = data.phone;
      const image_url = data.image_url;
      const rating_icon = data.rating_img_url;
      const comment = data.snippet_text;
      const link = data.url;


      return (
  		<div>
     		
        	<form>
        		<div>
        			<a href={link}>{name}</a>
        			{phone}
        			<img src={image_url} />
        			<img src={rating_icon} />
        			{comment}
        		</div>
        	</form>
        </div>
      
    );
    });
  }


  render() {
  	if ( typeof this.props.yelp.businesses !== "undefined"){
  		return (
  		<div>
  			<Link to={"yelp/" + this.props.params.lat + "/" + this.props.params.lng }  params={{lat: this.props.params.lat},{lng: this.props.params.lng}} >
            	<button>Back</button>
        	</Link>
  			<div>
  				{this.renderData()}
  			</div>
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
