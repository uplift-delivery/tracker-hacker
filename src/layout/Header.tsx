import React, {FC, PropsWithChildren} from 'react';
import {H3, styled} from 'tamagui';

const Title = styled(H3, {
  alignSelf: 'center',
  paddingBottom: '$2',
});

export const Header: FC<PropsWithChildren> = ({children}) => (
  <Title>{children}</Title>
);
