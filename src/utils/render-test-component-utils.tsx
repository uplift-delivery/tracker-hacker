import React from 'react';
import {render} from '@testing-library/react-native';
import {ThemeProvider} from '../theme';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../navigation';
import type {InitialState} from '@react-navigation/routers';

export const renderWithNavigator = (
  component: React.ReactElement,
  initialState?: InitialState,
) => {
  const Stack = createNativeStackNavigator();
  const routeName = 'TestRoute';
  const Component = () => component;

  return render(
    <ThemeProvider>
      <NavigationContainer initialState={initialState}>
        <Stack.Navigator
          initialRouteName={routeName}
          screenOptions={{headerShown: false}}>
          {Screens()}
          <Stack.Screen name={routeName} component={Component} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>,
  );
};
