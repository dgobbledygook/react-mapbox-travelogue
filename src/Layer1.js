import React, { Component } from 'react';
import MapboxGl from 'mapbox-gl/dist/mapbox-gl.js'
import PropTypes from 'prop-types';

class Layer1 extends Component {

  constructor(props) {

    super(props)
    this.update = this.props.update.bind(this)
    console.log("constructor")

  }

  componentWillMount() {

    console.log("componentWillMount")

  }


  componentDidMount() {

    console.log("componentDidMount")

  }

 shouldComponentUpdate(nextProps) {

    console.log("isSourceLoaded")
    const map = nextProps.value
    
    if(map.getSource("single-point") == null)
      return true
    else 
      return false
 }

  componentDidUpdate(prevProps, prevState) { 

    console.log("componentDidUpdate")
    const map = this.props.value;    
    console.log(map)
    
    map.addLayer({
        "id": "point",
        "source": "single-point",
        "type": "circle",
        "paint": {
            "circle-radius": 10,
            "circle-color": "#007cbf"
        }
    });

    this.update(map)

    console.log("Added Layer")

  }

  render() {

    console.log("render")
    return (
      <div id="Layer1">
          
      </div>
    );
  }
}

export default Layer1;
