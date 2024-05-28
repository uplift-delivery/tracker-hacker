import '@testing-library/react-native/extend-expect';

// Navigation
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Maps
jest.mock('react-native-maps', () => {
  const React = require('react');
  const {View} = require('tamagui');
  const MockMapView = React.forwardRef((props: any, _: any) => (
    <View {...props}>{props.children}</View>
  ));

  return {
    __esModule: true,
    default: MockMapView,
    Marker: MockMapView,
  };
});

// Routes
jest.mock('react-native-maps-routes', () => {
  const {View} = require('tamagui');
  const MockView = (props: any) => <View>{props.children}</View>;

  return {
    __esModule: true,
    MapViewRoute: MockView,
  };
});
