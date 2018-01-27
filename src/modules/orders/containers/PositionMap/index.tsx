import * as React from 'react'
import PositionMap from '../../components/PositionMap'
import { withGoogleMap, withScriptjs } from 'react-google-maps';
import { withSocket } from '../../../socket/hocs/with-socket';
import * as SocketIOClient from 'socket.io-client'
import { range } from 'lodash'

export interface IPosData {
  room: string;
  lat: number;
  lng: number;
}

export interface ICarrierPosition {
  lat: number;
  lng: number;
}
export interface IPositioMapContainerState {
  carriers: {
    [key: string]: ICarrierPosition,
  }
}

const objectToArray = (object: any) => object ? Object.keys(object).map((key) => ({
  key,
  ...object[key],
})) : []

class PositionMapContainer extends React.Component<{socket: SocketIOClient.Socket}, IPositioMapContainerState> {
  public state = {
    carriers: {},
  }
  public componentDidMount() {
    const {
      socket,
    } = this.props

    range(0, 5).forEach((i) => {
      socket.emit('join',  `room${i}`)
    })

    socket.on('pos', (data: IPosData) => {
      this.setState({
        carriers: {
          ...this.state.carriers,
          [data.room]: {
            lat: data.lat,
            lng: data.lng,
          },
        },
      })
    })
  }
  public render() {
    return (
      <PositionMap
        carriers={objectToArray(this.state.carriers)}
      />
    )
  }
}
export default withScriptjs(withGoogleMap(withSocket()(PositionMapContainer)))
