import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Source extends Component {

 constructor(props) {

    super(props)
    this.update = this.props.update.bind(this)
    console.log("constructor")

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
    const map = this.props.value
    console.log(map)    
   
    /*map.addSource('single-point', {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": []
        }
    });*/
   
      map.addSource("single-point", {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [0, 0]
                }
            }]
        }
      });  

      map.flyTo({
        center: [
           0,0]
            
    });
   
    this.update(map)

    console.log("Added Source")

  }
  
  render() {
    return (
      <div>
       
      </div>
    )
  }
}