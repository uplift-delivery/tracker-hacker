import React from 'react';
import {renderWithTheme} from '../utils';
import {MapScreen} from './MapScreen.tsx';
import {fireEvent, screen} from '@testing-library/react-native';

const mockedGoBack = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      goBack: mockedGoBack,
    }),
  };
});

describe('MapsScreen', () => {
  test('navigate back', () => {
    setupTest();

    const backButton = screen.getByLabelText('navigate back');
    fireEvent.press(backButton);

    expect(mockedGoBack).toHaveBeenCalledTimes(1);
  });

  const setupTest = () => renderWithTheme(<MapScreen />);
});
