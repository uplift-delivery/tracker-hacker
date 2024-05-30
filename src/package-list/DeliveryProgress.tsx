import React, {FC, useMemo} from 'react';
import {ShipmentStatus} from '../data';
import {styled, View, ViewProps} from 'tamagui';

const ProgressContainer = styled(View, {
  paddingTop: '$2',
  paddingBottom: '$2.5',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$1',
});

const ProgressSection = styled(View, {
  flex: 1,
  height: 5,
  borderRadius: 1000,
});

interface DeliveryProgressProps {
  status: ShipmentStatus;
}

export const DeliveryProgress: FC<DeliveryProgressProps> = ({status}) => {
  const colors = useMemo(() => {
    const statusIndex = Object.values(ShipmentStatus).findIndex(
      shipmentStatus => shipmentStatus === status,
    );

    return Object.values(ShipmentStatus).map((_, index) => {
      switch (true) {
        case status === ShipmentStatus.DELIVERED:
        case index < statusIndex:
          return '$onTime';
        case index === statusIndex:
          return '$brand';
        default:
          return '#D9D9D9';
      }
    });
  }, [status]);

  return (
    <ProgressContainer>
      {colors.map((color, index) => (
        <DeliveryProgressSection
          key={`${color}-${index}`}
          backgroundColor={color}
        />
      ))}
    </ProgressContainer>
  );
};

export const DeliveryProgressSection: FC<ViewProps> = ({...props}) => (
  <ProgressSection aria-label="progress section" {...props} />
);
