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
      console.log(this.props.params);
    return (
   
      <div className="Food_background">
      <Link to={"YelpList/"+this.props.params.lat+"/"+this.props.params.lng} params={this.props.params}>
        <button type="button"  onClick={() => this.handleClick('newamerican')} className="luF_button1"> 
                            <div className="view third-effect">
                               <div className="mask">
                                AMERICA
                               </div>  
                            </div>
        </button>
        
        <button type="button"  onClick={() => this.handleClick('chinese')} className="luF_button2"> 
                            <div className="view third-effect">
                               <div className="mask">
                                Chinese
                               </div>  
                            </div>
        </button> 
        
        <button type="button"  onClick={() => this.handleClick('french')} className="luF_button3"> 
                            <div className="view third-effect">
                               <div className="mask">
                                France
                               </div>  
                            </div>
        </button> 
        
        
        <button type="button"  onClick={() => this.handleClick('german')} className="luF_button4"> 
                            <div className="view third-effect">
                               <div className="mask">
                                German
                               </div>  
                            </div>
        </button>  
        <button type="button"  onClick={() => this.handleClick('restaurants')} className="luF_button5"> 
                            <div className="view third-effect">
                               <div className="mask">
                                All
                               </div>  
                            </div>
        </button> 
        <button type="button"  onClick={() => this.handleClick('italian')} className="luF_button6"> 
                            <div className="view third-effect">
                               <div className="mask">
                                Italy
                               </div>  
                            </div>
        </button> 
        <button type="button"  onClick={() => this.handleClick('japanese')} className="luF_button7">
                            <div className="view third-effect">
                               <div className="mask">
                                Japan
                               </div>  
                            </div>
        </button> 
        <button type="button"  onClick={() => this.handleClick('korean')} className="luF_button8"> 
                                  <div className="view third-effect">
                                     <div className="mask">
                                      Korea
                                     </div>  
                                  </div>
        </button> 
        <button type="button"  onClick={() => this.handleClick('thai')} className="luF_button9"> 
                            <div className="view third-effect">
                               <div className="mask">
                                Thailand
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

export default connect(null, mapDispatchToProps)(Restaurants);
