import React, {FC, forwardRef} from 'react';
import {LatLng, Marker} from 'react-native-maps';
import {Truck} from '@tamagui/lucide-icons';
import {styled} from 'tamagui';

const TruckLocationIcon = styled(
  forwardRef((props: any, _: any) => <Truck {...props} />),
  {
    fill: 'white',
    color: 'royalblue',
  },
);

interface TruckMarkerProps {
  location: LatLng;
}

export const TruckMarker: FC<TruckMarkerProps> = ({location}) => (
  <Marker
    coordinate={location}
    flat={true}
    tappable={false}
    anchor={{x: 0.5, y: 0.5}}
    zIndex={2}>
    <TruckLocationIcon />
  </Marker>
);
