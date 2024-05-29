import {styled} from 'tamagui';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import React, {FC, useContext, useEffect} from 'react';
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

  const driveCoordinate = (i: number) => () => {
    if (i > shipment.coordinates.length - 1) {
      i = 0;
    }
    console.log(shipment.coordinates[i]);
    updateShipmentLocation(shipment.id, shipment.coordinates[i]);
    i++;
  };

  useEffect(() => {
    let i = 0;
    const timeout = setInterval(driveCoordinate(i), 1000); // 1000 milliseconds = 1 second
    return () => clearInterval(timeout);
  }, []);

  return (
    <StyledMap
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        ...shipment.location,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      customMapStyle={mapStyle}>
      <LocationMarker location={shipment.origin} />
      <LocationMarker location={shipment.destination} />
      <TruckMarker location={shipment.location} />
      <Route origin={shipment.origin} destination={shipment.destination} />
    </StyledMap>
  );
};
