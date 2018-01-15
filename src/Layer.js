import { Component } from 'react';

class Layer extends Component {

  componentWillReceiveProps(nextProps) {

    const map = nextProps.value;    

    if(this.props.value === null && nextProps.value !== null) {
    
      map.addLayer({
          "id": "point",
          "source": "single-point",
          "type": "circle",
          "paint": {
              "circle-radius": 10,
              "circle-color": "#007cbf"
          }
      });

      this.props.update(map)

    }  

  }

  render() {
    return (null)
  }
}

export default Layer;
