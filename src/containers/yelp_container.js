import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { bindActionCreators } from 'redux';
import {request_yelp} from '../actions/yelp';

class YelpContainer extends Component {
	constructor(props) {
    super(props);

    this.state = { term: '' };

    
  }

  handleClick(a) {
  	
  }


  render() {
  	
  	console.log(this.props.params);
    
    return (
    	<div>
      		<Link to="food" params={this.props.params}>
        		<span>
          			<button type="button" className="btn btn-secondary">Food</button>
				</span>       
   			</Link>
       
    	<span>
          <button type="button" onClick={() => this.handleClick('cafes')} className="btn btn-secondary">Cafe</button>
 		</span>

  		</div>
    );
  }
}

//weather: weather
//function mapStateToProps({weather}) {
//  return {weather}
//}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ request_yelp }, dispatch);
}

export default connect(null, mapDispatchToProps)(YelpContainer);