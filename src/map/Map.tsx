import {styled} from 'tamagui';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import React, {FC, useCallback, useRef} from 'react';
import {Shipment, ShipmentStatus} from '../data';
import {mapStyle} from './map-style.ts';
import {LocationMarker} from './LocationMarker.tsx';
import {TruckMarker} from './TruckMarker.tsx';
import {Route} from './Route.tsx';

const StyledMap = styled(MapView, {
  flex: 1,
});

interface MapProps {
  shipment: Shipment;
  delay: boolean;
}

export const Map: FC<MapProps> = ({shipment, delay}) => {
  const mapRef = useRef<MapView>(null);

  const setZoomLevel = useCallback(() => {
    const padding = 40;
    mapRef.current?.fitToCoordinates(
      [shipment.location, shipment.destination],
      {
        edgePadding: {
          top: padding,
          right: padding,
          bottom: padding,
          left: padding,
        },
        animated: false,
      },
    );
  }, [shipment.destination, shipment.location]);

  return (
    <StyledMap
      ref={mapRef}
      onLayout={setZoomLevel}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        ...shipment.location,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      customMapStyle={mapStyle}>
      <LocationMarker coordinate={shipment.destination} />

      {shipment.status !== ShipmentStatus.DELIVERED && (
        <TruckMarker shipment={shipment} delay={delay} />
      )}

      <Route origin={shipment.location} destination={shipment.destination} />
    </StyledMap>
  );
};
