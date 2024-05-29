import React, {FC, PropsWithChildren} from 'react';
import {Sheet, SheetProps, styled} from 'tamagui';

const MenuContainer = styled(Sheet, {
  modal: true,
  snapPointsMode: 'fit',
  dismissOnSnapToBottom: true,
  zIndex: 100_000,
  animation: 'medium',
});

export const BottomMenu: FC<PropsWithChildren<SheetProps>> = ({
  children,
  open,
  onOpenChange,
}) => {
  const overlayStyle = {opacity: 0};

  return (
    <MenuContainer
      forceRemoveScrollEnabled={open}
      open={open}
      onOpenChange={onOpenChange}>
      <Sheet.Overlay
        animation="lazy"
        enterStyle={overlayStyle}
        exitStyle={overlayStyle}
      />
      <Sheet.Handle />
      <Sheet.Frame
        paddingTop="$4"
        paddingBottom="$6"
        justifyContent="center"
        alignItems="center"
        space="$5">
        {children}
      </Sheet.Frame>
    </MenuContainer>
  );
};
