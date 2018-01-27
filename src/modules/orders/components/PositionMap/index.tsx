import * as React from 'react'
import { GoogleMap, Marker } from 'react-google-maps'
import { ICarrierPosition } from '../../containers/PositionMap/index';

export interface IKeyedCarrierPosition extends ICarrierPosition {
  key: string;
}
export interface IPositionMapProps {
  carriers: IKeyedCarrierPosition[]
}

const PositionMap: React.SFC<IPositionMapProps> = ({
  carriers,
}) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {console.log(carriers)}
    {carriers && carriers.map((carrier) => (
      <Marker
        key={carrier.key}
        position={{ lat: carrier.lat, lng: carrier.lng }}
      />
    ))}
  </GoogleMap>

)

export default PositionMap
