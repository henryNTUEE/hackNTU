import React, { Component } from 'react';
import {Link} from 'react-router';
import {request_yelp} from '../actions/yelp';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Transports extends Component {
  constructor(props) {
    super(props);

    
    this.handleClick = this.handleClick.bind(this);
  }

	handleClick(a) {
		const lat = this.props.params.lat;
    const lng = this.props.params.lng;
    var default_parameters = {
        category_filter: a,
        ll: lat+ ","+ lng,
        radius_filter: '10000',
        sort: '1'
      };
      this.props.request_yelp(default_parameters);
  	}
  
  	render() {
      
    return (
   
      <div>
      <Link to={"YelpList/"+this.props.params.lat+"/"+this.props.params.lng} params={this.props.params}>
        <span>
            <button type="button" onClick={() => this.handleClick('transport')} className="btn btn-secondary">All Transportations</button>
        </span>
      	<span>
          	<button type="button" onClick={() => this.handleClick('travelservices')} className="btn btn-secondary">Travel Services</button>
		    </span>
        <span>
            <button type="button" onClick={() => this.handleClick('carrental')} className="btn btn-secondary">Car Rental</button>
        </span>
        <span>
            <button type="button" onClick={() => this.handleClick('motorcycle_rental')} className="btn btn-secondary">Motorcycle Rental</button>
        </span>
        

      </Link>  
      </div>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ request_yelp }, dispatch);
}

export default connect(null, mapDispatchToProps)(Transports);
