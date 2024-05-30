import React from 'react';
import {DateTime} from 'luxon';
import {renderWithNavigator} from '../../utils';
import {DeliveryDateTime} from './DeliveryDateTime.tsx';
import {screen} from '@testing-library/react-native';

describe('DeliveryDateTimeProps', () => {
  test('formats date and time', () => {
    setupTest(DateTime.utc(2024, 5, 3, 14, 30));

    const date = screen.getByLabelText('delivery date time');
    expect(date).toHaveTextContent('Expected Delivery 5/3/2024 at 2:30 PM');
  });

  const setupTest = (deliveryDate: DateTime) =>
    renderWithNavigator(<DeliveryDateTime date={deliveryDate} />);
});
