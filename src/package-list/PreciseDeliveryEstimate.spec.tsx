import React from 'react';
import {renderWithNavigator} from '../utils';
import {PreciseDeliveryEstimate} from './PreciseDeliveryEstimate.tsx';
import {DateTime, Settings} from 'luxon';
import {act, screen} from '@testing-library/react-native';
import {tokensPlus} from '../theme';

describe('PreciseDeliveryEstimate', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  test('displays in singular minutes', () => {
    const now = DateTime.utc(2024, 5, 3, 14, 29);
    Settings.now = () => now.toMillis();

    setupTest(DateTime.utc(2024, 5, 3, 14, 30), 0);

    const diff = screen.getByLabelText('date diff');
    expect(diff).toHaveTextContent('1 minute away');
  });

  test('displays in plural minutes', () => {
    const now = DateTime.utc(2024, 5, 3, 14, 0);
    Settings.now = () => now.toMillis();

    setupTest(DateTime.utc(2024, 5, 3, 14, 30), 0);

    const diff = screen.getByLabelText('date diff');
    expect(diff).toHaveTextContent('30 minutes away');
  });

  test('displays in singular hours', () => {
    const now = DateTime.utc(2024, 5, 3, 13, 30);
    Settings.now = () => now.toMillis();

    setupTest(DateTime.utc(2024, 5, 3, 14, 30), 0);

    const diff = screen.getByLabelText('date diff');
    expect(diff).toHaveTextContent('1 hour away');
  });

  test('displays in plural hours', () => {
    const now = DateTime.utc(2024, 5, 3, 10, 0);
    Settings.now = () => now.toMillis();

    setupTest(DateTime.utc(2024, 5, 3, 14, 30), 0);

    const diff = screen.getByLabelText('date diff');
    expect(diff).toHaveTextContent('4 hours away');
  });

  test('adds delay to estimated date time', () => {
    const now = DateTime.utc(2024, 5, 3, 14, 0);
    Settings.now = () => now.toMillis();

    setupTest(DateTime.utc(2024, 5, 3, 14, 30), 30);

    const diff = screen.getByLabelText('date diff');
    expect(diff).toHaveTextContent('1 hour away');
  });

  test('shows in on time color given there is no delay', () => {
    const now = DateTime.utc(2024, 5, 3, 14, 0);
    Settings.now = () => now.toMillis();

    setupTest(DateTime.utc(2024, 5, 3, 14, 30), 0);

    const diff = screen.getByLabelText('date diff');
    expect(diff).toHaveStyle({color: tokensPlus.color.onTime.val});
  });

  test('shows in delay color given there is a delay', () => {
    const now = DateTime.utc(2024, 5, 3, 14, 0);
    Settings.now = () => now.toMillis();

    setupTest(DateTime.utc(2024, 5, 3, 14, 30), 30);

    const diff = screen.getByLabelText('date diff');
    expect(diff).toHaveStyle({color: tokensPlus.color.delayed.val});
  });

  test('updates time every 60 seconds', async () => {
    jest.useFakeTimers();
    const now = DateTime.utc(2024, 5, 3, 14, 0);
    Settings.now = () => now.toMillis();
    setupTest(DateTime.utc(2024, 5, 3, 14, 30), 0);

    const newNow = DateTime.utc(2024, 5, 3, 14, 15);
    Settings.now = () => newNow.toMillis();
    act(() => jest.advanceTimersByTime(60000));

    const diff = screen.getByLabelText('date diff');
    expect(diff).toHaveTextContent('15 minutes away');
  });

  const setupTest = (deliveryDate: DateTime, delay: number) =>
    renderWithNavigator(
      <PreciseDeliveryEstimate deliveryDate={deliveryDate} delay={delay} />,
    );
});
