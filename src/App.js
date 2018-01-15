import React, { Component } from 'react'
import Map from './Map'
import Panel from './Panel'
import SearchBar from './SearchBar'
import Layer from './Layer'
import Source from './Source'

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      searchResult : null
    }
  } 

  handleSearch(searchResult) {

    const deepCloneOfSearchResult = JSON.parse(JSON.stringify(searchResult))
    this.setState({ deepCloneOfSearchResult })

  }

  render() {

    return (
    <div className="App">
      
      <header className="App-header">         
        <h1 className="App-title">Welcome to Blah!</h1>
      </header>   

      <div className="Blah">                 
        <Map>
          <Source id='sourceID' 
                  type='geojson' 
                  data={this.state.deepCloneOfSearchResult}/>          
          <Layer />
        </Map>
        <Panel />
        <SearchBar onSearch={(searchResult) => this.handleSearch(searchResult)}/> 
      </div>

    </div>
    )
  }
}

export default App
