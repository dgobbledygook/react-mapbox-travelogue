import React, { Component } from 'react';
import Map from './Map'
import Ledger from './Ledger'

class App extends Component {
  
  constructor(props) {
    super(props)
  } 

  render() {
    return (
    <div className="App">
      <header className="App-header">         
        <h1 className="App-title">Welcome to Blah!</h1>
      </header>   
      <div className="Blah">     
        <Map>         
        </Map>
        <Ledger>
        </Ledger>
      </div>
    </div>
    )
  }
}

export default App;
