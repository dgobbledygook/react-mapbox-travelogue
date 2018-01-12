import React, { Component } from 'react'

class Search extends Component {

	constructor(props) {

		super(props)
		this.updateFeed = this.props.updateFeed().bind(this)
	}

	_handleKeyPress = (e) => {
	    if (e.key === 'Enter') {
	        fetch('https://maps.googleapis.com/maps/api/place/textsearch/xml?key=AIzaSyDVpQMD4zPncTEbhKyV2OZVkES8KN9ZAcI&query=Stockholm', {
				method: 'get'
		    }).then(function(response) {
		    	console.log(response)		    	
		    }).catch(function(err) {
				console.log(err)
			});
	    }
	}

	render() {

		return (
			<div className='map-overlay top'>
			    <div className='map-overlay-inner'>
			        <input type="text" className="form-control form-control-lg" placeholder="Search" 
			        onKeyPress={this._handleKeyPress} />
			    </div>
		    </div>

		)
	}

}

export default Search