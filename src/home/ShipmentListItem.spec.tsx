import React from 'react';
import {renderWithNavigator} from '../utils';
import {ShipmentListItem} from './ShipmentListItem.tsx';
import {Shipment, ShipmentStatus, uplift} from '../data';
import {DateTime} from 'luxon';
import {fireEvent, screen} from '@testing-library/react-native';

describe('ShipmentListItem', () => {
  let shipmentExample: Shipment;

  beforeEach(() => {
    shipmentExample = {
      id: '123',
      trackingNumber: 'a123a123',
      weight: 2,
      location: uplift,
      deliveryDate: DateTime.utc(2024, 5, 3),
      status: ShipmentStatus.DELIVERED,
      sender: 'Grandma',
    };
  });

  test('shows sender', () => {
    const sender = 'Grandma';

    setupTest({...shipmentExample, sender});

    expect(screen.queryByText(sender)).toBeVisible();
  });

  test('shows tracking number', () => {
    const trackingNumber = 'a123a123';

    setupTest({...shipmentExample, trackingNumber});

    expect(screen.queryByText(trackingNumber, {exact: false})).toBeVisible();
  });

  test('shows estimated delivery date', () => {
    const deliveryDate = DateTime.utc(2024, 5, 3);
    const status = ShipmentStatus.IN_TRANSIT;

    setupTest({...shipmentExample, deliveryDate, status});

    expect(
      screen.queryByText('Estimated Delivery Date: 5/3/2024'),
    ).toBeVisible();
  });

  test('shows delivery date', () => {
    const deliveryDate = DateTime.utc(2024, 5, 3);
    const status = ShipmentStatus.DELIVERED;

    setupTest({...shipmentExample, deliveryDate, status});

    expect(screen.queryByText('Delivery Date: 5/3/2024')).toBeVisible();
  });

  test('shows status', () => {
    const status = ShipmentStatus.DELIVERED;

    setupTest({...shipmentExample, status});

    expect(
      screen.queryByText(shipmentExample.status, {exact: false}),
    ).toBeVisible();
  });

  test('shows delivered icon', () => {
    const status = ShipmentStatus.DELIVERED;

    setupTest({...shipmentExample, status});

    const deliveredIcon = screen.getByLabelText('delivered icon');
    expect(deliveredIcon).toBeVisible();
  });

  test('shows shipped icon', () => {
    const status = ShipmentStatus.IN_TRANSIT;

    setupTest({...shipmentExample, status});

    const shippedIcon = screen.getByLabelText('shipped icon');
    expect(shippedIcon).toBeVisible();
  });

  test('navigates to map when shipment is pressed', () => {
    setupTest(shipmentExample);

    fireEvent.press(screen.getByLabelText('shipment'));

    expect(screen.queryByLabelText('Map Screen')).toBeVisible();
  });

  const setupTest = (shipment: Shipment) =>
    renderWithNavigator(<ShipmentListItem shipment={shipment} />);
});
