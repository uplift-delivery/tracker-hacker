import React, {FC, PropsWithChildren} from 'react';
import {styled, View} from 'tamagui';
import {SafeAreaView} from 'react-native-safe-area-context';

const LayoutSafeArea = styled(SafeAreaView, {
  flex: 1,
  backgroundColor: '$background',
});

const LayoutContainer = styled(View, {
  flex: 1,
  paddingTop: '$4',
  paddingBottom: '$4',
});

export const Layout: FC<PropsWithChildren> = ({children}) => (
  <LayoutSafeArea>
    <LayoutContainer>{children}</LayoutContainer>
  </LayoutSafeArea>
);
