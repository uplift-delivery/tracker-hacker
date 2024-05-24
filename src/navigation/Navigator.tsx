import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../home';
import {MapScreen} from '../map';

const Stack = createNativeStackNavigator();

export const Navigator: FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{title: 'Welcome'}}
    />
    <Stack.Screen name="Map" component={MapScreen} />
  </Stack.Navigator>
);
