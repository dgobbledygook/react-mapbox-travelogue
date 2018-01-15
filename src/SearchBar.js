
import React, { Component } from 'react'

class SearchBar extends Component {

	_handleKeyPress = (e) => {
	    
	    if (e.key === 'Enter') {

	    	if(this.searchKeyWord.value === "a") {
		    	this.props.onSearch({
	                "type": "Feature",
	                "geometry": {
	                    "type": "Point",
	                    "coordinates": [0, 0]
	                }
	            })
	        }
	        else if(this.searchKeyWord.value === "b") {
	            this.props.onSearch({
	                "type": "Feature",
	                "geometry": {
	                    "type": "Point",
	                    "coordinates": [20, 80]
	                }
	            })
	        }
	        else if(this.searchKeyWord.value === "c") {
	            this.props.onSearch({
	                "type": "Feature",
	                "geometry": {
	                    "type": "Point",
	                    "coordinates": [102, 60]
	                }
	            })
	        }		

	    }
	}

	render() {

		return (
			<div className='map-overlay top'>
			    <div className='map-overlay-inner'>
			        <input type="text" className="form-control form-control-lg" placeholder="Search" 
			        ref={(searchKeyWord) => this.searchKeyWord = searchKeyWord} onKeyPress={this._handleKeyPress} />
			    </div>
		    </div>
		)
	}

}

export default SearchBar