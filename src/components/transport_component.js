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
        sort: '2'
      };
      this.props.request_yelp(default_parameters);
  	}
  
  	render() {
      
    return (
   
      <div>
      <Link to={"YelpList/"+this.props.params.lat+"/"+this.props.params.lng} params={this.props.params}>
        
            <button type="button" onClick={() => this.handleClick('transport')} className="btn_all">
               <div className="view third-effect_transport">
               <div className="mask">
                All Transportations
               </div>
               </div> 
            </button>
        
          	<button type="button" onClick={() => this.handleClick('travelservices')} className="btn_travel">
               <div className="view third-effect_transport">
               <div className="mask">
                Travel Services
               </div>
               </div> 
            </button>
		    
            <button type="button" onClick={() => this.handleClick('carrental')} className="btn_car">
               <div className="view third-effect_transport">
               <div className="mask">
                Car Rental
               </div>
               </div> 
            </button>
        
            <button type="button" onClick={() => this.handleClick('motorcycle_rental')} className="btn_motor">
               <div className="view third-effect_transport">
               <div className="mask">
                Motorcycle Rental
               </div>
               </div> 
            </button>
        
        

      </Link>  
      </div>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ request_yelp }, dispatch);
}

export default connect(null, mapDispatchToProps)(Transports);
