import React from 'react';
import {renderWithNavigator} from '../utils';
import {DeliveryProgress} from './DeliveryProgress.tsx';
import {ShipmentStatus} from '../data';
import {screen} from '@testing-library/react-native';
import {tokensPlus} from '../theme';
import {ReactTestInstance} from 'react-test-renderer';

describe('DeliveryProgress', () => {
  test('label created', () => {
    setupTest(ShipmentStatus.LABEL_CREATED);

    const sections = screen.getAllByLabelText('progress section');

    assertBrandColor(sections[0]);
    assertDefaultColor(sections[1]);
    assertDefaultColor(sections[2]);
    assertDefaultColor(sections[3]);
  });

  test('in transit', () => {
    setupTest(ShipmentStatus.IN_TRANSIT);

    const sections = screen.getAllByLabelText('progress section');

    assertCompleteColor(sections[0]);
    assertBrandColor(sections[1]);
    assertDefaultColor(sections[2]);
    assertDefaultColor(sections[3]);
  });

  test('out for delivery', () => {
    setupTest(ShipmentStatus.OUT_FOR_DELIVERY);

    const sections = screen.getAllByLabelText('progress section');

    assertCompleteColor(sections[0]);
    assertCompleteColor(sections[1]);
    assertBrandColor(sections[2]);
    assertDefaultColor(sections[3]);
  });

  test('delivered', () => {
    setupTest(ShipmentStatus.DELIVERED);

    const sections = screen.getAllByLabelText('progress section');

    assertCompleteColor(sections[0]);
    assertCompleteColor(sections[1]);
    assertCompleteColor(sections[2]);
    assertCompleteColor(sections[3]);
  });

  const setupTest = (status: ShipmentStatus) =>
    renderWithNavigator(<DeliveryProgress status={status} />);

  const assertBrandColor = (section: ReactTestInstance) =>
    expect(section).toHaveStyle({
      backgroundColor: tokensPlus.color.brand.val,
    });

  const assertDefaultColor = (section: ReactTestInstance) =>
    expect(section).toHaveStyle({backgroundColor: '#D9D9D9'});

  const assertCompleteColor = (section: ReactTestInstance) =>
    expect(section).toHaveStyle({backgroundColor: tokensPlus.color.onTime.val});
});
