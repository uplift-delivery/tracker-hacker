import React, {FC} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {mapStyle} from './map-style.ts';
import {styled} from 'tamagui';
import {MapViewRoute} from 'react-native-maps-routes';

const someFedExLocation = {
  latitude: 41.574954467659246,
  longitude: -93.62492891722157,
};

const uplift = {
  latitude: 41.58394249647359,
  longitude: -93.63353541907415,
};

const StyledMap = styled(MapView, {
  width: '100%',
  height: '100%',
});

export const Map: FC = () => (
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
      apiKey="<API KEY>"
      strokeColor="red"
    />
  </StyledMap>
);
