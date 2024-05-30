import React, {FC, PropsWithChildren} from 'react';
import {createTamagui, createTokens, TamaguiProvider, Theme} from 'tamagui';
import {config} from '@tamagui/config/v3';

const {tokens, ...restConfig} = config;
const {color, ...restTokens} = tokens;

export const tokensPlus = createTokens({
  color: {
    ...color,
    onTime: '#008A00',
    delayed: '#DE002E',
    brand: 'dodgerblue',
  },
  ...restTokens,
});

const tamaguiConfig = createTamagui({
  tokens: tokensPlus,
  ...restConfig,
});

type Conf = typeof tamaguiConfig;
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

export const ThemeProvider: FC<PropsWithChildren> = ({children}) => (
  <TamaguiProvider config={tamaguiConfig}>
    <Theme name="light">{children}</Theme>
  </TamaguiProvider>
);
