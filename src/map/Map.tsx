import React, {FC} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {mapStyle} from './map-style.ts';
import {styled} from 'tamagui';

const StyledMap = styled(MapView, {
  width: '100%',
  height: '100%',
});

export const Map: FC = () => (
  <StyledMap
    provider={PROVIDER_GOOGLE}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    customMapStyle={mapStyle}
    googleMapId="dfacb6a7c2b2d486" // doesn't work
  />
);
