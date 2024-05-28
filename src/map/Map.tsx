import {styled} from 'tamagui';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import React, {FC} from 'react';
import {Shipment} from '../data';
import {mapStyle} from './map-style.ts';
import {LocationMarker} from './LocationMarker.tsx';
import {TruckMarker} from './TruckMarker.tsx';
import {Route} from './Route.tsx';

const StyledMap = styled(MapView, {
  flex: 1,
});

export const Map: FC<{shipment: Shipment}> = ({shipment}) => (
  <StyledMap
    provider={PROVIDER_GOOGLE}
    initialRegion={{
      ...shipment.location,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    customMapStyle={mapStyle}>
    <LocationMarker location={shipment.origin} />
    <LocationMarker location={shipment.destination} />
    <TruckMarker location={shipment.location} />
    <Route origin={shipment.origin} destination={shipment.destination} />
  </StyledMap>
);
