import React, { Component } from 'react'

class Ledger extends Component {
	
	render() {

		return (

			<div className='map-overlay top'>
			    <div className='map-overlay-inner'>
			        <h2>Vacations &hearts; </h2>
			        <label id='trips'></label>
			        <input id='slider' type='range' min='0' max='11' step='1' />
			    </div>
		    </div>

		)
	}

}


export default Ledger