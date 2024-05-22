import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from './src';

const App: FC = () => (
  <ThemeProvider>
    <SafeAreaView />
  </ThemeProvider>
);

export default App;
