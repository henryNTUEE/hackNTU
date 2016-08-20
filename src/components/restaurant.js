import React, { Component } from 'react';
import {Link} from 'react-router';
import {request_yelp} from '../actions/yelp';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Restaurants extends Component {
  constructor(props) {
    super(props);

    
    this.handleClick = this.handleClick.bind(this);
  }

	handleClick(a) {
		var default_parameters = {
    		category_filter: a,
    		ll: '25.0330623,121.5609975',
    		radius_filter: '10000',
    		sort: '2'
  		};
      this.props.request_yelp(default_parameters);
  	}
  
  	render() {
      console.log(this.props.params);
    return (
   
      <div>
      <Link to="foodList" >
      	<span>
          	<button type="button" onClick={() => this.handleClick('japanese')} className="btn btn-secondary">Japan</button>
		    </span>
		    <span>
          	<button type="button" onClick={() => this.handleClick('german')} className="btn btn-secondary">German</button>
		    </span>
        <span>
            <button type="button" onClick={() => this.handleClick('chinese')} className="btn btn-secondary">Chinese</button>
        </span>
        <span>
            <button type="button" onClick={() => this.handleClick('italian')} className="btn btn-secondary">Italy</button>
        </span>
        <span>
            <button type="button" onClick={() => this.handleClick('french')} className="btn btn-secondary">France</button>
        </span>
        <span>
            <button type="button" onClick={() => this.handleClick('korean')} className="btn btn-secondary">Korea</button>
        </span>
        <span>
            <button type="button" onClick={() => this.handleClick('newamerican')} className="btn btn-secondary">US</button>
        </span>
        <span>
            <button type="button" onClick={() => this.handleClick('thai')} className="btn btn-secondary">Thailand</button>
        </span>
        <span>
            <button type="button" onClick={() => this.handleClick('restaurants')} className="btn btn-secondary">All</button>
        </span>

      </Link>  
      </div>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ request_yelp }, dispatch);
}

export default connect(null, mapDispatchToProps)(Restaurants);
