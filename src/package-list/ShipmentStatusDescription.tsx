import React, {FC, PropsWithChildren} from 'react';
import {Text, XGroup} from 'tamagui';

interface ShipmentStatusDescriptionProps {
  label: string;
}

export const ShipmentStatusDescription: FC<
  PropsWithChildren<ShipmentStatusDescriptionProps>
> = ({label, children}) => (
  <XGroup gap="$2.5" alignItems="center">
    <XGroup.Item>
      <Text fontSize={12} color="$color" fontWeight="bold">
        {label}
      </Text>
    </XGroup.Item>

    {children}
  </XGroup>
);
