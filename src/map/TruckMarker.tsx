import React, {
  FC,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {Marker} from 'react-native-maps';
import {Truck} from '@tamagui/lucide-icons';
import {styled} from 'tamagui';
import {Shipment, ShipmentContext} from '../data';

const TruckLocationIcon = styled(
  forwardRef((props: any, _: any) => <Truck {...props} />),
  {
    fill: 'white',
    color: 'royalblue',
  },
);

interface TruckMarkerProps {
  shipment: Shipment;
}

export const TruckMarker: FC<TruckMarkerProps> = ({shipment}) => {
  const {updateShipmentLocation} = useContext(ShipmentContext);
  const [coordinateIndex, setCoordinateIndex] = useState(0);

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
    <Marker
      coordinate={shipment.location}
      flat={true}
      tappable={false}
      anchor={{x: 0.5, y: 0.5}}
      zIndex={2}
      aria-label="truck marker">
      <TruckLocationIcon />
    </Marker>
  );
};
