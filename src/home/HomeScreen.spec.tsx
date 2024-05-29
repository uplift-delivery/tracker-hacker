import React from 'react';
import {HomeScreen} from './HomeScreen.tsx';
import {
  Shipment,
  ShipmentContext,
  ShipmentStatus,
  someFedExLocation,
  uplift,
} from '../data';
import {screen} from '@testing-library/react-native';
import {DateTime} from 'luxon';
import {renderWithNavigator} from '../utils';

describe('HomeScreen', () => {
  test('renders all packages in list', () => {
    const item: Shipment = {
      coordinates: [],
      destination: uplift,
      origin: someFedExLocation,
      id: '123',
      trackingNumber: 'a123a123',
      weight: 0,
      location: someFedExLocation,
      deliveryDate: DateTime.utc().plus({day: 3}),
      status: ShipmentStatus.IN_TRANSIT,
      sender: 'Grandma',
    };

    setupTest([item, {...item, id: '456'}, {...item, id: '789'}]);

    const packages = screen.getAllByLabelText('shipment');
    expect(packages.length).toBe(3);
  });

  const setupTest = (packages: Shipment[]) =>
    renderWithNavigator(
      <ShipmentContext.Provider
        value={{
          shipments: packages,
          setShipments: jest.fn(),
          updateShipmentLocation: jest.fn(),
        }}>
        <HomeScreen />
      </ShipmentContext.Provider>,
    );
});
