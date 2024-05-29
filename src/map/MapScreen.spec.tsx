import React from 'react';
import {renderWithNavigator} from '../utils';
import {MapScreen} from './MapScreen.tsx';
import {fireEvent, screen} from '@testing-library/react-native';
import {InitialState} from '@react-navigation/routers';
import {Routes} from '../navigation';
import {
  Shipment,
  ShipmentContext,
  ShipmentStatus,
  someFedExLocation,
  uplift,
} from '../data';
import {DateTime} from 'luxon';

describe('MapsScreen', () => {
  test('navigate back', () => {
    setupTest();

    const backButton = screen.getByLabelText('navigate back');
    fireEvent.press(backButton);

    const homeScreen = screen.queryByLabelText('Home Screen');
    expect(homeScreen).toBeVisible();
  });

  const setupTest = () => {
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
    };

    const history: InitialState = {
      index: 1,
      routes: [
        {name: Routes.Home},
        {name: Routes.Map, params: {shipmentId: shipment.id}},
      ],
    };

    return renderWithNavigator(
      <ShipmentContext.Provider
        value={{
          shipments: [shipment],
          setShipments: jest.fn(),
          updateShipmentLocation: jest.fn(),
        }}>
        <MapScreen />
      </ShipmentContext.Provider>,
      history,
    );
  };
});
