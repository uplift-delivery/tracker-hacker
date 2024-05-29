import React, {FC, forwardRef} from 'react';
import {Marker} from 'react-native-maps';
import {Circle} from '@tamagui/lucide-icons';
import {styled} from 'tamagui';
import {MapMarkerProps} from 'react-native-maps/lib/MapMarker';

const LocationIcon = styled(
  forwardRef((props: any, _: any) => <Circle {...props} />),
  {
    fill: 'dodgerblue',
    color: 'dodgerblue',
    size: '$0.75',
  },
);

export const LocationMarker: FC<MapMarkerProps> = props => (
  <Marker flat={true} tappable={false} anchor={{x: 0.5, y: 0.5}} {...props}>
    <LocationIcon />
  </Marker>
);
