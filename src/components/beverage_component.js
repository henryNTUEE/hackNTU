import React, { Component } from 'react';
import {Link} from 'react-router';
import {request_yelp} from '../actions/yelp';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Beverages extends Component {
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
          	<button type="button" onClick={() => this.handleClick('coffee')} className="btn btn-secondary">Coffee & Tea</button>
		    </span>
		    <span>
          	<button type="button" onClick={() => this.handleClick('(beer_and_wine')} className="btn btn-secondary">Alcohol</button>
		    </span>
        <span>
            <button type="button" onClick={() => this.handleClick('bubbletea')} className="btn btn-secondary">Bubble Tea</button>
        </span>
      </Link>  
      </div>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ request_yelp }, dispatch);
}

export default connect(null, mapDispatchToProps)(Beverages);
