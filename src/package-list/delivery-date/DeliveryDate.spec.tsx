import React from 'react';
import {renderWithNavigator} from '../../utils';
import {DeliveryDate} from './DeliveryDate.tsx';
import {DateTime} from 'luxon';
import {screen} from '@testing-library/react-native';

describe('DeliveryDate', () => {
  test('shows date shipment was delivered with qualifying label', () => {
    setupTest(DateTime.utc(2024, 5, 3), true);

    const deliveryDate = screen.getByLabelText('delivery date');
    expect(deliveryDate).toHaveTextContent('5/3/2024');
  });

  test('shows expected delivery date', () => {
    setupTest(DateTime.utc(2024, 5, 3), false);

    const deliveryDate = screen.getByLabelText('delivery date');
    expect(deliveryDate).toHaveTextContent('Expected Delivery 5/3/2024');
  });

  const setupTest = (deliveryDate: DateTime, delivered: boolean) =>
    renderWithNavigator(
      <DeliveryDate date={deliveryDate} delivered={delivered} />,
    );
});
