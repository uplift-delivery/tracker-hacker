import React from 'react';
import {renderWithTheme} from '../utils';
import {ShipmentListItem} from './ShipmentListItem.tsx';
import {Shipment, ShipmentStatus, uplift} from '../data';
import {DateTime} from 'luxon';
import {screen} from '@testing-library/react-native';

describe('ShipmentListItem', () => {
  test('shows sender', () => {
    const shipment: Shipment = {
      id: '123',
      trackingNumber: 'a123a123',
      weight: 2,
      location: uplift,
      deliveryDate: DateTime.utc(2024, 5, 3),
      status: ShipmentStatus.DELIVERED,
      sender: 'Grandma',
    };

    setupTest(shipment);

    const sender = screen.queryByText(shipment.sender);
    expect(sender).toBeVisible();
  });

  test('shows tracking number', () => {
    const shipment: Shipment = {
      id: '123',
      trackingNumber: 'a123a123',
      weight: 2,
      location: uplift,
      deliveryDate: DateTime.utc(2024, 5, 3),
      status: ShipmentStatus.DELIVERED,
      sender: 'Grandma',
    };

    setupTest(shipment);

    const trackingNumber = screen.queryByText(shipment.trackingNumber, {
      exact: false,
    });

    expect(trackingNumber).toBeVisible();
  });

  test('shows estimated delivery date', () => {
    const shipment: Shipment = {
      id: '123',
      trackingNumber: 'a123a123',
      weight: 2,
      location: uplift,
      deliveryDate: DateTime.utc(2024, 5, 3),
      status: ShipmentStatus.IN_TRANSIT,
      sender: 'Grandma',
    };

    setupTest(shipment);

    const deliveryDate = screen.queryByText(
      'Estimated Delivery Date: 5/3/2024',
    );
    expect(deliveryDate).toBeVisible();
  });

  test('shows delivery date', () => {
    const shipment: Shipment = {
      id: '123',
      trackingNumber: 'a123a123',
      weight: 2,
      location: uplift,
      deliveryDate: DateTime.utc(2024, 5, 3),
      status: ShipmentStatus.DELIVERED,
      sender: 'Grandma',
    };

    setupTest(shipment);

    const deliveryDate = screen.queryByText('Delivery Date: 5/3/2024');
    expect(deliveryDate).toBeVisible();
  });

  test('shows status', () => {
    const shipment: Shipment = {
      id: '123',
      trackingNumber: 'a123a123',
      weight: 2,
      location: uplift,
      deliveryDate: DateTime.utc(2024, 5, 3),
      status: ShipmentStatus.DELIVERED,
      sender: 'Grandma',
    };

    setupTest(shipment);

    const status = screen.queryByText(shipment.status, {exact: false});
    expect(status).toBeVisible();
  });

  test('shows delivered icon', () => {
    const shipment: Shipment = {
      id: '123',
      trackingNumber: 'a123a123',
      weight: 2,
      location: uplift,
      deliveryDate: DateTime.utc(2024, 5, 3),
      status: ShipmentStatus.DELIVERED,
      sender: 'Grandma',
    };

    setupTest(shipment);

    const deliveredIcon = screen.getByLabelText('delivered icon');
    expect(deliveredIcon).toBeVisible();
  });

  test('shows shipped icon', () => {
    const shipment: Shipment = {
      id: '123',
      trackingNumber: 'a123a123',
      weight: 2,
      location: uplift,
      deliveryDate: DateTime.utc(2024, 5, 3),
      status: ShipmentStatus.IN_TRANSIT,
      sender: 'Grandma',
    };

    setupTest(shipment);

    const shippedIcon = screen.getByLabelText('shipped icon');
    expect(shippedIcon).toBeVisible();
  });

  const setupTest = (shipment: Shipment) =>
    renderWithTheme(<ShipmentListItem shipment={shipment} />);
});
