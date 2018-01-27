import * as React from 'react'
import PositionMap from '../containers/PositionMap'

const GOOGLE_MAPS_API_KEY = 'AIzaSyDgL01YZPA1MG3fJzOpaq6-eQhHvgLSFyk'

export default class PositionMapScreen extends React.Component {
  public render() {
    return (
      <PositionMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}
