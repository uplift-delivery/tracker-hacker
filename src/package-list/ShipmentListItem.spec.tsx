import React from 'react';
import {renderWithNavigator} from '../utils';
import {ShipmentListItem} from './ShipmentListItem.tsx';
import {Shipment, ShipmentStatus, someFedExLocation, uplift} from '../data';
import {DateTime} from 'luxon';
import {fireEvent, screen} from '@testing-library/react-native';

describe('ShipmentListItem', () => {
  let shipmentExample: Shipment;

  beforeEach(() => {
    shipmentExample = {
      coordinates: [],
      id: '123',
      trackingNumber: 'a123a123',
      weight: 2,
      location: uplift,
      origin: someFedExLocation,
      destination: uplift,
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

  test('hides delivery chip given shipment is not out for delivery', () => {
    setupTest({...shipmentExample, status: ShipmentStatus.DELIVERED});
    expect(screen.queryByLabelText('on time chip')).toBeNull();
  });

  test('shows delivery chip given shipment is out for delivery', () => {
    setupTest({...shipmentExample, status: ShipmentStatus.OUT_FOR_DELIVERY});
    expect(screen.queryByLabelText('on time chip')).toBeVisible();
  });

  test('shows delivery date given shipment is not out for delivery', () => {
    setupTest({...shipmentExample, status: ShipmentStatus.DELIVERED});
    expect(screen.queryByLabelText('delivery date')).toBeVisible();
    expect(screen.queryByLabelText('delivery date time')).toBeNull();
  });

  test('shows delivery date time given shipment is out for delivery', () => {
    setupTest({...shipmentExample, status: ShipmentStatus.OUT_FOR_DELIVERY});
    expect(screen.queryByLabelText('delivery date')).toBeNull();
    expect(screen.queryByLabelText('delivery date time')).toBeVisible();
  });

  test('hides precise delivery estimate given shipment is not out for delivery', () => {
    setupTest({...shipmentExample, status: ShipmentStatus.DELIVERED});
    expect(screen.queryByLabelText('date diff')).toBeNull();
  });

  test('shows precise delivery estimate given shipment is out for delivery', () => {
    setupTest({...shipmentExample, status: ShipmentStatus.OUT_FOR_DELIVERY});
    expect(screen.queryByLabelText('date diff')).toBeVisible();
  });

  const setupTest = (shipment: Shipment) =>
    renderWithNavigator(<ShipmentListItem shipment={shipment} />);
});
