import React, {FC, forwardRef} from 'react';
import {LatLng, Marker} from 'react-native-maps';
import {Circle} from '@tamagui/lucide-icons';
import {styled} from 'tamagui';

const LocationIcon = styled(
  forwardRef((props: any, _: any) => <Circle {...props} />),
  {
    fill: 'dodgerblue',
    color: 'dodgerblue',
    size: '$0.75',
  },
);

interface LocationMarkerProps {
  location: LatLng;
}

export const LocationMarker: FC<LocationMarkerProps> = ({location}) => (
  <Marker
    coordinate={location}
    flat={true}
    tappable={false}
    anchor={{x: 0.5, y: 0.5}}>
    <LocationIcon />
  </Marker>
);
