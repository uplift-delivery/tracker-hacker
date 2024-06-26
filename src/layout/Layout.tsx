import React, {FC, PropsWithChildren, useCallback, useState} from 'react';
import {ScrollView, styled, View} from 'tamagui';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SafeAreaViewProps} from 'react-native-safe-area-context/src/SafeAreaView.tsx';
import {DevMenu} from '../dev-menu/DevMenu.tsx';

const LayoutSafeArea = styled(SafeAreaView, {
  flex: 1,
  backgroundColor: '#FAFAFA',
});

const LayoutContainer = styled(View, {
  flex: 1,
  paddingVertical: '$4',
  paddingHorizontal: '$4',
});

export const Layout: FC<PropsWithChildren<SafeAreaViewProps>> = ({
  children,
  ...props
}) => {
  const [devMenuOpen, setDevMenuOpen] = useState(false);
  const openDevMenu = useCallback(() => setDevMenuOpen(true), []);

  return (
    <LayoutSafeArea {...props}>
      <ScrollView>
        <LayoutContainer onLongPress={openDevMenu}>{children}</LayoutContainer>
      </ScrollView>

      <DevMenu open={devMenuOpen} setOpen={setDevMenuOpen} />
    </LayoutSafeArea>
  );
};

export const FullscreenLayout: FC<PropsWithChildren<SafeAreaViewProps>> = ({
  children,
  ...props
}) => (
  <LayoutSafeArea {...props}>
    <View flex={1}>{children}</View>
  </LayoutSafeArea>
);
