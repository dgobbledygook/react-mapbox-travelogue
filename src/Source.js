import  { Component } from 'react'

export default class Source extends Component {

  shouldComponentUpdate(nextProps) {

    const map = nextProps.value
    
    if(map.getSource("single-point") !== null && 
      (this.props.data !== nextProps.data))
      return true
    else 
      return false
 }

 componentWillReceiveProps(nextProps) {

    if(this.props.value === null && nextProps.value !== null) {
      const map = nextProps.value

      map.addSource('single-point', {
          "type": "geojson",
          "data": {
              "type": "FeatureCollection",
              "features": []
          }
      });

     this.props.update(map)

    }

  }

  componentWillUpdate(nextProps, nextState) { 

    const map = nextProps.value

    map.getSource('single-point').setData(nextProps.data)

    map.flyTo({
        center: nextProps.data.geometry.coordinates
    })

    this.props.update(map)

  }
  
  render() {
    return (null)
  }
}