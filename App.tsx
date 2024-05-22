import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {Map, ThemeProvider} from './src';

const App: FC = () => (
  <ThemeProvider>
    <SafeAreaView>
      <Map />
    </SafeAreaView>
  </ThemeProvider>
);

export default App;
