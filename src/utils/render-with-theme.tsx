import React from 'react';
import {render} from '@testing-library/react-native';
import {ThemeProvider} from '../theme';

export const renderWithTheme = (component: React.ReactElement) =>
  render(<ThemeProvider>{component}</ThemeProvider>);
