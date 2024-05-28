import React, {FC, JSX} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {HomeScreen} from '../home';
import {MapScreen} from '../map';

const Stack = createNativeStackNavigator();

export enum Routes {
  Home = 'Home',
  Map = 'Map',
}

type RootStackParamList = {
  [Routes.Home]: undefined;
  [Routes.Map]: {shipmentId: string};
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export const Navigator: FC = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    {Screens()}
  </Stack.Navigator>
);

export const Screens = (): JSX.Element => (
  <>
    <Stack.Screen name={Routes.Home} component={HomeScreen} />
    <Stack.Screen name={Routes.Map} component={MapScreen} />
  </>
);
