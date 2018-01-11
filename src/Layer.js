import { Component } from 'react'
import PropTypes from 'prop-types';
import merge from 'lodash.merge'

export default class Layer extends Component {

  static propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    sourceLayer: PropTypes.string,
    sourceId: PropTypes.string,
    paint: PropTypes.object,
    layout: PropTypes.object
  }

  static contextTypes = {
    map: PropTypes.object,
  }

  componentWillMount() {
    const { map } = this.context
    const {
      id,
      type,
      sourceLayer,
      sourceId,
      layout = {},
      paint = {},
      sliderValue,
      isLayerChecked
    } = this.props

    const layerId = `${sourceId}-${id}`
    const opacity = `${type}-opacity`

    map.addLayer({
      id: layerId,
      source: sourceId,
      type,
      layout
    })

  }

 
  componentWillUnmount() {
    const { map } = this.context
    const { id, sourceId } = this.props
    const layerId = `${sourceId}-${id}`
    map.removeLayer(layerId)
  }

  render() {
    return null
  }
}