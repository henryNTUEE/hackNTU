import React, {Component} from 'react';

class CityDetail extends Component {
	render(){
		return (
			<div>City Detail {this.props.params.id}</div>
		);
	}
}

export default CityDetail;   