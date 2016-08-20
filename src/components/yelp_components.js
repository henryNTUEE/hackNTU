import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router';
import YelpContainer from '../containers/yelp_container';
import YelpList from '../containers/yelp_list';


class Yelp extends Component {
	

  render() {
    return (
      <div>
        <YelpContainer />
        <YelpList />
      </div>
    );
  }
}

export default Yelp; 