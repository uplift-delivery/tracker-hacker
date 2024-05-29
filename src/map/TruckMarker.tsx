import React, {FC, forwardRef} from 'react';
import {Marker} from 'react-native-maps';
import {Truck} from '@tamagui/lucide-icons';
import {styled} from 'tamagui';
import {MapMarkerProps} from 'react-native-maps/lib/MapMarker';

const TruckLocationIcon = styled(
  forwardRef((props: any, _: any) => <Truck {...props} />),
  {
    fill: 'white',
    color: 'royalblue',
  },
);

export const TruckMarker: FC<MapMarkerProps> = props => (
  <Marker
    flat={true}
    tappable={false}
    anchor={{x: 0.5, y: 0.5}}
    zIndex={2}
    {...props}>
    <TruckLocationIcon />
  </Marker>
);
