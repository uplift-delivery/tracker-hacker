import React from 'react';
import {Shipment, ShipmentStatus, someFedExLocation, uplift} from '../data';
import {screen} from '@testing-library/react-native';
import {renderWithNavigator} from '../utils';
import {Map} from './Map.tsx';
import {DateTime} from 'luxon';

describe('Map', () => {
  test('shows truck marker when shipment is not delivered', () => {
    setupTest({status: ShipmentStatus.IN_TRANSIT});

    const truckMarker = screen.queryByLabelText('truck marker');
    expect(truckMarker).toBeVisible();
  });

  test('hides truck marker when shipment is delivered', () => {
    setupTest({status: ShipmentStatus.DELIVERED});

    const truckMarker = screen.queryByLabelText('truck marker');
    expect(truckMarker).toBeNull();
  });

  const setupTest = (shipmentProps: Partial<Shipment> = {}) => {
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

    return renderWithNavigator(<Map shipment={shipment} />);
  };
});
