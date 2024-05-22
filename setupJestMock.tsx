jest.mock('react-native-maps', () => {
  const React = require('react');
  const {View} = require('tamagui');
  const MockMapView = React.forwardRef((props: any, _: any) => (
    <View {...props}>{props.children}</View>
  ));

  return {
    __esModule: true,
    default: MockMapView,
  };
});

jest.mock('react-native-maps-routes', () => {
  const {View} = require('tamagui');
  const MockView = (props: any) => <View>{props.children}</View>;

  return {
    __esModule: true,
    MapViewRoute: MockView,
  };
});
