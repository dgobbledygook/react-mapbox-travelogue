import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Map from './Map'
import Basemap from './Basemap'

class App extends Component {
 
  render() {
  
   console.log('render')

    return (
     <div className="App">
	       
  	    <Map />
        
	      <div className="Features">
        </div>
	         
      </div>
    );
  }
}


export default App;
