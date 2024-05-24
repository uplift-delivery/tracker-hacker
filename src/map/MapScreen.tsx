import React, {FC} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {mapStyle} from './map-style.ts';
import {styled} from 'tamagui';
import {MapViewRoute} from 'react-native-maps-routes';
import {ConfigKey, getConfigOrDefault} from '../config';
import {someFedExLocation, uplift} from '../data';

const StyledMap = styled(MapView, {
  width: '100%',
  height: '100%',
});

export const MapScreen: FC = () => (
  <StyledMap
    provider={PROVIDER_GOOGLE}
    initialRegion={{
      ...uplift,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    customMapStyle={mapStyle}>
    <MapViewRoute
      origin={someFedExLocation}
      destination={uplift}
      apiKey={getConfigOrDefault(ConfigKey.MAP_API_KEY)}
      strokeColor="red"
    />
  </StyledMap>
);
