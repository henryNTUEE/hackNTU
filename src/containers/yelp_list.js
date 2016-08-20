import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

class YelpList extends Component {
  
  render() {
  	if (!this.props.yelp){
  		
  	}
  	else {
  		console.log(this.props.yelp);
  	}
    return (
     <div>
      	
     </div>
    );
  }
}



function mapStateToProps(state) {

  return {yelp: state.yelp}
}

export default connect(mapStateToProps)(YelpList);
