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


  render() {
  	
  	//console.log(this.props.params);
    
    return (
    	<div>
      		<Link to={"Restaurant/"+this.props.params.lat+"/"+this.props.params.lng} params={this.props.params}>
        		<span>
          			<button type="button" className="btn btn-secondary">Restaurant</button>
				</span>       
   			</Link>
       		<Link to={"Beverage/"+this.props.params.lat+"/"+this.props.params.lng} params={this.props.params}>
        		<span>
          			<button type="button" className="btn btn-secondary">Beverage</button>
				</span>       
   			</Link>
   			<Link to={"Dessert/"+this.props.params.lat+"/"+this.props.params.lng} params={this.props.params}>
        		<span>
          			<button type="button" className="btn btn-secondary">Dessert</button>
				</span>       
   			</Link>

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