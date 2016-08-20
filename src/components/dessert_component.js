import React, { Component } from 'react';
import {Link} from 'react-router';
import {request_yelp} from '../actions/yelp';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Desserts extends Component {
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
      <Link to="YelpList" >
        <span>
            <button type="button" onClick={() => this.handleClick('desserts')} className="btn btn-secondary">Desserts</button>
        </span>
      	<span>
          	<button type="button" onClick={() => this.handleClick('bakeries')} className="btn btn-secondary">Bakeries</button>
		    </span>
		    <span>
          	<button type="button" onClick={() => this.handleClick('convenience')} className="btn btn-secondary">Convenience Stores</button>
		    </span>
        <span>
            <button type="button" onClick={() => this.handleClick('chocolate')} className="btn btn-secondary">Chocolatiers Shops</button>
        </span>
        <span>
            <button type="button" onClick={() => this.handleClick('cheese')} className="btn btn-secondary">Cheese Shops</button>
        </span>
        <span>
            <button type="button" onClick={() => this.handleClick('cakeshop')} className="btn btn-secondary">Cake Shop</button>
        </span>
        

      </Link>  
      </div>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ request_yelp }, dispatch);
}

export default connect(null, mapDispatchToProps)(Desserts);
