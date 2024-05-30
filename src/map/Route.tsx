import React, {FC} from 'react';
import {LatLng} from 'react-native-maps';
import {MapViewRoute} from 'react-native-maps-routes';
import {ConfigKey, getConfigOrDefault} from '../config';
import {getTokens} from 'tamagui';

interface RouteProps {
  origin: LatLng;
  destination: LatLng;
}

export const Route: FC<RouteProps> = ({origin, destination}) => {
  const {
    color: {brand},
  } = getTokens();

  return (
    <MapViewRoute
      origin={origin}
      destination={destination}
      apiKey={getConfigOrDefault(ConfigKey.MAP_API_KEY)}
      strokeColor={brand.val}
      strokeWidth={4}
      mode="DRIVE"
    />
  );
};
