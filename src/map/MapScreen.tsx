import React, {FC, useContext, useMemo} from 'react';
import {DELIVERY_DELAY_THRESHOLD, Severity, ShipmentContext} from '../data';
import {FloatingBackButton} from './FloatingBackButton.tsx';
import {FullscreenLayout} from '../layout';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList, Routes} from '../navigation';
import {Map} from './Map.tsx';

export const MapScreen: FC = () => {
  const {
    params: {shipmentId},
  } = useRoute<RouteProp<RootStackParamList, Routes.Map>>();

  const {shipments, volume, traffic, weather} = useContext(ShipmentContext);

  const delay = useMemo(
    () =>
      [volume, traffic, weather].reduce((prev, curr) => {
        if (curr === Severity.HEAVY) {
          return prev + 30;
        }

        return curr === Severity.MEDIUM ? prev + 10 : prev;
      }, 0),
    [traffic, volume, weather],
  );

  const shipment = useMemo(
    () => shipments.find(s => s.id === shipmentId),
    [shipmentId, shipments],
  );

  return (
    <FullscreenLayout aria-label="Map Screen">
      <FloatingBackButton />
      {shipment && (
        <Map shipment={shipment} delay={delay >= DELIVERY_DELAY_THRESHOLD} />
      )}
    </FullscreenLayout>
  );
};
