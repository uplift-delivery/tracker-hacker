import React from 'react';
import {HomeScreen} from './HomeScreen.tsx';
import {ShipmentContext, someFedExLocation} from '../data';
import {Shipment} from '../data/Shipment.ts';
import {render, screen} from '@testing-library/react-native';
import {DateTime} from 'luxon';
import {ThemeProvider} from '../theme';

describe('HomeScreen', () => {
  test('renders all packages in list', () => {
    const item: Shipment = {
      id: '123',
      trackingNumber: 'a123a123',
      weight: 0,
      location: someFedExLocation,
      estimatedDelivery: DateTime.utc().plus({day: 3}),
    };

    setupTest([item, {...item, id: '456'}, {...item, id: '789'}]);

    const packages = screen.getAllByLabelText('package');
    expect(packages.length).toBe(3);
  });

  const setupTest = (packages: Shipment[]) =>
    render(
      <ThemeProvider>
        <ShipmentContext.Provider
          value={{shipments: packages, setShipments: jest.fn()}}>
          <HomeScreen />
        </ShipmentContext.Provider>
      </ThemeProvider>,
    );
});
