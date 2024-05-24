import React, {FC, PropsWithChildren} from 'react';
import {createTamagui, TamaguiProvider, Theme} from 'tamagui';
import {config} from '@tamagui/config/v3';

const tamaguiConfig = createTamagui(config);

type Conf = typeof tamaguiConfig;
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

export const ThemeProvider: FC<PropsWithChildren> = ({children}) => (
  <TamaguiProvider config={tamaguiConfig}>
    <Theme name="light">{children}</Theme>
  </TamaguiProvider>
);
