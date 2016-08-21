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
   
      <div  className = "Desert_background">
      <Link to={"YelpList/"+this.props.params.lat+"/"+this.props.params.lng} params={this.props.params}>

        <button type="button"  onClick={() => this.handleClick('desserts')} className="desert_b1"> 
                 <div className="view third-effect">
                          <div className="mask">
                               Desserts
                          </div>  
                 </div>
        </button>

        <button type="button"  onClick={() => this.handleClick('chese')} className="desert_b2"> 
                 <div className="view third-effect">
           
                        <div className="mask">
                             Chese
                          </div>  
                 </div>
        </button>

        <button type="button"  onClick={() => this.handleClick('convenience')} className="desert_b3"> 
                 <div className="view third-effect">
                     
                        <div className="mask">
                               Convenience
                          </div>  
                 </div>
        </button>


        <button type="button"  onClick={() => this.handleClick('chocolate')} className="desert_b4"> 
                 <div className="view third-effect">
              
                        <div className="mask">
                               Chocolate
                          </div>  
                 </div>
        </button>


        <button type="button"  onClick={() => this.handleClick('bakeries')} className="desert_b5"> 
                 <div className="view third-effect">
                        <div className="mask">
                                 Bakeries
                          </div>  
                 </div>
        </button>


        <button type="button"  onClick={() => this.handleClick('cakeshop')} className="desert_b6"> 
                 <div className="view third-effect">
                  
                        <div className="mask">
                                  Cakeshop
                          </div>  
                 </div>
        </button>
        

      </Link>  
      </div>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ request_yelp }, dispatch);
}

export default connect(null, mapDispatchToProps)(Desserts);
