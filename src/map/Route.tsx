import React, {FC} from 'react';
import {LatLng} from 'react-native-maps';
import {MapViewRoute} from 'react-native-maps-routes';
import {ConfigKey, getConfigOrDefault} from '../config';

interface RouteProps {
  origin: LatLng;
  destination: LatLng;
}

export const Route: FC<RouteProps> = ({origin, destination}) => (
  <MapViewRoute
    origin={origin}
    destination={destination}
    apiKey={getConfigOrDefault(ConfigKey.MAP_API_KEY)}
    strokeColor="$brand"
    strokeWidth={4}
    mode="DRIVE"
  />
);
