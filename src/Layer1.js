import React, { Component } from 'react';
import MapboxGl from 'mapbox-gl/dist/mapbox-gl.js'
import PropTypes from 'prop-types';

class Layer1 extends Component {

  constructor(props) {

    super(props)
    console.log("constructor")

  }

  componentWillMount() {

    console.log("componentWillMount")

  }


  componentDidMount() {

    console.log("componentDidMount")

  }

  componentDidUpdate(prevProps, prevState) { 

    console.log("componentDidUpdate")
    const map = this.props.value;    
    console.log("loaded")
    map.addLayer({
          "id": "terrain-data",
          "type": "line",
          "source": {
              type: 'vector',
              url: 'mapbox://mapbox.mapbox-terrain-v2'
          },
          "source-layer": "contour",
          "layout": {
              "line-join": "round",
              "line-cap": "round"
          },
          "paint": {
              "line-color": "#ff69b4",
              "line-width": 1
          }
     
    })

    this.props.update(map)

  }

  render() {

    console.log("render")
    return (
      <div id="Layer1">
          Hey, am layer1!
          
      </div>
    );
  }
}

export default Layer1;
