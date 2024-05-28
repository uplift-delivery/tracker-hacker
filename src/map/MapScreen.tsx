import React, {FC, useContext, useMemo} from 'react';
import {ShipmentContext} from '../data';
import {FloatingBackButton} from './FloatingBackButton.tsx';
import {FullscreenLayout} from '../layout';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList, Routes} from '../navigation';
import {Map} from './Map.tsx';

export const MapScreen: FC = () => {
  const {
    params: {shipmentId},
  } = useRoute<RouteProp<RootStackParamList, Routes.Map>>();

  const {shipments} = useContext(ShipmentContext);

  const shipment = useMemo(
    () => shipments.find(s => s.id === shipmentId),
    [shipmentId, shipments],
  );

  return (
    <FullscreenLayout aria-label="Map Screen">
      <FloatingBackButton />
      {shipment && <Map shipment={shipment} />}
    </FullscreenLayout>
  );
};
