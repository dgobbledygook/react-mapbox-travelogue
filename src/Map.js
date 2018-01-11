import React, { Component } from 'react'
import MapboxGl from 'mapbox-gl/dist/mapbox-gl.js'
import PropTypes from 'prop-types';
import Layer from './Layer1'
import Source from './Source'
  
class Map extends Component {

 constructor(props) {

    super(props)
    this.state = {
      map: null
    }
  }

  updateState(map) {

    this.setState( { map })

    console.log("State updated")
    console.log(map)

  }
  
  componentDidMount() {
    
    MapboxGl.accessToken = 'pk.eyJ1IjoiZGdvYmJsZWR5Z29vayIsImEiOiJjajh2ZHQ2YXYxMGIzMndycHl1bmh0Nmk3In0.Q1IWLvvAKZ0IExCLL4kDbQ'

    const map = new MapboxGl.Map({
      container: this.container,
      style: 'mapbox://styles/dgobbledygook/cj8vdtoycf6th2rqmjv2zfq8n'
    })

    map.on('load', function () {

      this.setState({ map })

     }.bind(this))

    
    console.log("componentDidMount")

  }

  render() {
    
    console.log("render!")
    return (
      <div className='Map' ref={(x) => { this.container = x }}>
        <Source value = {this.state.map} update = {this.updateState}/>          
        <Layer value = {this.state.map} update = {this.updateState} />
      </div>
    )
  }
}

export default Map