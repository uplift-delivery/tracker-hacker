import React from 'react';

jest.mock('react-native-maps', () => {
  const {View} = require('tamagui');
  const MockMapView = (props: any) => <View>{props.children}</View>;

  return {
    __esModule: true,
    default: MockMapView,
  };
});
