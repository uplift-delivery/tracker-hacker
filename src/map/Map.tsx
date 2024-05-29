import {styled} from 'tamagui';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {Shipment, ShipmentContext} from '../data';
import {mapStyle} from './map-style.ts';
import {LocationMarker} from './LocationMarker.tsx';
import {TruckMarker} from './TruckMarker.tsx';
import {Route} from './Route.tsx';

const StyledMap = styled(MapView, {
  flex: 1,
});

export const Map: FC<{shipment: Shipment}> = ({shipment}) => {
  const {updateShipmentLocation} = useContext(ShipmentContext);
  const [coordinateIndex, setCoordinateIndex] = useState(0);
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

  const resetTruck = useCallback(() => {
    setCoordinateIndex(0);
    updateShipmentLocation(shipment.id, shipment.coordinates[0]);
  }, [shipment.coordinates, shipment.id, updateShipmentLocation]);

  const updateTruck = useCallback(() => {
    updateShipmentLocation(shipment.id, shipment.coordinates[coordinateIndex]);
    setCoordinateIndex(coordinateIndex + 1);
  }, [
    coordinateIndex,
    shipment.coordinates,
    shipment.id,
    updateShipmentLocation,
  ]);

  const driveCoordinate = useCallback(
    () => () =>
      coordinateIndex > shipment.coordinates.length - 1
        ? resetTruck()
        : updateTruck(),
    [coordinateIndex, resetTruck, shipment.coordinates.length, updateTruck],
  );

  useEffect(() => {
    const timeout = setInterval(driveCoordinate(), 500);
    return () => clearInterval(timeout);
  }, [
    driveCoordinate,
    shipment.coordinates,
    shipment.id,
    updateShipmentLocation,
  ]);

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
      <TruckMarker coordinate={shipment.location} />
      <Route origin={shipment.location} destination={shipment.destination} />
    </StyledMap>
  );
};
