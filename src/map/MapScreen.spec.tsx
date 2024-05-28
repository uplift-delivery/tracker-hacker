import React from 'react';
import {renderWithNavigator} from '../utils';
import {MapScreen} from './MapScreen.tsx';
import {fireEvent, screen} from '@testing-library/react-native';
import {InitialState} from '@react-navigation/routers';
import {Routes} from '../navigation';

describe('MapsScreen', () => {
  test('navigate back', () => {
    setupTest();

    const backButton = screen.getByLabelText('navigate back');
    fireEvent.press(backButton);

    const homeScreen = screen.queryByLabelText('Home Screen');
    expect(homeScreen).toBeVisible();
  });

  const setupTest = () => {
    const history: InitialState = {
      index: 1,
      routes: Object.values(Routes).map(route => ({name: route})),
    };

    return renderWithNavigator(<MapScreen />, history);
  };
});
