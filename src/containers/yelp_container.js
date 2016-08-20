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
    		<Link to="/">Back To Search</Link>
    		<span> Find Eating
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
   			</span>
   			<span> Find Living
   				<Link to={"Living/"+this.props.params.lat+"/"+this.props.params.lng} params={this.props.params}>
	        		<span>
	          			<button type="button" className="btn btn-secondary">Living</button>
					</span>       
	   			</Link>
   			</span>
   			<span> Find Transport
   				<Link to={"Transport/"+this.props.params.lat+"/"+this.props.params.lng} params={this.props.params}>
	        		<span>
	          			<button type="button" className="btn btn-secondary">Transport</button>
					</span>       
	   			</Link>
   			</span>
   			<span> Find Resorts
   				<Link to={"Resort/"+this.props.params.lat+"/"+this.props.params.lng} params={this.props.params}>
	        		<span>
	          			<button type="button" className="btn btn-secondary">Resort</button>
					</span>       
	   			</Link>
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