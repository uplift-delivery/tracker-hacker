import React, {FC, forwardRef, useMemo} from 'react';
import {styled} from 'tamagui';
import {Package, PackageCheck} from '@tamagui/lucide-icons';

const DeliveredIcon = styled(
  forwardRef((props: any, _: any) => <PackageCheck {...props} />),
  {
    size: '$2',
    color: 'mediumseagreen',
    'aria-label': 'delivered icon',
  },
);

const ShippedIcon = styled(
  forwardRef((props: any, _: any) => <Package {...props} />),
  {
    size: '$2',
    color: 'dodgerblue',
    'aria-label': 'shipped icon',
  },
);

interface ShipmentIconProps {
  delivered: boolean;
}

export const ShipmentIcon: FC<ShipmentIconProps> = ({delivered}) => {
  const Icon = useMemo(
    () => (delivered ? DeliveredIcon : ShippedIcon),
    [delivered],
  );

  return <Icon />;
};
