import React, {FC} from 'react';
import {Navigator, ShipmentContextProvider, ThemeProvider} from './src';
import {NavigationContainer} from '@react-navigation/native';

const App: FC = () => (
  <ThemeProvider>
    <ShipmentContextProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </ShipmentContextProvider>
  </ThemeProvider>
);

export default App;
