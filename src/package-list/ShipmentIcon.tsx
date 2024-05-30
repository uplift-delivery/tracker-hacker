import React, {FC, forwardRef, useMemo} from 'react';
import {styled} from 'tamagui';
import {Package, PackageCheck} from '@tamagui/lucide-icons';

const DeliveredIcon = styled(
  forwardRef((props: any, _: any) => <PackageCheck {...props} />),
  {
    alignSelf: 'flex-start',
    size: '$2',
    color: '$onTime',
    'aria-label': 'delivered icon',
  },
);

export const ShippedIcon = styled(
  forwardRef((props: any, _: any) => <Package {...props} />),
  {
    alignSelf: 'flex-start',
    size: '$2',
    color: '$brand',
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
