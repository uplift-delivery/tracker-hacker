import React from 'react';
import {renderWithNavigator} from '../../utils';
import {DeliveryStatusChip} from './DeliveryStatusChip.tsx';
import {screen} from '@testing-library/react-native';

describe('DeliveryStatusChip', () => {
  test('shows on time chip given there is no delay', () => {
    setupTest(false);

    const chip = screen.queryByLabelText('on time chip');
    expect(chip).toBeVisible();
  });

  test('shows delayed chip given there is a delay', () => {
    setupTest(true);

    const chip = screen.queryByLabelText('delayed chip');
    expect(chip).toBeVisible();
  });

  const setupTest = (delayed: boolean) =>
    renderWithNavigator(<DeliveryStatusChip delayed={delayed} />);
});
