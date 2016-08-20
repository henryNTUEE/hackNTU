import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

class YelpList extends Component {
  
  render() {

    return (
     <div>
      {this.props.yelp.total}  
     </div>
    );
  }
}



function mapStateToProps(state) {

  return {yelp: state.yelp}
}

export default connect(mapStateToProps)(YelpList);
