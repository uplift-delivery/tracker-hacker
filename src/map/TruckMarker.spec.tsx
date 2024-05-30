import React from 'react';
import {renderWithNavigator} from '../utils';
import {TruckMarker} from './TruckMarker.tsx';
import {Shipment, ShipmentStatus, someFedExLocation, uplift} from '../data';
import {DateTime} from 'luxon';
import {screen} from '@testing-library/react-native';
import {tokensPlus} from '../theme';

describe('TruckMarker', () => {
  test('shows on time color given there is no delay', () => {
    setupTest(false);

    const marker = screen.getByLabelText('truck icon');
    expect(marker).toHaveStyle({color: tokensPlus.color.onTime.val});
  });

  test('shows delay color given there is a delay', () => {
    setupTest(true);

    const marker = screen.getByLabelText('truck icon');
    expect(marker).toHaveStyle({color: tokensPlus.color.delayed.val});
  });

  const setupTest = (delay: boolean, shipmentProps: Partial<Shipment> = {}) => {
    const shipment: Shipment = {
      coordinates: [],
      id: '',
      weight: 4,
      trackingNumber: 'a123a123',
      location: someFedExLocation,
      origin: someFedExLocation,
      destination: uplift,
      deliveryDate: DateTime.utc().plus({day: 2}),
      status: ShipmentStatus.IN_TRANSIT,
      sender: 'Grandma',
      ...shipmentProps,
    };

    return renderWithNavigator(
      <TruckMarker shipment={shipment} delay={delay} />,
    );
  };
});
