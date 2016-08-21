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
 

     	//	<Link to="/">Back To Search</Link>
    	//	<span> Find Eating   
    return (


    	     <div>
           <div className="fkBack">
            <Link to="/">Back To Search</Link>
            </div>
             <div className="Eating_background">

             <Link to={"Restaurant/"+this.props.params.lat+"/"+this.props.params.lng} params={this.props.params}>
          <button type="button" className="Eating_pos1"> 
                             Restaurant
                    </button>   
          </Link>
            <Link to={"Beverage/"+this.props.params.lat+"/"+this.props.params.lng} params={this.props.params}>
          <button type="button" className="Eating_pos2"> 
                             Beverage
                    </button>        
          </Link>
          <Link to={"Dessert/"+this.props.params.lat+"/"+this.props.params.lng} params={this.props.params}>
          <button type="button" className="Eating_pos3"> 
                             Dessert
                    </button>       
          </Link>
            </div> 


            <div className ="Living_background">
                <Link to={"Living/"+this.props.params.lat+"/"+this.props.params.lng} params={this.props.params}>
              <button type="button" className="Living_b"> 
                             Living
                    </button>       
          </Link>
 
            </div> 

            <div className ="Trans_background">
                <Link to={"Transport/"+this.props.params.lat+"/"+this.props.params.lng} params={this.props.params}>
              <button type="button" className="Trans_b"> 
                              Transport
                    </button>       
          </Link>
 
            </div> 

            <div className ="Resort_background">
                <Link to={"Resort/"+this.props.params.lat+"/"+this.props.params.lng} params={this.props.params}>
              <button type="button" className="Resort_b"> 
                              Resort
                    </button>       
          </Link>
 
            </div> 

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