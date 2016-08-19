<div>
				<Geosuggest
					placeholder="Enter a place"
					initialValue={this.props.params.name}
					onSuggestSelect={this.onSuggestSelect}
					location={new google.maps.LatLng(this.props.params.lat1,this.props.params.lon1) }
					radius="20"
				/>
			</div>